class StudentService {
	static getStudents(students){
		return Object.values(students)
	}

	static getStudentsEmailsIfHaveCertification(students){
		return students.filter((student) => student.haveCertification == true).map((student) => student.email)
	}

	static getStudentsWithCreditsGreaterThan(students, credits){
		return students.filter((student) => student.credits > credits)
	}
}

module.exports = StudentService