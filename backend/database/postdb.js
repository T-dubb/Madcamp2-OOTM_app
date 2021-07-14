const PostModel = require("../src/models/post");

function getAll(callback) {
    PostModel.find({}, (error,result) => {
        callback(result);
    });
}

function getPost(postID, callback){
    PostModel.findOne({_id: postID}, (error,result) => {
        callback(result);
    });
}

function getpostid(callback){
    PostModel.find({}, (error,result) => {
        let postids = result.map(post => post._id);
        
        callback(postids);
    });
}
function getpostid_hot(callback){
   
    PostModel.find({}, (error,result) => {
        function customSort(a, b) { 
            if((a.wishUsers.length+a.markUsers.length) == (b.wishUsers.length+b.markUsers.length)){ 
                return 0
            } 
            return (a.wishUsers.length+a.markUsers.length)>(b.wishUsers.length+b.markUsers.length) ? -1 : 1; 
        }
        result.sort(customSort);

        let postids = result.map(post => post._id);
        console.log(postids);
       
        callback(postids);
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
        },
        postgenre: postinfo.genrearray,
        date: postinfo.date,
        postImage: postinfo.postImage
    });
    newPost.save();
    callback();
}

function deletePost(postid,userid, callback){
    PostModel.findOne({_id: postid, userID: userid}, (error,result) => {
        if(result == null){
            callback(404);
        }
        else{
            PostModel.deleteOne({_id: postid, userID: userid}, (error)=>{
                callback(200);
            });
        }
    });
    

}
function deleteAll(callback) {
    PostModel.deleteMany({}, (error)=> {
    });
}
function setlike(postid,userid,callback){
    PostModel.findOne({_id: postid}, (error,result) => {
        if(result.wishUsers.includes(userid)){
            result.wishUsers.splice(result.wishUsers.indexOf(userid),1);
            PostModel.updateOne({_id: postid}, {wishUsers: result.wishUsers},
                () => {callback()});
        }
        else{
            result.wishUsers.push(userid);
            PostModel.updateOne({_id: postid}, {wishUsers: result.wishUsers},
                () => {callback()});
        }
    });
}
function getlike(postid,callback){
    PostModel.findOne({_id: postid}, (error,result) => {
        if(result){
            callback(result.wishUsers);
        }
        else{
            callback([]);
        }
    });
}
function setmark(postid,userid,callback){
    PostModel.findOne({_id: postid}, (error,result) => {
        
        if(result.markUsers.includes(userid)){
            result.markUsers.splice(result.markUsers.indexOf(userid),1);
            PostModel.updateOne({_id: postid}, {markUsers: result.markUsers},
                () => {callback()});
        }
        else{
            result.markUsers.push(userid);
            PostModel.updateOne({_id: postid}, {markUsers: result.markUsers},
                () => {callback()});
        }
    });
}
function getmark(postid,callback){
    PostModel.findOne({_id: postid}, (error,result) => {
        if(result){
            callback(result.markUsers);
        }
        else{
            callback([]);
        }
    });
}
function getpostid_mypage(userid,callback){
    PostModel.find({userID : userid}, (error,result) => {
        let userids = result.map(post => post._id);
        callback(userids);
    });
}
function getpostid_bmk(userid,callback){
    var postids = [];
    PostModel.find({}, (error,result) => {
        var markposts = result.filter(post => post.markUsers.includes(userid));
        postids = markposts.map(post => post._id);
        callback(postids);
    })
}

module.exports = {
    getAll,
    getpostid,
    getpostid_hot,
    getPost,
    add,
    deletePost,
    deleteAll,
    setlike,
    getlike,
    setmark,
    getmark,
    getpostid_mypage,
    getpostid_bmk
  };