// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };

// object1.number = 4;
// console.log(object2.number);
// console.log(object3.number);
// console.log(object4.number);

// Define the Animal class
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Define the Mammal class that extends Animal
class Mammal extends Animal {
  sound(noise) {
    return `I make a ${noise}! I'm a ${this.type}, named ${this.name}, and I'm ${this.color}.`;
  }
}

// Create a farmerCow object as an instance of Mammal
const farmerCow = new Mammal("Lily", "cow", "brown and white");

// Call the sound method with "moos" as the sound parameter
const cowSound = farmerCow.sound("moos");

// Log the result
console.log(cowSound); // Output: I make a moos! I'm a cow, named Lily, and I'm brown and white.
