const people = ["Greg", "Mary", "Devon", "James"];
people.shift();

people[people.length-1]="jason";

people.push("ben");

console.log(people.indexOf("mary"));

const newpeople=people.slice(1);
console.log(`newpeople`,newpeople);

console.log(people.indexOf("foo"))

const last=people[people.length-1]
console.log(`last`,last)

console.log(people);

// part2


for(const friend of people){
console.log("this person is: ",friend)
if(friend==="mary") {break}
}