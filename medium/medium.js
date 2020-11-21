// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’
// Example 3:
// Input: vowelChecker(‘y’)
// Output: ‘This is sometimes a vowel’




// Create function "vowelChecker"
// function vowelChecker(x){
//     let vowel = ["a", "e", "i", "0", "u"];
//     for( let i = 0; i < vowel.length; i++);
//     if (x == vowel){
//         return "This a Vowel Baby!!!!!!!!";
//     } else if (x == "y") {
//         return "Aye becareful Y is sometimes a vowel baby!!!!!!!"
//     } else {
//         return `What are you doing? I said enter a vowel!!!!`;
//     };
// };

// console.log(vowelChecker("a"));


//Takes 1 argument


//Console.log if the input is a vowel


//Lets try some dumb-ish
function vowelChecker(x){
    if (x == "a"){
        return console.log("This a Vowel Baby!!!!!!!!");
    } else if (x == "e") {
        return console.log("This a Vowel Baby!!!!!!!!");
    } else if (x == "i") {
        return console.log("This a Vowel Baby!!!!!!!!");
    } else if (x == "o") {
        return console.log("This a Vowel Baby!!!!!!!!");
    } else if (x == "u") {
        return console.log("This a Vowel Baby!!!!!!!!");
    } else if (x == "y") {
        return console.log("Aye becareful Y is sometimes a vowel baby!!!!!!!");
    } else {
        return console.log("What are you doing? I said enter a vowel!!!!");
    };
};

console.log(vowelChecker("a"));
console.log(vowelChecker("y"));
console.log(vowelChecker("j"));