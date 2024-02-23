const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try {
    // Write the content to the file
    await fs.writeFile(fileName, fileContent);
    console.log(`File ${fileName} created and data written successfully!`);
  } catch (error) {
    console.error(`Error writing to ${fileName}:`, error);
  }
};

module.exports = { writeFile };
