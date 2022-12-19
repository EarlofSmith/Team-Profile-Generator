const Intern = require('../class/intern')

const InternTest = new Intern ('Ryan Smith', 35, 'r1smith3333@gmail.com', 'Intern', 'Denver University')

describe('Intern', () => {
    it('has a name', () => {
        expect(InternTest.name).toEqual(expect.any(String))
    })
    it('has an id number', () => {
        expect(InternTest.id).toEqual(expect.any(Number))
    })
    it('has an email id', () => {
        expect(InternTest.email).toEqual(expect.stringContaining('@'))
    })
    it('has a position of Intern', () => {
        expect(InternTest.position).toBe('Intern')
    })
    it('has a github name', () => {
        expect(InternTest.school).toEqual(expect.any(String))
    })
})