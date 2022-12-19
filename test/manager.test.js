const Manager = require('../class/manager')

const ManagerTest = new Manager ('Ryan Smith', 35, 'r1smith3333@gmail.com', 'Manager', 656)

describe('Manager', () => {
    it('has a name', () => {
        expect(ManagerTest.name).toEqual(expect.any(String))
    })
    it('has an id number', () => {
        expect(ManagerTest.id).toEqual(expect.any(Number))
    })
    it('has an email id', () => {
        expect(ManagerTest.email).toEqual(expect.stringContaining('@'))
    })
    it('has a position of Manager', () => {
        expect(ManagerTest.position).toBe('Manager')
    })
    it('has a office number', () => {
        expect(ManagerTest.office).toEqual(expect.any(Number))
    })
})