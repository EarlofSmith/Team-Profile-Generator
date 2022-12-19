const Engineer = require('../class/engineer')

const EngineerTest = new Engineer ('Ryan Smith', 35, 'r1smith3333@gmail.com', 'Engineer', 'EarlofSmith')

describe('Engineer', () => {
    it('has a name', () => {
        expect(EngineerTest.name).toEqual(expect.any(String))
    })
    it('has an id number', () => {
        expect(EngineerTest.id).toEqual(expect.any(Number))
    })
    it('has an email id', () => {
        expect(EngineerTest.email).toEqual(expect.stringContaining('@'))
    })
    it('has a position of engineer', () => {
        expect(EngineerTest.position).toBe('Engineer')
    })
    it('has a github name', () => {
        expect(EngineerTest.gitHub).toEqual(expect.any(String))
    })
})