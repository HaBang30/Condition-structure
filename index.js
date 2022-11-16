// Practice 1: to use Switch-case statement:

//let day = new Date();

// switch(new Date().getDay()) {
//     case 0:
//         alert("Sunday");
//         break;
//     case 1:
//         alert("Monday");
//         break;
//     case 2:
//         alert("Tuesday");
//          break;
//     case 3:
//         alert ("wednesday");
//         break;
//     case 4:
//         alert ("Thursday");
//         break;
//     case 5:
//         alert("Friday");
//         break;
//     case 6:
//         alert ("Saturday");
//         break;
// }



// Practice: The way to use ternary operator in Javascript:
// let a = 2;
// let b = 10;
// let total = a>b? true: false;
// alert(total);


// Practice: to use if - else conditional statement:

// let value = prompt("What is the 'offical' name of Javascript?");
// if (value == "ECMAScript") {
//     alert(value + " is right.")
// } else {
//     alert ("Didn't know? ECMAScript!");
// }


// Practice: Exercise with if-else-if conditional statement:

// let username = prompt("Enter a your name.");
// let password;
// if (username == "Admin") {
//     password = prompt ("Enter your password.");
//     if (password == "TheMaster") {
//         password = prompt ("The welcome TheMaster");
//         if (password == "null") {
//             alert("The canceled " + password);
//         } else {
//             alert(password + " is false.");
//         }
//     } 
    
// } else {
//     if (username == "null") {
//         alert ("The canceled " + username)
//     } else {
//         alert("I don't know you.")
//     }
// }


// Practice: Exercise with switch-case statement:

//Lesson 1: Rewrite the following if structure into a switch-case structure:

let browser =prompt("Enter browse you want.");
    switch(browser) {
        case 'Edge':
            alert("You've got the Edge!");
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'opera':
            alert("Okey we support these browsers too");
            break;
        default:
            alert("We hope that this page look ok!");             
    }