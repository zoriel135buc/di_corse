const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
const single = epic.reduce((acc, val) => {
  console.log(`acc:${acc}`);
  console.log(`val: ${val}`);
  return acc + val;
});
console.log(single);
