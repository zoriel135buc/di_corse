import people from "./2data.js";

function calculateAverageAge(people) {
  const totalAge = people.reduce((acc, person) => acc + person.age, 0);
  const averageAge = totalAge / people.length;
  return averageAge;
}

const averageAge = calculateAverageAge(people);
console.log("Average age:", averageAge);
