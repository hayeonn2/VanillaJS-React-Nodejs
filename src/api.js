import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("하이 나 api 임!");
});

export default router;