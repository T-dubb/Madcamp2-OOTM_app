const UserModel = require("../src/models/users");

function getAll(callback) {
    const newItem = new UserModel({
        username: '예시이름'
    });
    //console.log(UserModel.count());
    if(UserModel.count()==0){
        newItem.save();
    }

    UserModel.find({}, (error,result) => {
        callback(result);
    });
}
function getUser(userID, callback){
    UserModel.findOne({userID: userID}, (error,result) => {
        callback(result);
    });
}
function add(userinfo, callback) {
    UserModel.find({"userID": userinfo.userID}, (error,result) => {
        if(result.length){
            callback();
        }
        else{
            const newUser = new UserModel({
                userName: userinfo.username,
                userID: userinfo.userID,
                userProfile: userinfo.userProfile,
                postArray: []
            });
            newUser.save();
            callback();
        }
    })
}
function deleteUser(userid, callback){
    UserModel.deleteOne({userID: userid}, (error)=>{
        callback();
    });
}
function deleteAll(callback) {
    UserModel.deleteMany({}, (error)=> {
    });
}

module.exports = {
    getAll,
    getUser,
    add,
    deleteUser,
    deleteAll
  };