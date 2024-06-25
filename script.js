isString = "abc";
console.log(typeof isString);
if (typeof isString === "string") {
  console.log(true);
} else {
  console.log(false);
}

isBlankString = "";
let string = isBlankString.trim().length;
console.log(isBlankString);

if (string === 0) {
  console.log(true);
} else {
  console.log(false);
}

let captializeFirst = "abcdef";

const result = captializeFirst.charAt(0).toUpperCase();
console.log(result);

console.log(`${result}${captializeFirst.slice(1)}`);

let fullName = "Matt Nebeker";

let abbrName = fullName.split(" ");
console.log(abbrName);
const cut = abbrName[1].charAt(0);
console.log(`${abbrName[0] + " " + cut}.`);

let fullSen = "I am a long sentence";
let amount = 6;

console.log(`${fullSen.slice(0, amount)}...`);

const str = "The practitioners grappled on the road side!";
const startFirst = str.split("s ");
console.log(startFirst[1]);
