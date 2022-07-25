console.log("GREATEST NUMBER IN THREE");
console.log("____________________________________");

let num1 = 155, num2 = 1120, num3 = 11110;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " is greater then " + num2 + " and " + num3);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is greater then " + num1 + " and " + num3);
}
else {
    console.log(num3 + " is greater then " + num1 + " and " + num2);
}


console.log("____________________________________");

console.log("LEAP YEAR OR NOT");

console.log("____________________________________");


let Year = 2000

if (Year % 4 == 0 && Year % 100 != 0 || Year % 400 == 0) {
    console.log(Year + " is  a leap year")
}


console.log("____________________________________");

console.log("EVEN OR ODD");

console.log("____________________________________");


let number = 4;

if (number % 2 == 0) {
    console.log(number + " is Even");
}
else {
    console.log(number + " is Odd");

}

console.log("____________________________________");

console.log("CONSTENT OR VOWEL");

console.log("____________________________________");

let alpha = "a".toUpperCase();

switch (alpha) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("Vowel");
        break;
    default:
        console.log("Constent")
        break;

}