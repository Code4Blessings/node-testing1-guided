// Test away!
const Car = require('./car')
// Unit tests test the smallest parts of a program
// Functions, classes, or modules with functions
// External libraries are mocked

describe('Car Class', () => {
    it('exists', () => {
        expect(Car).toBeDefined()
    })
    it('can make a car with it', () => {
        const prius = new Car()
        expect(prius).toBeInstanceOf(Car)
    })
    it('instances of cars have a model prop', () => {
        const newCar = new Car()
        expect(newCar).toHaveProperty('model')
        expect(newCar.model).toBeDefined
    })
})

function addsOne(num) {
    return num + 1
}

function greets(name) {
    return `Hello ${name}`
}

function objectify(name) {
    return { name }
}

describe('intro to jest', () => { //to organize
    test('returns a new value', () => {
        expect(true).toBe(true) //assertion
        expect(true).not.toBe(false) //assertion
    })

    it('adds one to the input number', () => {
        const expectedResult = 3;
        const actualResult = addsOne(2)
        expect(actualResult).toBe(expectedResult)
    })

    it('says hello to the person', () => {
        const expectedResult = 'Hello Robin'
        const actualResult = greets('Robin')
        expect(actualResult).toBe(expectedResult)
    })

    // When using composite structures such as {} and [], .toBe function will NOT work. Use .toEqual
    it('returns an object with a name', () => {
        expect(objectify('John')).toEqual({name: 'John'})
    })
})