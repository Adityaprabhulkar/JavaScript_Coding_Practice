


// let name = "Bhushan";
// function outerFunction() {

//     {
//         let name = "Aditya";
//     }
//     // let name = "Aditya";
//     function innerFunction() {
//         // let name = "Raj";
//         console.log(name);
        
//     }
//     innerFunction();
// }

// outerFunction();

function outerFunction() {
    let name = "Aditya";
    function innerFunction() {
        console.log(name);     
    }
    return innerFunction;
    
}

let inner = outerFunction();

inner();