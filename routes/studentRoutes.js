const express = require("express")
const router = express.Router()
const studentController = require("../controller/studentController")


router.post("/addStudent", studentController.addStudent)
router.get("/getAllStudents", studentController.getAllStudents)
router.get("/getStudentById/:id", studentController.getStudentByID)
router.put("/updateStudent/:id", studentController.updateStudent)
router.delete("/deleteStudent/:id", studentController.deleteStudent)



module.exports = router