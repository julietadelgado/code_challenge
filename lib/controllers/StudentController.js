const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

class StudentController {
	static getStudents(students){
		const studentsDB = Reader.readJsonFile("./students.test.json");
		return StudentService.getStudents(studentsDB)
	}

	static getStudentsEmailsIfHaveCertification(students){
		const studentsDB = Reader.readJsonFile("./students.test.json");
		return StudentService.getStudentsEmailsIfHaveCertification(studentsDB)
	}

	static getStudentsWithCreditsGreaterThan(students, credits){
		const studentsDB = Reader.readJsonFile("./students.test.json");
		return StudentService.getStudentsWithCreditsGreaterThan(studentsDB, credits)
	}
}

module.exports = StudentController