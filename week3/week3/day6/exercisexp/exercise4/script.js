const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);

console.log("apartments on first floor:",building.numberOfAptByFloor.firstFloor);
console.log("apartments on third floor:",building.numberOfAptByFloor.thirdFloor);

console.log("second tenant:",building.nameOfTenants[1])
console.log("dan has this many rooms:",building.numberOfRoomsAndRent.dan[0]);


const sarahRent=building.numberOfRoomsAndRent.sarah[1];
const davidRent=building.numberOfRoomsAndRent.david[1]
const danRent=building.numberOfRoomsAndRent.dan[1]

if(sarahRent+davidRent>danRent){
    building.numberOfRoomsAndRent.dan[1]=1200
}
console.log(building);