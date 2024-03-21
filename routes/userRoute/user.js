const express = require("express");
const userRoute = express.Router();
const {
  register,
  login,
  verifyEmail,
  refreshToken,
  userProfile,
  viewUserPost,
  viewUserComment,
  uploadAvatar,
  editProfile,
  deleteProfile,
  userUpvoted,
  userDownvoted,
} = require("../../controllers/userController/user");
const authentication = require("../../middlewares/jwt");
const tryCatch = require("../../middlewares/tryCatchMiddleware");



userRoute.post("/register", tryCatch(register));
userRoute.post("/login", tryCatch(login));
userRoute.post("/token", tryCatch(refreshToken));
userRoute.get("/users/userprofile", authentication, tryCatch(userProfile));
userRoute.get("/users/viewuserpost", authentication, tryCatch(viewUserPost));
userRoute.get("/users/viewusercomment",authentication,tryCatch(viewUserComment));
userRoute.put("/users/uploadavatar", authentication, tryCatch(uploadAvatar));
userRoute.put("/users/editprofile", authentication, tryCatch(editProfile));
userRoute.delete("/users/deleteprofile",authentication,tryCatch(deleteProfile));
userRoute.get("/users/userupvote", authentication, tryCatch(userUpvoted));
userRoute.get("/users/userdownvote", authentication, tryCatch(userDownvoted));
userRoute.post("/verify-email",verifyEmail);

module.exports = userRoute;


