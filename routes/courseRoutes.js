
const express = require("express")
const router = express()
const courseController = require("../controller/courseController")


router.post("/addCourse", courseController.addCourse)
router.get("/addStudentCourses", courseController.addStudentToCourses)


module.exports = router

