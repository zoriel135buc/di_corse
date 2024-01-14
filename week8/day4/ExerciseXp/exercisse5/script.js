const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
colors.forEach((color, index) => {
  const position = index + 1;
  const suffix =
    position >= 11 && position <= 13
      ? ordinal[0]
      : ordinal[position % 10] || ordinal[0];
  console.log(`${position}${suffix} choice is ${color}.`);
});
