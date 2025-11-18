const add = (a, b) => a + b;

console.log(add(2, 3));






const randomNumber = () => Math.floor(Math.random() * 101);

console.log(randomNumber());







class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hola, ${this.name}`);
  };
}

const person1 = new Person("Pepe");

person1.greet();






let arrayNumbers = [1, 2, 3, 4, 5];

const printNumbers = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

printNumbers(arrayNumbers);







const printMessage = () => {
  setTimeout(() => {
    console.log("Printing message");
  }, 3000);
};

printMessage();





function canDrive(age) {
  age >= 18 ? console.log("They can drive") : console.log("They cannot drive");
}
canDrive(18);









let num1 = 12;
let num2 = 10;

num1 > num2
  ? console.log(`The largest number is ${num1}`)
  : console.log(`The smallest number is ${num2}`);





let number = 0;

number > 0
  ? console.log("The number is POSITIVE")
  : number === 0
  ? console.log("The number is ZERO")
  : console.log("The number is NEGATIVE");





function findMaximumNumber(num1, num2, num3) {
  num1 > num2 && num1 > num3
    ? console.log(`The maximum value is ${num1}`)
    : num2 > num1 && num2 > num3
    ? console.log(`The maximum value is ${num2}`)
    : console.log(`The maximum value is ${num3}`);
}

findMaximumNumber(20, 15, 45);







let checkEvenOddArray = [12, 3, 8, 14, 19, 36, 22, 11, 5, 40];

function checkEvenOdd(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0
      ? console.log(`The number ${array[i]} is even`)
      : console.log(`The number ${array[i]} is odd`);
  }
}

checkEvenOdd(checkEvenOddArray);







let process = (num, callback) => callback(num);

function invokeNumber(number) {
  console.log(`The number passed as a parameter is: ${number}`);
}

process(14, invokeNumber);









const calculator = (num1, num2, operation) => {
  return operation(num1, num2);
};

function addNum(numero1, numero2) {
  console.log(numero1 + numero2);
}
function subtraction(numero1, numero2) {
  console.log(numero1 - numero2);
}

calculator(5, 50, addNum);
calculator(20, 40, subtraction);







function waitAndGreet(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 2000);
}

function greetWithDelay(greet) {
  console.log(`Hola ${greet}`);
}

waitAndGreet("Pepe", greetWithDelay);
waitAndGreet("Juan", greetWithDelay);







function processElements(array, callback) {
  array.forEach((element) => {
    callback(element);
  });
}

function greet(name) {
  console.log(`Hola ${name}`);
}
function verifyEvenOdd(number) {
  number % 2 === 0
    ? console.log(`The number ${number} is even`)
    : console.log(`The number ${number} id odd`);
}

let processElementsArrayNames = ["pepe", "juan", "maria", "ana"];
let processElementsArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

processElements(processElementsArrayNumbers, verifyEvenOdd);
processElements(processElementsArrayNames, greet);









function processString(stringText, callback) {
  let chainInCapital = stringText.toUpperCase();

  callback(chainInCapital);
}

function printInConsole(text) {
  console.log(text);
}

processString("Hola mi nombre es Juan Ignacio", printInConsole);









let newArray1 = [2, 8, 14, 21, 28, 32, 35];
let newArray2 = [1, 3, 5, 7, 9, 11, 13];

let unifiedArray = [...newArray1, ...newArray2];

console.log(unifiedArray);









function sumAll(...numbers) {
  let total = 0;
  numbers.forEach((element) => {
    total += element;
  });
  console.log(total);
}

sumAll(2, 5, 4, 9);









let objet1 = {
  person: "Pedro",
  age: 29,
  gender: "Male",
};

let object2 = { ...objet1, age: 25, smoker: "SI" };

console.log(object2);

console.log(objet1);










let arrayElement = [
  "Futbol",
  "Tenis",
  "Paddle",
  "Powerlifting",
  "Rugby",
  "Crossfit",
];

let [firstVar, secondVar, ...rest] = arrayElement;

console.log(firstVar);
console.log(secondVar);
console.log(rest);











function sumAllNumbers(a, b, c) {
  console.log(a + b + c);
}

let arrayThreeElements = [1, 5, 6];

sumAllNumbers(...arrayThreeElements);








let initialData = {
  name: "Juan Ignacio",
  age: 32,
  smoker: "NO",
  student: "SI",
};
let extraData = {
  lasName: "Godoy",
  gambler: "NO",
  unemployed: "SI",
};

let personalFile = { ...initialData, ...extraData };

console.log(personalFile);










let arrayNumbers3 = [1, 2, 3, 4];

let squareArray = arrayNumbers3.map((number) => number ** 2);

console.log(squareArray);








let arrayNumbers4 = [1, 2, 3, 4];

let getEvenNumbers = arrayNumbers4.filter((number) => number % 2 === 0);

console.log(getEvenNumbers);







let arrayNumbers5 = [1, 9, 8, 1, 15, 20];

let olderThanTen = arrayNumbers5.find((numero) => numero > 10);

console.log(olderThanTen);







let arrayNumbers6 = [13, 7, 8, 21];

let sumaTotal = arrayNumbers6.reduce((acc, num) => acc + num, 0);

console.log(sumaTotal);






const arrayNumbers7 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const finalCalculation = (array) =>
  array
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((acc, num) => acc + num, 0);

console.log(finalCalculation(arrayNumbers7));









let arrayNumbers8 = [11, 12, 13, 14];

let allGreaterThan10 = arrayNumbers8.every(num => num > 10);

let someGreaterThan10 = arrayNumbers8.some(num => num > 10);

console.log(allGreaterThan10);
console.log(someGreaterThan10);




let namesArray2 = ["Pepe", "Juan", "Ana", "Maria", "Lucia", "Sofia"];

namesArray2.forEach(name => {
  console.log(name);
});









let namesArray3 = ["Pepe", "Juan", "Ana", "Maria", "Lucia", "Sofia"];

for (let name of namesArray3) {
  console.log(name);
}









let numbers = [1, 2, 3, 4, 5, 6];

let newNumberArray = numbers.filter(num => num % 2 === 0);

console.log(newNumberArray);









let person2 = {
  firstName: "Juan",
  lastName: "Godoy",
  age: 32,
  nationality: "Argentinian",
};

for (let data in person2) {
  console.log(`${data}: ${person2[data]}`);
}












let numbersArray9 = [20, 10, 58, 96, 2, 5, 9, 4, 8];

for (let number of numbersArray9) {
  console.log(number);
  if (number === 5) {
    break;
  }
}












let numbersArray10 = [20, 10, 58, 96, 2, 5, 9, 4, 8];

let index = 0;

for (let number of numbersArray10) {
  console.log(`Number: ${number}, Index: ${index}`);
  index++;
}







const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello, world");
  }, 2000);
});


 




promise1.then((result) => console.log(result));








function checkText(text) {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      text === "Hello"
        ? resolve(`The text "${text}" is equal to "Hello"`)
        : reject(`The text "${text}" is not equal to "Hello"`);
    }, 2000);
  });

  promise2
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

checkText("Pepe");
checkText("Hello");








function repeatGreeting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world");
    }, 2000);
  });
}

async function showGreeting() {
  console.log(await repeatGreeting());
}

showGreeting();











function greeting() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let response = true;
      if (response) {
        resolve("Hello, Pepe");
      } else {
        reject("An error occurred");
      }
    }, 2000);
  });
}

async function sayGreeting() {
  try {
    console.log(await greeting());
  } catch (error) {
    console.log(error);
  }
}

sayGreeting();














const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved in two seconds");
  }, 2000);
});

const promise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved in three seconds");
  }, 3000);
});

Promise.all([promise3, promise4])
  .then(result => console.log(result))
  .catch(error => console.log(error));
