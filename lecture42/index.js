


// let firstPromise = new Promise( (resolve, reject) => {


//     setTimeout(function sayMyname() {
//         console.log("My name is Aditya Prabhulkar");     
//     }, 10000);
// });


// let Promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success) {
//         resolve(10);
//     }
//     else{
//         reject(-1);
//     }
// });

// Promise1.then((message) => {
//     console.log("first msg:" + message);
//     return 20;
// }).then((message) => {
//     console.log("second msg:" + message);
//     return 30;
    
// }).then((message) => {
//     console.log("Thirsd msg:" +message);
// }).catch((error) => {
//     console.log(error);
// }).finally((message) => {
//     console.log("Main fanally hu, i am definetly run");
    
// })

// Promise1.then((message) => {
//     console.log("Then ka message is " + message); 
// }).catch((error) => {
//     console.log("Error: " + error);
    
// })


// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "First"); 
// })
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "Second"); 
// })
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, "Third"); 
// })


// Promise.all([promise1, promise2, promise3])
// .then((values) => {
//     console.log(values);
    
// })
// .catch((error) => {
//     console.log("error:" + error);
    
// })

console.log("1");

setTimeout(() => {
  console.log("2");
}, );

console.log("3");









