const express = require("express");
const db = require("../../database/postdb");
const router = express.Router();

router.get("/gets", (req, res) => {
    db.getAll((item) => {res.json(item)
    });
});

router.get("/getpostid", (req,res) => {
    db.getpostid((item) => {res.status(200).send(item)
    });
});
router.get("/getpostid-hot", (req,res) => {
    db.getpostid_hot((item) => {res.status(200).send(item)})
})

router.get("/getpostid-mypage/:userID", (req,res) => {
    db.getpostid_mypage(req.params.userID,(item) => {res.status(200).send(item)
    });
});

router.get("/getpostid-bmk/:userID", (req,res) => {
    db.getpostid_bmk(req.params.userID,(item) => {res.status(200).send(item)
    });
});



router.get("/getpost/:postID", (req, res) => {
    
    db.getPost(
        req.params.postID,
        (item) => {res.json(item)
        }
    );
});

router.post("/add", (req, res) => {
    db.add(req.body, () => {res.status(200).send();
    });
});

router.get("/addtest", (req, res) => {
    db.addtest(() => {res.status(200).send();
    });
});

router.post("/delete", (req,res) => {
    db.deletePost(req.body._id,req.body.userid,
        (item) => {res.status(200).sendStatus(item);
    });
});

router.get("/deleteAll", (req,res) => {
    db.deleteAll(
        () => {
            res.status(200).send();
    });
});

router.post("/setlike", (req,res) => {
    
    db.setlike(
        req.body.postid,
        req.body.userid,
        () => {res.status(200).send()
    });
});
router.get("/getlike/:postID", (req,res) => {
    db.getlike(
        req.params.postID,
        (item) => {res.status(200).send(item)
    })
});

router.post("/setmark", (req,res) => {

    db.setmark(
        req.body.postid,
        req.body.userid,
        () => {res.status(200).send()
    });
});
router.get("/getmark/:postID", (req,res) => {
    db.getmark(
        req.params.postID,
        (item) => {res.status(200).send(item)
    })
});
module.exports = router;