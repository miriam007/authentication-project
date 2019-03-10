const express = require("express");
const { list, show, create, update } = require( "../controllers/StudentController");
const router = express.Router();

router.post("/api/student", create);
router.get("/api/student", list);
router.get("/api/student/:id", show);
router.put("/api/student/:id", update);

module.exports = router;