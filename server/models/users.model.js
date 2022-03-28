const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Error: first name is required"],
        minlength: [2, "Error: first name must be atleast 2 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Error: last name is required"],
        minlength: [2, "Error: last name must be atleast 2 characters"]
    },
    email: {
        type: String,
        required: [true, "Error: email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Error: Please enter a valid email"
        }
    },
    address: {
        type: String,
        required: [true, "Error: address is required"],
        minlength: [2, "Error: address must be atleast 2 characters"]
    },
    city: {
        type: String,
        required: [true, "Error: city is required"],
    },
    state: {
        type: String,
        required: [true, "Error: state is required"],
    },
    password: {
        type: String,
        required: [true, "Error: password is required"],
        minlength: [2, "Error: password must be atleast 2 characters"]
    }
}, { timestamps: true });

UserSchema.virtual("confirmPassword")
	.get(() => this._confirmPassword)
	.set((value) => this._confirmPassword = value);

UserSchema.pre("validate", function(next) {
    if(this.confirmPassword === ""){
        his.invalidate("confirmPassword", "Error: confirm password is required");
    }
    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Error: passwords didn't match, please type them again");
    }
    next();
})

UserSchema.pre("save", function(next) {
	bcrypt.hash(this.password, 10)
		.then((hashedPassword) => {
			this.password = hashedPassword;
			next();
		})
})


const User = mongoose.model("User", UserSchema);

module.exports = User;