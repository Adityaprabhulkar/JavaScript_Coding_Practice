

function getAge() {
    return 100;
}

function utility( name = "Love", age = getAge() ) {
    console.log(name, " ", age);
    
}

utility()



// function solve(value ) {
//     console.log("this is my past Value: ", value);
    
// }

// solve(undefined)



// function solve(value = {age:15,wt:40,ht:147}) {
//     console.log("this is my past Value: ", value);
    
// }

// solve()



// function sayName(fName = "Uday", lName = fName.toUpperCase()) {
//     console.log("My Name is: ", fName," ", lName);
    
// }

// sayName();


// class Human {
//     //properties
//     age = 13;  //public
//     #wt = 80;  //private
//     ht = 170;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }

//     //behaviors
//     #walking() {
//         console.log("I am walking ", this.#wt);
        
//     }

//     running() {
//         console.log("I am running");
        
//     }

//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(value) {
//         this.#wt = value;
//     }

//     get fetchWalkFunc() {
//         return this.#walking();
//     }
// }

// let obj = new Human( 22, 170, 70);

// console.log(obj.fetchWalkFunc);


// console.log(obj.fetchWeight);
// console.log(obj.age);
// console.log(obj.ht);

// obj.walking();

// console.log(obj.fetchWeight);
// console.log(obj.modifyWeight(70));


