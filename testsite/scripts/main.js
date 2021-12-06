let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'C:\Users\Jaswa\Documents\testsite\Siberian_Husky_with_Blue_Eyes.jpg') {
    myImage.setAttribute ('src','C:\Users\Jaswa\Documents\testsite\Siberian_Husky_with_Blue_Eyes.jpg');
  } else {
    myImage.setAttribute ('src','C:\Users\Jaswa\Documents\testsite\Siberian_Husky_with_Blue_Eyes.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('p');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
