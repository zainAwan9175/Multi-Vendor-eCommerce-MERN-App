// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
  
    const options = {
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    };
  
    return res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  };
  
  module.exports = sendToken;