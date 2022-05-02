const Reader = require("./../../../lib/utils/Reader");
describe("Test for Reader", () => {
    test("1. Validate if read file and returns students", () => {
        const students = Reader.readJsonFile("./students.test.json");
        expect(students.length).toBe(51);
    });
});