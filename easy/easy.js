//Write a function that takes in a random array and outputs two new arrays.
function evenOdd(arr){
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0){
            even.push(arr[i]);
        } else {
             odd.push(arr[i]);
        };
    };
};

const even = [];
const odd = [];

evenOdd([1,2,3,4,5,6,7,8]);
console.log(odd);
console.log(even);
//Even array outputted 


//Odd array outputted

