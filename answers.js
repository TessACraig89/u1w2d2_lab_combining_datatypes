// 1.Given, the following object, log the third element from the array
const fun = {
    asdf: ["afd", "matt", 'sweet']
}

console.log(fun.asdf[2]);

// 2. Given, the following object, log the elbow property
const body = {
    arm: {
        elbow: 'pointy'
    }
};

console.log(body.arm.elbow);

//3.Given, the following object, call the jump method
const person = {
    jump(){
        console.log('fly!');
    }
};

person.jump();

//4. Create a data structure such that the following code logs the value "blue"
console.log(myList[0].eyeColor);

const myList = [
  {
    eyeColor: "blue"
  },
];

//5. Create a data structure such that the following code logs the value "buy supplies"
console.log(myArrays[2][4]);

const myArrays = [ "index0", "index1", ["stuff0", "stuff1", "stuff2", "stuff3", "buy supplies"]];

//6.Call the function in the given code:
const awesome = [
    {
        asdf:'true'
    },
    3456.245,
    ()=>{
        console.log('fun');
    },
    "buddy"
];

awesome[2]();

//7.Loops over the following array, and print its values:
const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
}

for (i = 0; i < refrigerator.fruits.length; i++) {
    console.log(refrigerator.fruits[i]);
}

//8.Use two loops to loop over each array in the given "container" array
//WIP
const container = [
    [1,5,7],
    ['bear', 'dog', 'cat'],
    [true, false, true]
];

for (variable of container) {

}
for (i = 0; i < container.length; i++) {
    for (i = 0; i < container[i].length; i++) {
      console.log(container[i][i])
    }
};
//9.Create a data structure such that the following logs 4
console.log(createCar().tires);

//10.Create a data structure such that the following logs pears
console.log(generateShoppingList()[3]);

//11.Create a data structure such that the following logs 20lbs
console.log(createRobot().stats.weight);

//12.Call the drive method

const generateCar = ()=>{
    return {
        drive(){
            console.log("Vroom");
        }
    }
}

//13.Create a data structure such that the following executes without errors:

createFunction()();

//14.Log the message attribute

const account = {
    tweet(){
        return {
            message: "fun"
        }
    }
}

//15. Log the second element in the array

const me = {
    foo(){
        return {
            array: [2.5, 7, true]
        }
    }
}


// Define a function lengths that takes in one argument.
//     arr (array of strings)
//
// It returns a new array of numbers where each element is the length (number
// of characters) of the corresponding element in the input. For example:
//   lengths(['Kenneth', 'Ian', 'Ryan']) will output [7, 3, 4].
let names = ['Kenneth', 'Ian', 'Ryan']

const lengths = (arr) => {
  return arr.map( x => x.length);
}


// Afternoon Lab
// 1. Log the following function:
const foo = ()=>{
    console.log('I have been invoked!');
}

foo();

//2. Call foo, passing in a function:
const foo = (param) => {
    console.log(param);
}

const sayHello = () => {
  console.log("hello");
}

foo(sayHello());

//3.See if you can guess what this will log:

const foo = (param, param2) => {
    param(param2);
}

const bar = (param) => {
    console.log(param);
}

foo(bar, 'hi');

=> hi

//4.See if you can guess what this will log:

const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

foo(bar, 'hi');

=> hello

//5.Call the someMethod function, passing in myFunc. It should log About to invoke the callback and then I have been called!
const foo = {
    someMethod(callback){
        console.log('About to invoke the callback');
        callback();
    }
}

const myFunc = ()=>{
    console.log('I have been called!');
}

foo.someMethod(myFunc);

//6. Alter the following code so that myFunc properly logs the height property of foo
const foo = {
    height:5,
    someMethod(callback){
        callback();
    }
}

const myFunc = (param)=>{
    console.log(param);
}
 myFunc(foo);

 //Create a method called combineColor on the shirtColor object that combines all the elements of the color array into a string
 const numbers = [10, 20, 30, 40] // sums to 100
 let sum = numbers.reduce((total, amount) => total + amount)
 console.log(sum);

const shirtColor = {
  color: ['red', 'blue', 'green', 'white', 'pink'],
  let combineColor = () => {
    shirtColor.color.reduce(shirtColor.color, shirtColor.color[i])
  }
}

console.log(shirtColor.combineColor());
