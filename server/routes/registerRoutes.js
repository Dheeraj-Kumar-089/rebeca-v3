const express = require('express')
const router = express.Router()
const regController = require("../controllers/registerController")
const checkAuth = require('../middlewares/authMiddleware')


router.post("/", checkAuth, regController.createReg)
router.patch("/", regController.updateReg)
router.delete("/:id", regController.deleteReg)
router.get("/all", regController.getAllReg)
router.get("/", checkAuth, regController.getAllUserRegs)
module.exports = router