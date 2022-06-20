var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Password variable values: 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// Converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// Creates a variable for uppercase conversion
letters2 = letters.map(toUpper);
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
console.log("You clicked the button");

// Prompts the user for the password criteria

enter = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("Please choose a number");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("Choose a number between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Do you want your password to contain numbers?");
        confirmCharacter = confirm("Do you want special characters?");
        confirmUppercase = confirm("Do you want Uppercase letters?");
        confirmLowercase = confirm("Do you want Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a number from 8 to 128!");

    }
    // First if statement that uses user input prompts to determine choices
    // All options are "ok"
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, letters, letters2);
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, letters2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, letters);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(letters, letters2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letters, letters2);
    }
    // Two 'if' statements are ok
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(letters);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(letters2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = letters.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = letters.concat(letters2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(letters2);
    }
    // Else if for one 'if' statement is ok
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = letters;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(letters2);
    };

    // Array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// Putting the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}


