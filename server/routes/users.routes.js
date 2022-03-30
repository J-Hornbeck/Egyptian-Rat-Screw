const UserController = require('../controllers/users.controller');

const { authenticate } = require('../config/jwt.config');


module.exports = (app) => {
	app.post("/api/user/register", UserController.register);
	app.post("/api/user/login", UserController.login);
	app.get("/api/user/logout", UserController.logout);
	app.get("/api/user/account", authenticate, UserController.getUserById);
}

