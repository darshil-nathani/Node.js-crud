const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./config/db.config');
const studentRoute = require('./routes/student.route');

const app = express();
app.use(express.json());
// app.use(cors);


const { connectionString, portNo } = dbConfig;

attemptConnection()
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.log("eor connecting to MongoDB: " + e.message));


async function attemptConnection() {
  await mongoose.connect(connectionString);
}

app.get("/", (req, res) => {
  res.json({ message: "API is Live!" });
});

app.use("/students", studentRoute);

app.listen(portNo, () => {
  console.log(`Server running on ${portNo}`);
});
