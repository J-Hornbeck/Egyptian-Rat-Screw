const User = require("../models/users.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 2) Setting up and exporting LogReg requests to server
// I) REGISTER REQUEST
const register = (req, res) => {
	const newUser = new User(req.body);
	newUser.save()
		.then(() => {
			res.json({
				message: "Successfully registered",
				user: newUser,
			})
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		})
}

// II) LOGIN REQUEST

const login = (req, res) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (user === null) {
				// ERROR 1: email address is not in DB
				res.status(400).json({ message: "Invalid Login Attempt - 1" })
			} else {
				// Found a valid user with that email address
				// verify the password is valid
				bcrypt.compare(req.body.password, user.password)
					.then((isPasswordValid) => {
						// successfully compared the values, but the boolean tells us if they match
						if (isPasswordValid === true) {
							// return a success WITH a cookie to prove they logged in successfully
							console.log("password is valid");
							// i) Create Cookie Object and sign it with JWT
							res.cookie("usertoken",
								jwt.sign(
									{ // we can save anything we want in this object and it will be a part of the JWT cookie
										_id: user._id,
										email: user.email
									},
									'secret123456'
								),
								{ // options for this response cookie
									httpOnly: true,
									expires: new Date(Date.now() + 900000000)  // time until they have to log in again
								}
							)
								// ii) Return data related to successfull login
								.json({
									message: "Successfully logged in",
									userLoggedIn: {
										userId: user._id
									}
								})
						} else {
							// ERROR 2: password is not vaild
							res.status(400).json({ message: "Invalid Login Attempt - 2" })
						}
					})
					.catch((err) => {
						// ERROR 2: error comparing passwords when using bcrypt
						res.status(400).json({ message: "Invalid Login Attempt - 3" })
					})
			}
		})
		.catch((err) => {
			// ERROR 4: specific to errors while looking for the document
			res.status(400).json({ message: "Invalid Login Attempt - 4" })
		})
}

const logout = (req, res) => {
	console.log("Logging out!");
	res.clearCookie("usertoken");
	res.status(200).json({
		message: "You have successfully logged out of our system"
	});
}

const getUserById = (req, res) => {
	const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true })
	const user = decodedJwt.payload
	User.findOne({ _id: user._id })
		.then((queriedUser) => res.json({ queriedUser }))
		.catch((err) => { res.status(400).json({ err }) });
}

const updateUser = (req, res) => {
	console.log(req.body.email)
	User.findOneAndUpdate({ email: req.body.email }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updatedUser) => res.json({ updatedUser }))
		.catch((err) => { res.status(400).json({ err }) });
}

module.exports = {
	register,
	login,
	logout,
	getUserById,
	updateUser
}