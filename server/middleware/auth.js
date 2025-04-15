const ErrorHandler =require("../utils/ErrorHandler");
const catchAsyncError =require("./catchAsyncError");

const User = require("../model/userModel");
const  jwt  = require("jsonwebtoken");
exports.isAuthenticated = catchAsyncError(async (req, res, next) => {

    const { token } = req.cookies;
    console.log(token)
  
    if (!token) {
      return next(new ErrorHandler("Login to access this resource", 401));
    }
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
  
const user= await User.findById(decodedData.id);
if (!user) {
    return next(new ErrorHandler("Login to access this resource", 401));
  }
req.user =user;
  
    return next();
  });