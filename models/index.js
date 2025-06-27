const Student = require("./student")
const IdentityCard = require("./identityCard")
const department = require("./department")
const studentCourses = require("./studentCourses")
const courses = require("./courses")


// One To One

Student.hasOne(IdentityCard)
IdentityCard.belongsTo(Student)

// One to many

department.hasMany(Student)
Student.belongsTo(department)


// many to many

Student.belongsToMany(courses, { through: studentCourses})
courses.belongsToMany(Student, { through: studentCourses})



module.exports = {
  Student,
  IdentityCard,
  courses,
  studentCourses
}



