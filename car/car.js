// Build a Car class!
 class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
        this.odometer = 0
    }
    drive(distance) {
        this.odometer += distance
        return distance
    }
}

module.exports = Car