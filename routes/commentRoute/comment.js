const express=require('express')
const commentRoute=express.Router()
const {postComment,
    viewComments,
    deleteComment,
    editComment,
    replyComment,
    viewReply,
    voteComment}=require('../../controllers/commentController/comment.js')
const authentication=require('../../middlewares/jwt')
const tryCatch=require('../../middlewares/tryCatchMiddleware')




commentRoute.post('/postcomment/:id',authentication,tryCatch(postComment))
commentRoute.get('/viewcomment/:id',tryCatch(viewComments))
commentRoute.put('/editcomment/:commentId',authentication,tryCatch(editComment))
commentRoute.delete('/deletecomment/:id',tryCatch(deleteComment))
commentRoute.put('/replycomment/:commentId',authentication,tryCatch( replyComment))
commentRoute.get('/viewreply/:postId',tryCatch(viewReply))
commentRoute.put('/votecomment/:commentId',authentication,tryCatch(voteComment))



module.exports=commentRoute

