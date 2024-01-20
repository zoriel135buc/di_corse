function areAnagrams(str1, str2) {
  const formattedStr1 = str1.replace(/\s/g, "").toLowerCase();
  const formattedStr2 = str2.replace(/\s/g, "").toLowerCase();

  return (
    formattedStr1.split("").sort().join("") ===
    formattedStr2.split("").sort().join("")
  );
}

const string1 = "Astronomer";
const string2 = "Moon starer";
const result = areAnagrams(string1, string2);
console.log(`${string1} and ${string2} are anagrams: ${result}`);
