// let obj = {
//     name: "Alice",
//     age: 30,
//     city: "New York",
//     height: 165,
//     greet: function () {
//         console.log("Hello jee Kaise ho sare");
        
//     }
// };


// for(let key in obj) {
//     console.log(key, " ", obj[key]);
    
// }

// console.log(obj);
// obj.greet()


// console.log(typeof(obj));

//creation of Arrays
// let arr = [1,2,3,4,5];
// //arrays constructor

// let brr = new Array('love', 1, true);

// brr.push('Aditya');
// brr.pop();


// brr.shift();
// brr.unshift('Love Babbar');
// brr.push(20);
// brr.push(40);
// brr.push(70);


// console.log(brr.slice(2,4));


// brr.splice(1,0,'Aditya');
// console.log(brr);

// console.log(typeof(brr));

// console.log(brr[2]);


// let arr = [10, 20, 30];

// let ansArray = arr.map((number) => {
//     return number*number;
// })

// console.log(ansArray);


// let arr = [10,20,30,11,21,44,51];

// let ansAaray = arr.filter((number) => {
//     return number % 2 === 0;
// });
//     if(number % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })

// console.log(ansAaray);


// arr.map((number,index) => {
//     console.log(number+1);
//     console.log(index);
    
    
// })

// let ansArray = arr.map((number) => {
//     return number*number*number
// })

// console.log(ansArray);

// let arr = [1,2,'love', 'aditya', null];

// let ans = arr.filter((value) => {
//     if(typeof(value) === 'number') {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(ans);

// let arr  = [10,20,30,40];

//  let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)

// console.log(ans)


// let arr = [9,1,7,4,2,8]
// arr.sort();


// console.log(arr);


// let arr = [9, 1, 7, 4, 2, 8];

// // Sort in descending order
// arr.sort((a, b) => {
//     return b - a
// });

// console.log(arr);

// console.log(arr.indexOf(2));


// let arr = [ 10, 20, 30, 40, 50 ];

// let result = arr.find((num) => {
//     return num > 40;
// })

// console.log(result)


// let arr = [ 10,20,30];


// let length = arr.length;
// console.log("length: ", length);


// for(let index = 0; index <length; index++) {
//     console.log(arr[index]);
    
// }

// let arr = [ 10,20,30];


// arr.forEach((value, index) => {
//     console.log("number: ", value, "Index: ", index);
    
// })


// let arr = [10, 20, 30, 40, 50];

// for(let value of arr) {
//     console.log(value);
    
// }


// let fullName = "Aditya";

// for(let char of fullName) {
//     console.log(char[2]);
    
// }

let arr = [10, 20, 30, 40, 50];

let getSum = (arr) => {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum +value;
    })

    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);












