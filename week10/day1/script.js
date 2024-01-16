// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng}));

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };

//   console.log(Object.entries(object1));
//   // expected output: ["a", "b", "c"]

//   for(let [key,value] of Object.entries(object1)){
//     console.log(${key}:${value})
//   }

// const shopping = [
//     ["apple", "$2"],
//     ["pear", "$1"],
//     ["banana", "$0.77"],
//   ];
//   const shoppingObject = Object.fromEntries(shopping);
//   console.log(shoppingObject); // { apple: '$2', pear: '$1', banana: '$0.77' }

// exercise1

// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }
// const numObj=Object.keys(myObj)
// const numValue=Object.values(myObj)
// console.log(the x# key is:${numObj.length},the x# value is:${numValue.length})

// const address = {
//     street: 'Evergreen Terrace',
//     number: '742',
//     city: 'Springfield',
//     state: 'NT',
//     zip: '49007',
//   };

//   const { street: s, city: c } = address;
//   console.log(s) //Evergreen Terrace
//   console.log(c) //Springfield

//   const address = {
//     street: 'Evergreen Terrace',
//     number: '742',
//     city: 'Springfield',
//     state: 'NT',
//     zip: '49007',
//   };

//   const { street, city } = address;
//   console.log(street) //Evergreen Terrace
//   console.log(city) //Springfield

//   //Other Example
//   let {e, f} = { e: 10, f: 20 };
//   console.log('e: ',e); // e: 10
//   console.log('f: ',f); // f: 20

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

// // We define 3 local variables: name, maths, science
// // Default value to the variable science, in case the key doesn't exist in the object student
// const { name, scores: {maths, science = 50} } = student;

// console.log(${name} scored ${maths} in Maths and ${science} in Elementary Science.);
// // John Doe scored 74 in Maths and 50 in Elementary Science.

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63,
//         science: 85
//     }
// };

// // Without Destructuring
// function displaySummary(student) {
//     console.log('Hello, ' + student.name);
//     console.log('Your Maths score is ' + (student.scores.maths || 0));
//     console.log('Your English score is ' + (student.scores.english || 0));
//     console.log('Your Science score is ' + (student.scores.science || 0));
// }

// // With Destructuring
// function displaySummary({name, scores: { maths = 0, english = 0, science = 0 }}) {
//     console.log('Hello, ' + name);
//     console.log('Your Maths score is ' + maths);
//     console.log('Your English score is ' + english);
//     console.log('Your Science score is ' + science);
// }

// displaySummary(student);

// let obj = {foo: 1, bar: 2};
// let newObj = {...obj, baz: 3}
// console.log(newObj) //{ foo: 1, bar: 2, baz: 3 }

// If property keys clash, the property that is mentioned last “wins”:
// let obj = {foo: 1, bar: 2, baz: 3};
// let newObj = {...obj, foo: true}
// console.log(newObj) //{ foo: true, bar: 2, baz: 3 }

// let newObj =  {foo: true, ...obj}
// console.log(newObj) //{ foo: 1, bar: 2, baz: 3 }

// let newObj = {...'abc'}
// console.log(newObj) //{ '0': 'a', '1': 'b', '2': 'c' }

// let newObj = {...['a', 'b']}
// console.log(newObj) //{ '0': 'a', '1': 'b' }

// exercise 2

// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

// let myCar = {
//     color : 'blue',
//     details : {
//       plateNumber: 123,
//       name : "Ford"
//     }
//   }

//   let myNewCar = {...myCar}
//   console.log("myNewCar : ", myNewCar)
//   // myNewCar :
//   // {
//   //      color: 'blue',
//   //      details: { plateNumber: 123, name: 'Ford' }
//   // }

//   // SHALLOW COPYING
//   myCar.color = "red"
//   console.log("myNewCar.color :", myNewCar.color)
//   // myNewCar.color : blue -- UNCHANGED
//   console.log("myCar.color :", myCar.color)
//   // myCar.color : red -- CHANGED

//   // DEEP COPYING
//   myCar.details.plateNumber = 345
//   console.log("myNewCar.details.plateNumber :", myNewCar.details.plateNumber)
//   // myNewCar.details.plateNumber : 345 -- CHANGED
//   console.log("myCar.details.plateNumber :", myCar.details.plateNumber)
//   // myCar.details.plateNumber : 345 : red -- CHANGED

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     // Method
//     calcArea() {
//       return this.height * this.width;
//     }
//   }

//   //instance of the class Rectangle
//   const square = new Rectangle(10, 10);

//   //calling the method
//   console.log(square.calcArea()); // 100

//   console.log(square)
//   //Rectangle {height: 10, width: 10}
//   //_proto_:
//   //  constructor: class Rectangle
//   //  calcArea: ƒ calcArea()
//   //_proto_: Object

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

killerRabbit.speak(`die!!!please`);
