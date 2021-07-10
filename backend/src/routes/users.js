const express = require("express");
const db = require("../../database/userdb");
const router = express.Router();

router.get("/gets", (req, res) => {
    db.getAll((item) => {res.json(item)
    });
});

router.post("/login", (req, res) => {
    db.add(req.body, () => {res.status(200).send();
    });
});
router.post("/delete", (req,res) => {
    db.deleteUser(req.body.userID, () => {res.status(200).send();
    });
});
router.get("/deleteAll", (req,res) => {
    db.deleteAll(
        () => {
            res.status(200).send();
    });
});

module.exports = router;