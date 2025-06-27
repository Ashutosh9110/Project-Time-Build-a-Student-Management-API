const express = require("express")
const db = require("./utils/db-connection")

require("./models")

const app = express()
const studentRouter = require("./routes/studentRoutes")
const courseRouter = require("./routes/courseRoutes")


app.use(express.json())

app.use("/students", studentRouter)
app.use("/courses", courseRouter)


db.sync().then(() => {
  app.listen(3000, (err) => {
    console.log("Server running at PORT 3000");
})
}).catch((err) => {
  console.log(err);
})

