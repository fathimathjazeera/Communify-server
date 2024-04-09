const express = require("express");
const adminRoute = express.Router();
const {
  fetchAllUsers,
  specificUser,
  viewUserPost,
  viewUserComment,
  createCommunity,
  viewCommunities,
  viewSpecificCommunity,
  viewCommunityPost,
  blockUser,
  reportedPost,
} = require("../../controllers/adminController/admin.js");
const authentication = require("../../middlewares/adminJwt");

adminRoute.get("/allusers", authentication, fetchAllUsers);
adminRoute.get("/specificuser/:id", authentication, specificUser);
adminRoute.get("/viewuserpost/:userId", authentication, viewUserPost);
adminRoute.get("/viewusercomment/:userId", authentication, viewUserComment);
adminRoute.post("/createcommunity", authentication, createCommunity);
adminRoute.get("/viewcommunities", authentication, viewCommunities);
adminRoute.get("/specificcommunity/:communityname", viewSpecificCommunity);
adminRoute.get("/communitypost/:communityname", viewCommunityPost);
adminRoute.put("/blockuser/:userId", blockUser);
adminRoute.get("/reportedpost", reportedPost);

module.exports = adminRoute;
