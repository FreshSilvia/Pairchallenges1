let primeArray = [1,2,3,4,5,6,7,8,9,10,11]

function primeChecker(arr){
    return arr.filter((number) => {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    });
}

console.log(primeChecker([1,2,3,4,5,6,7,8,9,10]));
console.log(primeChecker([10, 18, 19, 29, 33, 35, 47, 66, 83]));
 


