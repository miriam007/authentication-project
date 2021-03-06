const express = require("express");
const { list, show, create, update, currentTutor } = require( "../controllers/TutorController");
const router = express.Router();

router.get("/api/currentTutor", currentTutor);
router.post("/api/tutor", create);
router.get("/api/tutor", list);
router.get("/api/tutor/:id", show);
router.put("/api/tutor/:id", update);

module.exports = router;