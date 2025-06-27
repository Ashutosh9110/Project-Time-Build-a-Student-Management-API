const express = require("express")
const db = require("./utils/db-connection")

require("./models")

const app = express()
const studentRouter = require("./routes/studentRoutes")


app.use(express.json())

app.use("/students", studentRouter)


db.sync().then(() => {
  app.listen(3000, (err) => {
    console.log("Server running at PORT 3000");
})
}).catch((err) => {
  console.log(err);
})

