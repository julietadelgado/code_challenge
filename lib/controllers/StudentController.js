const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

class StudentController {
    static getStudents(){
        const studentsDB = Reader.readJsonFile("./students.json");
        return StudentService.getStudents(studentsDB);
    }

    static getStudentsEmailsIfHaveCertification(){
        const studentsDB = Reader.readJsonFile("./students.json");
        return StudentService.getStudentsEmailsIfHaveCertification(studentsDB);
    }

    static getStudentsWithCreditsGreaterThan(credits){
        const studentsDB = Reader.readJsonFile("./students.json");
        return StudentService.getStudentsWithCreditsGreaterThan(studentsDB, credits);
    }
}

module.exports = StudentController;