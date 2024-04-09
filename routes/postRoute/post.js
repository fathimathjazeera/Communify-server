const express = require("express");
const postRoute = express.Router();
const {
  createPost,
  viewPosts,
  viewPopular,
  viewSpecificPost,
  editPost,
  reportPost,
  deletePost,
  upVote,
  downVote,
} = require("../../controllers/postController/post.js");
const authentication = require("../../middlewares/jwt");
const tryCatch = require("../../middlewares/tryCatchMiddleware");

postRoute.post("/createpost", authentication, tryCatch(createPost));
postRoute.get("/viewposts", tryCatch(viewPosts));
postRoute.get("/viewpopular", authentication, tryCatch(viewPopular));
postRoute.get("/singlepost/:id", tryCatch(viewSpecificPost));
postRoute.put("/editpost/:postId", authentication, editPost);
postRoute.put("/reportpost/:postId", authentication, reportPost);
postRoute.delete("/deletepost/:postId", authentication, deletePost);
postRoute.post("/upvote/:id", authentication, tryCatch(upVote));
postRoute.post("/downvote/:id", authentication, tryCatch(downVote));

module.exports = postRoute;
