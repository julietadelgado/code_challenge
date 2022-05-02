class StudentService {
	static getStudents(students){
		return Object.values(students)
	}

	static getStudentsEmailsIfHaveCertification(students){
		return students.filter((student) => student.haveCertification == true).map((student) => student.email)
	}

}

module.exports = StudentService
