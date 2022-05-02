const Reader = require("./../../../lib/utils/Reader");
const StudentService = require("./../../../lib/services/StudentService");

const studentsDB = Reader.readJsonFile("./students.test.json");

describe("Test for StudentService", () => {
    test("1. Get all students and its fields", () => {
        const students = StudentService.getStudents(studentsDB);
        expect(students.length).toBe(51);
        expect(students[0].name).toBe("Warren");
    });
    test("2. Get list of emails of the students that have certification", () => {
        const students = StudentService.getStudentsEmailsIfHaveCertification(studentsDB);
        expect(students.length).toBe(29);
    });
    
});