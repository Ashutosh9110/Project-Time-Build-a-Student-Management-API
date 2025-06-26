const express = require("express")
const db = require("./utils/db-connection")
const app = express()
const studentRouter = require("./routes/studentRoutes")

app.use(express.json())

app.use("/students", studentRouter)


app.listen(3000, () => {
  console.log("Server running at PORT 3000");
})