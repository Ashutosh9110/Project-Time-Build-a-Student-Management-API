const db = require("../utils/db-connection")


const addStudent = (req, res) => {
  const { name, email, age } = req.body
  const addQuery = "INSERT INTO students (name, email, age) VALUES(?, ?, ?)"

  db.execute(addQuery, [name, email, age], (err) => {
    if(err){
      res.status(500).json({ msg : "Unale to add student"})
      return
    }
    res.status(200).json({ msg : `Student with name ${name} has been added`})
  })

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



const updateStudent = (req, res) => {
  const id = req.params.id
  const { name, email, age } = req.body
  const updateQuery = "UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?"
  db.execute(updateQuery, [name, email, age, id], (err, results) => {
    if(err) {
      res.status(500).json({ msg : `Unable to updated student with ID ${id}`})
      return
    }
    if (results.affectedRows === 0){
      res.status(404).json({ msg : "Student doesn't exist in our database"})
      return
    }
    res.status(200).json({ msg : `Student with ID ${id} has been updated`})
  })
}


const deleteStudent = (req, res) => {
  const id = req.params.id
  const deleteQuery = "DELETE FROM students WHERE id = ?"
  db.execute(deleteQuery, [id], (err, results) => {
    if (err) {
      res.status(500).json({ msg : "Unable to delete the students"})
      return
    }
    if(results.affectedRows === 0){
      res.status(400).json({ msg : "Unable to find the student"})
    }

    res.status(200).json({ msg : `Student with ID ${id} has been deleted`})
  })
}




module.exports = {
  addStudent,
  getAllStudents,
  getStudentByID,
  updateStudent,
  deleteStudent
}