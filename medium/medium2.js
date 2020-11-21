// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// 	  String 2: Dogs eat ants
// Output: False

// Write a function that takes to strings.

function anagram(answer1,answer2) {

    let firstString = answer1.split("");
    let secondString = answer2.split("");

    let transformFirst = firstString.reduce((acc,curr) =>  {

        if (curr !== " ") {
            acc.push(curr.toLowerCase());
        };
            return acc;

    }, []).sort();


    let transformSecond = secondString.reduce((acc,curr) =>  {

        if (curr !== " ") {
            acc.push(curr.toLowerCase());
        };
        return acc;

    }, []).sort();

    

    return transformFirst.every((value,index) => value === transformSecond[index]);
}

console.log(anagram("Dirty Room", "Dormitory"));