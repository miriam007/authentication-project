const express = require("express");
const { list, show, create, update, currentStudents } = require( "../controllers/StudentController");
const router = express.Router();

router.get("/api/currentStudent", currentStudents);
router.post("/api/student", create);
router.get("/api/student", list);
router.get("/api/student/:id", show);
router.put("/api/student/:id", update);


module.exports = router;