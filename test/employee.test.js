const Employee = require('../class/employee');

const EmployeeTest = new Employee ('Ryan Smith', 35, 'r1smith3333@gmail.com', 'Employee');

describe('Employee', () => {
    it('has a name', () => {
        expect(EmployeeTest.name).toEqual(expect.any(String))
    })
    it('has an id number', () => {
        expect(EmployeeTest.id).toEqual(expect.any(Number))
    })
    it('has an email id', () => {
        expect(EmployeeTest.email).toEqual(expect.stringContaining('@'))
    })
    it('has a position', () => {
        expect(EmployeeTest.position).toBe('Employee')
    })
})