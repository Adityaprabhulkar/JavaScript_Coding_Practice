// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside set Timeout block");
//     }, 3000)
    
// }

// let output  = getData();

//await - 


//fetch api


// async function getData() {

//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//     // parse json - async
//     let data = await response.json();
//     console.log( data );
        
// }
// getData();
//scenario:
//prepare url / api endpoint -> sync
//await // fetch data -> newtork call -> async
//process data ->sync



// const myHeaders = new Headers();
// myHeaders.append("content-type", "application/json");

// const url = "https://jsonplaceholder.typicode.com/posts";

// const options = {
//     method: "POST",
//     body: JSON.stringify({ username: "ADITYA PRABHULKAR" }),
//     headers: myHeaders,
// };


async function getData() {
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response: ", data);
}

async function postData() {
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Aditya PRABHULKAR -> being A Good Programmer',
          userId: 5,
})
    })
    let data = await response.json();
    console.log("post data response: ", data);
}

async function processData() {
    await postData();
    await getData();
}

processData();
    

