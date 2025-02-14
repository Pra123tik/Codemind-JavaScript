console.log("===== Task 1 =====");
const originalString = "Hey you are doing good, keep it up";
console.log(originalString);

console.log("===== Task 2 =====");
const totalLength = originalString.length;
console.log("The length of string is:", totalLength);

console.log("===== Task 3 =====");
const stringWithoutSpaces = originalString.replace(/\s+/g, ''); // Remove all extra spaces
const lengthWithoutSpaces = stringWithoutSpaces.length;
console.log("The length of string after spaces is :", lengthWithoutSpaces);

console.log("===== Task 4 =====");
const extraSpaces = originalString.length - lengthWithoutSpaces;
console.log("The total number of extra Spaces is :", extraSpaces);

console.log("===== Task 5 =====");
const firstChar = originalString.charAt(0);
const lastChar = originalString.charAt(originalString.length - 1);
console.log("First and Last Character is", firstChar + " & " + lastChar);

console.log("===== Task 6 =====");
const words = originalString.split(/\s+/); // Split by spaces
const totalWords = words.length;
console.log("Total words in String is", totalWords);

console.log("===== Task 7 =====");
const indexOfGood = originalString.indexOf("good");
console.log("The index of good is", indexOfGood);

console.log("===== Task 8 =====");
const substringFrom22 = originalString.substring(22);
console.log("The substring strating fro index 22 is", substringFrom22);

console.log("===== Task 9 =====");
const endsWithUp = originalString.endsWith("up");
console.log("String ends with \\\"up\\\"", endsWithUp); // Escaping the double quotes

console.log("===== Task 10 =====");
const startsWithHey = originalString.startsWith("Hey");
console.log("String ends with \\\"Hey\\\"", startsWithHey); // Corrected to startsWith