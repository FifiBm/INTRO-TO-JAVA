function favAnimals(){
    console.log (dogs , cats);
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
console.log(weather)

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
    if(rock){
        console.log("player has chosen rock");
    }
    else if(paper){
        console.log("player has chosen paper"); 
    }
    else if(scissors){
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
    return "selfcare"
} else if(mentalHealth === "good today" && motivation === "low"){
    return "take meds"
} else if(mentalHealth === "good today" && motivation === "strong"){
    return "go kill it"
} else { "stay in bed"}

const  selectShirtSize = (size) => {
    if (size >= 20 && size < 30 ) {
        return "you should select a size S"
    } else if(size >= 30 && size < 40 ){
        return "you should select a size M" 
    } else if(size >= 40 && size < 50){
        return "you should select a size L"
    } else{
        "out of stock, select a new shirt"
    }
}



