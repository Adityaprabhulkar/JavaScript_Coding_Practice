let mydiv = document.querySelector('#mydiv');


let newElement = document.createElement('span');
newElement.textContent = "Aditya Prabhulkar"

mydiv.insertAdjacentElement('afterend', newElement);

let parent = child.parentElement;
let child = document.querySelector('#fPara');
parent.removeChild(child); 