const jwt = require("jsonwebtoken");

const authenticate = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-plutonium", function (err, data) {
        if (err) {
            return res.send({ status: false, msg: "Token is invalid" });
        } else {
            next()
        }
    });
    // if (!decodedToken){
    //   return res.send({ status: false, msg: "Token is invalid" });
    // }
    // else {next()}
}
const authorizated = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];


    let decodedToken = jwt.verify(token, "functionup-plutonium");
    if (decodedToken.userId !== req.params.userId) {
        return res.send({ status: false, msg: "UserId or Token is Wrong" });
    }
    else {
        next()
    }
}


module.exports.authenticate = authenticate;
module.exports.authorizated = authorizated;