const express = require("express");
const { list, show, create, update, currentStudent } = require( "../controllers/StudentController");
const router = express.Router();

router.get("/api/currentStudent", currentStudent);
router.post("/api/student", create);
router.get("/api/student", list);
router.get("/api/student/:id", show);
router.put("/api/student/:id", update);


module.exports = router;