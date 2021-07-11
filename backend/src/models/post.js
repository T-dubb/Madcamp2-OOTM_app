/*Posts API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    userName: String,
    userID: String,
    userProfile: String, //사진으로 변경예정
    userBody: {
        height: Number,
        weight: Number
    },
    wishUsers: [String],
    markUsers: [String],
    postImages: [String], //사진으로 변경 예정
    clothInfo: {
        top: String,
        bot: String,
        sho: String,
        out: String,
        acc: String
    }
});
const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;