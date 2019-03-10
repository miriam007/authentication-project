const express = require("express");
const {create, list, show} = require( "../controllers/UserController");
const router = express.Router();

router.post("/api/users", create);
router.get("/api/users", list);
router.get("/api/users/:id", show);

module.exports = router;
