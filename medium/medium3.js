//Function that takes two numbers.
function gcd(num1,num2) {
    if (num2 === 0) {
        return num1;
    }
    return gcd(num2, num1 % num2);
};

console.log(gcd(78, 126));



//Determines largest integer that divides the two numbers without a remainder.