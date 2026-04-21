// Middle man => Client Server
const authMiddleware = (req, res, next) => {
    const { username, password } = req.body;
    if(username === "admin" && password === "12345"){
     next();   
    } else{
        res.send("Invalid Credentials");
    }
}
module.exports = authMiddleware;