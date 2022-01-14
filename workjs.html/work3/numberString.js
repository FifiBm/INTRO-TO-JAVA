// Function declaration

Function mystuff() { // inside curly braces is the function body
    console.log(2 + 2);
}

console.log(5);

// Function invocation (calling the function)
mystuff();

var stuff = function() {
    if (true) {
        var notBlockScoped = 1;
        let blockScoped = 1;
        console.log(blockScoped);
    }
    console.log(notBlockScoped);
}

stuff();