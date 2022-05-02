const StudentController = require("./../../../lib/controllers/StudentController");


describe("Test for StudentController", () => {
    test("1. Get all students and its fields", () => {
        const students = StudentController.getStudents();
        expect(students.length).toBe(51);
        expect(students[0].name).toBe("Warren");
    });
    test("2. Get list of emails of the students that have certification", () => {
        const students = StudentController.getStudentsEmailsIfHaveCertification();
        expect(students.length).toBe(29);
    });
    test("3. Get list of students with credits greater than 500", () => {
        const students = StudentController.getStudentsWithCreditsGreaterThan(500);
        expect(students.length).toBe(27);
    });
    
});