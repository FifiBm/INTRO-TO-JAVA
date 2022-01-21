function favAnimals(){
    console.log ("dogs , cats");
}

let result = favAnimals();
console.log(result)

function favfood(){
    console.log('pasta')
}

function subtract(num1 , num2){
    console.log (subtract(7,3))
}

function multiply(num1 , num2) 
 {
    console.log (multiply(2,5))
}

const tripleSum = (num1, num2, num3)=> {
    return num1 + num2 + num3;
}

const groceries = (quantity1, food, qantity2, drink) =>{
    return "i need to get" + quantity1 + "" + food + "and" + qantity2
    + "" + drink;
}

let fruit = "avocados";
console.log(groceries(7, fruit, 5, "seltzers"))

const calculation = (action)=>{
    return "perform this action;" + action;
}
console.log(calculation("add"));

const scopeTest = ()=>{
    var weather ="sunny";
}
// console.log("weather")

let counter = 0;

const increase = ()=>{
    counter += 1;
}

increase();
console.log(counter)
increase();
console.log(counter);

const canDrive = (age) => {
    if(age >= 16) {
        console.log(" can drive");
    }
    else {
        console.log("cant drive")
    }
}
console.log(canDrive(50))


const rockPaperScissors = (move) =>{
    if(move === "rock"){
        console.log("player has chosen rock");
    }
    else if(move ==="paper"){
        console.log("player has chosen paper"); 
    }
    else if(move ==="scissors"){
        console.log("player has chosen scissors");
    }
    else {
        console.log("player has entered invalid move");
    }
}

console.log(rockPaperScissors("rock"));

let mentalHealth = "good today";
let motivation = "strong";
if(mentalHealth === "bad" && motivation === "low") {
    console.log ("selfcare")
} else if(mentalHealth === "good today" && motivation === "low"){
    console.log ("take meds")
} else if(mentalHealth === "good today" && motivation === "strong"){
    console.log ("go kill it")

} else {console.log ("stay in bed")
}


const  selectShirtSize = (size) => {
    if (size >= 20 && size < 30 ) {
        return "you should select a size S"
    } else if(size >= 30 && size < 40 ){
        return "you should select a size M" 
    } else if(size >= 40 && size < 50){
        return "you should select a size L"
    } else{
       return "out of stock, select a new shirt"
    }
}

console.log (selectShirtSize(50));
console.log(selectShirtSize(40));
console.log(selectShirtSize(30));


const groceryPicker = (liquid, fruit) => {
    if (liquid === "juice" || fruit === "bananas"){
        return "nice you have a snack"
    } else {
        return "go grocery shopping"
    }
}
console.log(groceryPicker("juice", "bananas")); // => go grocery shopping
console.log(groceryPicker("juice", "bananas")); // => nice you have a snack

const checkWeather = (weather, temp) =>{
    if( weather === "sunny" && "warm"){
        return "go out"
    }else if( weather === "sunny" && "cold"){
        return "get a hot drink"
    }else if (weather === "cloudy" && "warm"){
        return "take a walk"
    }else if (weather === "cloudy" && "cold"){
        return "stay in"
    }else {
        return "checkWeather and do the right thing"
    }

}
console.log (checkWeather("sunny", "warm"))// go out
console.log (checkWeather("sunny", "cold"))// get a hot drink
console.log (checkWeather("cloudy", "warm"))// take a walk
console.log (checkWeather("cloud", "cold"))// stay in

const tripPlanner = (airplanePrice, covidVaxStatus) => {
    if(airplanePrice < 100 || covidVaxStatus === "vaccinated"){
        return "go visit family"
    }else if(airplanePrice >= 100 || covidVaxStatus !== "vaccinated"){
        return "stay home"
    }else{
        return "wait and see"
    }
}
console.log (tripPlanner(70, "vaccinated"))// go visit family
console.log (tripPlanner(100, "unvaccinated"))// stay home
console.log (tripPlanner("3000", "has covid"))// wait and see

let animals = ("dog","cat", "bird", )

/****************** 01/18/2022 *******************/

/* arrays 
   arrays with conditionals for review
   loops
   loops with functions
*/

// create an array of numbers of size 10 and then print out the second element
// reassign the element at the seventh index to a string "reassigned"
// print another element to the end and print out the array again

// note if stuck - google how to get length of an array javascript

// challenge
// creat a function called getLength that takes in an array as a paran you can call it
// array and returns the inputed arrays length

const getLength = (array) => {//array = [1,2,3,4,5]
    return array.length;
}
console.log['invoked getLength function', getLength([1,2,3,4,5])];

//unshift for adding to the front of the array
numbersArray.unshift['added to front']
console.log{'used unshift to add to the front', numbersArray}

//shift for removing ele from the front of the array
numbersArray.shift();
console.log('usimg shift to remove first ele', numbersArray)

// console.log(numbersArray.pop{});
//slice

let arrayOfChars = ['a','','f','o','o','l','g'];
let sliceOfArray = arrayOfChars.slice(2,6);
console.log('slicing a portion of the array from before index 2, to before index 6:',slice)

let phrases = ['yo','hello','fox','jumps','over','the moon','legs','birds'];
// create new variable of sliced portion of phrases that is just
// ['fox', 'jump', 'over', 'the moon']
// note if you gte stuck go search array slice method javascript MDN
