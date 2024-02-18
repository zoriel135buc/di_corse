const { readFile, writeFile } = require(`./3fileManager.js`);

async function main() {
  try {
    const helloContent = await readFile("Hello World.txt");
    console.log("Content of Hello World.txt:", helloContent);

    await writeFile("Bye World.txt", "Writing to the file");
    console.log("Content has been written to Bye World.txt");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
