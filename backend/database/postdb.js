const PostModel = require("../src/models/post");

function getAll(callback) {
    PostModel.find({}, (error,result) => {
        callback(result);
    });
}
function add(postinfo, callback){
    const newPost = new PostModel({
        userName: postinfo.userName,
        userID: postinfo.userID,
        //userProfile:
        userBody: {height: postinfo.height, weight: postinfo.weight},
        wishUsers: [],
        markUsers: [],
        //postImage: [],
        clothInfo: {
            top: postinfo.top,
            bot: postinfo.bot,
            sho: postinfo.sho,
            out: postinfo.out,
            acc: postinfo.acc
        }
    });
}
function deletePost(postid, callback){
    PostModel.deleteOne({_id: postid}, (error)=>{
        callback();
    });
}
function deleteAll(callback) {
    PostModel.deleteMany({}, (error)=> {
    });
}

module.exports = {
    getAll,
    add,
    deletePost,
    deleteAll
  };