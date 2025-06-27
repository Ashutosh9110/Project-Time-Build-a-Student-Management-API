const Student = require("./student")
const IdentityCard = require("./identityCard")
const department = require("./department")



// One To One

Student.hasOne(IdentityCard)
IdentityCard.belongsTo(Student)


department.hasMany(Student)
Student.belongsTo(department)


module.exports = {
  Student,
  IdentityCard
}


// One to many

