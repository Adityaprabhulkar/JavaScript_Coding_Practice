//Complile Type error


// Syntax error
// console.log(1;


// Reference error
// Refference Error
// console.log(x);


// try {
//     let x = 10
//     console.log("Try Block starts here");
//     console.log(x);
//     console.log("Try block ends here");
    
//     //a

//     //b

//     //c

// }
// catch(err) {
//     // define karte h, error k sath aap kya karna chahate h
//     // retry logic
//     // fallback mechansm
//     // logging
//     // custom error
//     console.log("I AM INSIDE THE CATCH BLOCK");
//     console.log("YOUR ERROR IS HERE: ", err );  
// }
// finally{
//     console.log("i will run everytime, as i m final;y block ");
    
// }


// try{
//     //reference error 
//     console.log(x);
    
// }
// catch(err){
//     throw new Error("dost first declare kar, after print kar")
// }


let errorCode = 100;
if(errorCode == 100) {
    throw new Error("Invalid Json")
    
}

