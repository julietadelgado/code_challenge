const StudentController = require("./lib/controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Students Api welcome!"});
});

app.listen(port, () => {
    console.log(`Students API in localhost:${port}`);
});

app.get("/v1/students/",(request, response) => {
    const students = StudentController.getStudents();
    response.json(students);
});
