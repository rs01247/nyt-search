const express = require("express");
const router = express.Router();
const userRouter = require("./user.routes");
const projectRouter = require("./project.routes");

router.use("/user", userRouter);
router.use("/project", projectRouter);

module.exports = router;