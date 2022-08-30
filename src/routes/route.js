const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const authmiddw = require("../middleware/auth")

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", authmiddw.authenticate, authmiddw.authorizated, userController.getUserData)

router.put("/users/:userId", authmiddw.authenticate, authmiddw.authorizated, userController.updateUser)

router.delete("/users/:userId", authmiddw.authenticate, authmiddw.authorizated, userController.deleteUser)

module.exports = router;