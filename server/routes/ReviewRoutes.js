const express = require("express");
const { list, show, create, update, remove } = require( "../controllers/ReviewController");
const router = express.Router();

router.post("/api/review", create);
router.get("/api/review", list);
router.get("/api/review/:id", show);
router.put("/api/review/:id", update);
router.delete("/api/review/:id", remove);

module.exports = router;