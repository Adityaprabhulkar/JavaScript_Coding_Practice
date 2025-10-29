

// function changeText () {
//     let fPara = document.getElementById('fPara');
//     fPara.textContent = "Aditya DEV"
// }


// let fPara = document.getElementById('fPara');

// fPara.addEventListener('click', changeText);

// fPara.removeEventListener('click', changeText);

// let anchorElement = document.getElementById('fanchor');



// anchorElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "Click done bhai"
// })


// let paras = document.querySelectorAll('p');

function alertPara(event) {
        if(event.target.nodeName === 'SPAN') {
        alert("You have clicked on paras: " + event.target.textContent );
    }
}

// // for(let i=0; i<paras.length; i++) {
// //     let para = paras[i];
// //     para.addEventListener('click', alertPara);
// // }



let mydiv = document.getElementById('wrapper');

document.addEventListener('click', alertPara);

// Example of using DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Create a new script element
    const script = document.createElement('script');
    
    // Set the source of the script
    script.src = 'https://example.com/your-script.js';
    // Or set inline JavaScript
    // script.textContent = 'console.log("Script loaded dynamically!");';
    
    // Add the script to the document
    document.head.appendChild(script);
    
    console.log('DOM fully loaded and parsed');
}); 
