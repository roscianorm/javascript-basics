// Objects are data collections composed of properties/keys that have values. They can be modified by adding new properties, modifiying the value of a propertie, deleting a property and others.
let car = {
  brand: 'Tesla',
  model: 'Model S',
  year: '2021',
  carDetails: function getDetails() {
    console.log(`Car details - ${this.brand} ${this.model}`)
  },
}
// To call the carDetails property you have to do it like a function. For example: car.carDetails()

console.log('The variable car is an', typeof car)
console.log(car)
console.log(car.carDetails())
