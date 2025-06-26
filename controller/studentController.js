const db = require("../utils/db-connection")
const Student = require("../models/student")

const addStudent = async (req, res) => {
  try {
    const { name, email } = req.body
    const student = await Student.create({
      name:name,
      email:email 
    })
    res.status(200).json({ msg : `Student with name ${name} has been added`})
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ msg : "Unable to add the student"})
  }
}

const getAllStudents = (req, res) => {

  const getAllStudentsQuery = "SELECT * FROM students"
  db.execute(getAllStudentsQuery, (err, results) => {
    if (err) {
      res.status(500).json({ msg : "Unable to fetch students"})
      return
    }
    res.status(200).json(results)
  })
}


const getStudentByID = (req, res) => {
  const id = req.params.id
  const getStudentByIDQuery = "SELECT * FROM students WHERE id = ?"
  db.execute(getStudentByIDQuery, [id], (err, results) => {
    if(err) {
      res.status(500).json({ msg : `Unable to find student with ${id}`})
      return
    }
    if (results.affectedRows === 0){
      res.status(400).json({ msg : "Student doesn't exist in our database"})
      return
    }
    res.status(200).json(results)
  })
}



const updateStudent = async (req, res) => {
  try {
    const id = req.params.id
    const { name, email } = req.body
      const student = await Student.findByPk(id)
      if(!student) {
        res.status(404).json({ msg : "Student not found"})
      }
      student.name = name
      student.email = email
      await student.save()
      res.status(200).json({ msg : "User has been updated"})
  } catch (error) {
      res.status(500).json({ msg : "Unable to update the user"})
  }
}


const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id
    const student = await Student.destroy({
      where: {
        id: id
      }
    })
    if(!student) {
      res.status(404).json({ msg : "Student not found"})
    }
      res.status(200).json({ msg : "Student is deleted"})
  } catch (error) {
    res.status(500).json({ msg : "Unable to delete the student"})
  }  
}




module.exports = {
  addStudent,
  getAllStudents,
  getStudentByID,
  updateStudent,
  deleteStudent
}