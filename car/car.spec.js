// Test away!
const Car = require('./car')
// Unit tests test the smallest parts of a program
// Functions, classes, or modules with functions
// External libraries are mocked

describe('Car Class', () => {
    // beforeEach states that before each test is run, include the new Car statement
    let corolla
    beforeEach(() => {
        corolla = new Car('toyota', 'corolla')
    })
    it('exists', () => {
        expect(Car).toBeDefined()
    })
    it('can make a car with it', () => {
        expect(corolla).toBeInstanceOf(Car)
    })
    it('instances of cars have a model prop', () => {
        expect(corolla).toHaveProperty('model')
        expect(corolla.model).toBeDefined
    })
    it('cars can be initialized with a custom make and model', () => {
       // we can instantiate a car passing make and model
       // and that gives us an object with the same make and model
       expect(corolla).toHaveProperty('make', 'toyota')
       expect(corolla).toHaveProperty('model', 'corolla')
       expect(corolla.make).toBe('toyota')
       // expect(corolla).toEqual({make: 'toyota', model: 'corolla'}) --this will fail when constructor is updated
       expect(corolla).toMatchObject({ make: 'toyota', model: 'corolla'})
    })
    it('has an odometer initialized at zero for all cars', () => {
        expect(corolla.odometer).toBe(0)
    })
    it('has a drive method that takes distance and increases odometer', () => {
        corolla.drive(12)
        corolla.drive(14)
        expect(corolla.odometer).toBe(26)
    })
    it('drive method returns the distance driven', () => {
        const distanceDriven = corolla.drive(25)
        expect(distanceDriven).toBe(25)
    })
})

// it.only will enable you to run just one test

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