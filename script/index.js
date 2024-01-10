// Script for generating a certain number of functions.

const fs = require("fs");
const path = require("path");

console.log("START");

const functAmt = process.argv[2] || 50;
const filePath = path.join(__dirname, "..", "functions", "src", "index.ts");
console.log(`Writing ${functAmt} functions to ${filePath}`);

let funcTemplate = (count) => `
exports.onNotificationCreate${count} = functions.firestore
  .document("notifications/{notificationId}")
  .onCreate(() => console.log("Invoked notification document onCreate"));

`;

let fileContent = `import * as functions from "firebase-functions";
`;

for (let i = 1; i <= functAmt; i++) {
  const count = i < 10 ? `0${i}` : i;
  fileContent += funcTemplate(count);
}

fs.writeFileSync(filePath, fileContent);

console.log("Updated");
