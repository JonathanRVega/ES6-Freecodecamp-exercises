//1

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
  console.log(quote)
}
console.log("Exercise 1")
console.log(catTalk());

//2

function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
console.log("Exercise 2")
console.log(checkScope())

//3

function printManyTimes(str) {
    "use strict";
  
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
  
  }
  console.log("Exercise 3")
  printManyTimes("freeCodeCamp");

//4

const s = [5, 7, 2];
function editInPlace() {
  'use strict';

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
console.log("Exercise 4")
console.log(editInPlace());

//5

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    }; 
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  console.log("Exercise 5")
  const PI = freezeObj();
  
//6

const magic = () => {
    "use strict";
    return new Date();
  };
  
  console.log("Exercise 6")
  console.log(magic());

//7

  const myConcat = (arr1,arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  console.log("Exercise 7")
  console.log(myConcat([1, 2], [3, 4, 5]));

//8

const increment = (number, value = 1) => number + value;
console.log("Exercise 8")
console.log(increment);

//9

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log("Exercise 9")
  console.log(sum);

//10

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; 

console.log("Exercise 10");
console.log(arr2);

//11

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today, tomorrow} = HIGH_TEMPERATURES;
  
  console.log("Exercise 11");
  console.log(HIGH_TEMPERATURES);

//12

const HIGHER_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today: highToday, tomorrow: highTomorrow} = HIGHER_TEMPERATURES;
  
  console.log("Exercise 12");
  console.log(HIGHER_TEMPERATURES);

//13

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
    
  const { today: { low: lowerToday, high: higherToday } } = LOCAL_FORECAST;
  
  console.log("Exercise 13")
  console.log(LOCAL_FORECAST);

//14

let a = 8, b = 6;
[a,b] = [b,a];

console.log("Exercise 14")
console.log(a,b);

//15

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
    const [a, b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);
console.log("Exercise 15")
console.log(arr)

//16

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = ({max , min}) => (max + min) / 2.0; 
  
  console.log("Exercise 16")
  console.log(half)

  //17
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
     const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  
  console.log("Exercise 17")
  console.log(failuresList)

  //18

  const createPerson = (name, age, gender) => {
    "use strict";
    return {
      name,age,gender
    };
  };
  console.log("Exercise 18")
  console.log(createPerson)

  //19

const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  console.log("Exercise 19")
  bicycle.setGear(3);
  console.log(bicycle.gear);
  
  //20
class Vegetable {
    constructor(name){
        this.name = name;
    }
}

console.log("Exercise 20")
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//21

class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  console.log("Exercise 21")
  const thermos = new Thermostat(76);
  let temp = thermos.temperature;
  console.log(thermos.temperature = 26);
  console.log(temp = thermos.temperature);

//22

console.log("Exercise 22");

console.log("<script type='module' src='index.js'></script>")

//23

const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  console.log("Exercise 23");  
  console.log("export {uppercaseString, lowercaseString}")
  
//24

uppercaseString("hello");
lowercaseString("WORLD!");

console.log("Exercise 24");
console.log("import { uppercaseString, lowercaseString } from './string_functions.js';");

//25

console.log("Exercise 25");
console.log("import * as stringFunctions from './string_functions.js'");

//26

console.log("Exercise 26")
console.log("export default function subtract(x, y) {return x - y;}")

//27

console.log("Exercise 27");
console.log("import subtract from './math_functions.js'");

//28

const makeServerRequest = new Promise((resolve, reject) => {

});

console.log("Exercise 28");
console.log(makeServerRequest);

//29

const makeServerRequest2 = new Promise((resolve, reject) => {
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  console.log("Exercise 29 (the uncaught error comes from this exercise)");
  console.log(makeServerRequest2);

//30

const makeServerRequest3 = new Promise((resolve, reject) => {
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest3.then(result => {
    console.log(result);
  });
  
  console.log("Exercise 30");
  console.log(makeServerRequest3);
  
//31

const makeServerRequest4 = new Promise((resolve, reject) => {
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  console.log("Exercise 31 (Second uncaught error comes from this exercise)")
  makeServerRequest4.then(result => {
    console.log(result);
  });
  
  makeServerRequest4.catch(error => {
    console.log(error)
  })