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

app.get("/v1/students/emails/haveCertification",(request, response) => {
    const students = StudentController.getStudentsEmailsIfHaveCertification();
    response.json({haveCertification: true, emails: students});
});


app.get("/v1/students/creditsGreaterThan/:credits",(request, response) => {
    const credits = request.params.credits;
    const students = StudentController.getStudentsWithCreditsGreaterThan(credits);
    response.json({credits: request.params.credits, students: students});
});