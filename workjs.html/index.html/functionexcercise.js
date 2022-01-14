function ConvertDegreesFToC(degreesF);
{
	const degreesC = (degreesF - 32) * (5/9);

	// 2) We need to give back the Celsius degrees to whomever
	//      invoked the function, not just calculate them
	//      (i.e. use a return keyword)
	return degreesC;
}

let temperatureInF = 76;
let temperatureInC = ConvertDegreesFToC(temperatureInF);

// 1) We need to invoke our conversion function with the
//      76-degrees Fahrenheit variable and store the
//      given-back degrees into "temperatureInC";
//      so that "console.log" prints correctly

console.log(temperatureInF + " degrees Fahrenheit equates to " 
+ temperatureInC + " degrees in Celsius.");

// function warmup

function myStuff() { // declaration
	console.log(2 + 2); //body
}

console.log(5) // invocation/ calling function


myStuff(); // invocation/ calling function

var stuff = function() {
	if (true) {
		var notBlockScoped = 1; // not scope blocked
		let blockScoped = 1; // scope blocked
		if (true) { 
			console.log(blockScoped); // scopeblocked operates in scopes
		}
	}
	console.log(notBlockScoped);
}

stuff();

let myFunc = () => { // asynchronous code will bug this occasionally

}




//.		// Numbers

// Infinity -Infinity NaN (symbolic numbers)

// add: +  subtract: -  multiply: *  divide: /

let sum = 3 + 4;
console.log(sum);

let dif = 3 - 4;
console.log(dif);

let pro = 3 * 4;
console.log(pro);

let quo = 3 / 4;
console.log(quo);

// exponents: **  

let pow = 3 ** 4;
console.log(pow);

let power = Math.pow(3, 4);
console.log(power);

// Modulo/ remainder: %

let mod = 3 % 4; 
console.log(mod);

// increment and decrement: ++/ +=/ --/ -=

let inc = 1;
let any = 1;
inc = ++inc;
any += 2;
console.log(inc);
console.log(any);

let dec = 1;
let deca = 1;
dec = --dec;
deca -= 2;
console.log(dec);
console.log(deca);

// Absolute value: Math.abs();

let abs = -295;
console.log(Math.abs(abs));

// Rounding up/ down: Math.ceil / Math.floor

let rup = 33.7;
console.log(Math.ceil(rup));
let rdo  = 33.4;
console.log(Math.floor(rdo));

// generate random number: Math.random() * (10 - 1) + 1;

let ran = Math.random() * (10 - 1) + 1;
console.log(Math.floor(ran));

let min = 42; let max = 117; 
let raB = Math.random() * (max - min) + min
console.log(Math.floor(raB));

// greater than/ less than, etc. 

console.log(1 > 2);
console.log(2 >= 2);
console.log(1 < 2);
console.log(2 <= 2);

// 0 indexing 

let array = [1, 2, 3, 4];
let index = 2;
let thirdElement = array[index];
console.log(thirdElement);

// strings (text data type)

let myName = "Chris B Coolin";
let firstInitial = myName[0];
let lastInitial = myName[8];
let midInitial = myName[6];

console.log(firstInitial, midInitial, lastInitial);

// reassigning strings

let job = "Coordinator";
console.log("Job is", job,".");

job = "Director";
console.log("Job is", job,".");

job[job.length - 1] = "n";
console.log("Job is", job,".");

// string length

let fruit = "Apples and Bananas";
let fruitLength = fruit.length;
console.log(fruitLength);

let lastChar = fruit[fruitLength - 1];
console.log(lastChar);

// string Concatenation

let firstName = "Fifi";
let lastName = "Biemnet";

let fullName = firstName.concat(" ").concat(lastName);
console.log(fullName);

// string interpolation

let food = "tacos , tamales";
let placeToBuy = "local" + food + "lady";

/*let sentence = "the best place to get " + food + 
" is to buy them from your " + placeToBuy;
console.log(sentence);*/

let sentence = `the best ${food} in town is sold from the ${placeToBuy}`;
console.log(sentence);

// substring/ slice

let string = "javascript" .substring(2, 9);
console.log(`portion of string from before index 2, up to, but not 
including, index 9: ${subString}`);
let start = 2;
let end = 9;

let subString = string.substring(start, end);
console.log(`portion of string from before index ${start}, up to, but not 
including, index ${end}: ${subString}`);

let sliced = string.slice(start, end);
console.log(`portion of string from before index ${start}, up to, but not 
including, index ${end}: ${sliced}`);
 
let copy = string.slice();
console.log(copy);

// IndexOf

let IndexOfTarget = "google".indexOf("oof");
console.log(IndexOfTarget);

// To string

let num = 17;
let stringNum = num.toString(); // it says "17" not 17
let parsedInt = Number.parseInt(stringNum);
console.log(num);
console.log(stringNum);
console.log(parsedInt);

let bool = true;
let stringBool = bool.toString();
console.log(bool, typeof bool);
console.log(stringBool, typeof stringBool);

// 17.toString(); wont work
Number(17).toString();

let stringToArr = "a b c";
let arrayFromStr = stringToArr.split(" ");
console.log(arrayFromStr);

let letters = "Aa Bb Cc";
letters = letters.toUpperCase();
console.log("string in all upper case:", letters);
console.log("string in all lower case:", letters.toLowerCase());