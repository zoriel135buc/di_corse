const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(`${i + 1}# choice is ${colors[i]}.`);
//   let answer = colors.some((element) => {
//     colors[i] = "Violet";
//   });
//   console.log(answer);
// }

if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}
