// ---------------------------------------------------
// CONFIG SETUP - Authentication
// ---------------------------------------------------

// 1) Importing External Libraries
const jwt = require('jsonwebtoken');

// 2) Export function for checking authentication
module.exports = {
	authenticate(req, res, next) {
		jwt.verify(req.cookies.usertoken,
			'secret123456',
			(err, payload) => {
				if(err) {
					console.log(err);
					res.status(401).json({ verified: false })
				} else {
					console.log("You are authenticated");
					next();
				}
			}
		)
	}
}