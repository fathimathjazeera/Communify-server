const express=require('express')
const communityRoute=express.Router()
const {createCommunity,
    viewSingleCommunity,
    viewCommunityPost,
    joinCommunity,
    allCommunities}= require('../../controllers/communityController/community.js')
const authentication=require('../../middlewares/jwt')
const tryCatch=require('../../middlewares/tryCatchMiddleware')





communityRoute.post('/createcommunity',authentication,tryCatch(createCommunity))
communityRoute.get('/singlecommunity/:id',tryCatch(viewSingleCommunity))
communityRoute.get('/communitypost/:communityname', tryCatch( viewCommunityPost))
communityRoute.put('/joincommunity/:communityId',authentication,tryCatch(joinCommunity))
communityRoute.get('/allcommunities',authentication,tryCatch( allCommunities))



module.exports=communityRoute