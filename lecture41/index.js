// const t1 = performance.now();

// let para = document.createElement('div')

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is para " +i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();
// console.log("Total time by code 1:" +(t2-t1));

//code2

// const t3 = performance.now();

// let mydiv = document.createElement('div')

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is para " + i;
//     mydiv.appendChild(para);
// }

// document.body.appendChild(mydiv);

// const t4 = performance.now();

// console.log("Total time by code 1:" +(t4-t3));


const t5 = performance.now();

let fragment = document.createDocumentFragment();


for(let i=1; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Para " + i + "abc";

    //No reflow and repaint for the below line
    fragment.appendChild(para);

}
 
//the below line take 1 reflow and 1 repaint
document.body.appendChild(fragment);

const t6 = performance.now();

 console.log("Total time by code 1:" +(t6-t5));
