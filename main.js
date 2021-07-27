let topLeft = document.getElementById('topleft');
let topRight = document.getElementById('topright');
let bottomRight = document.getElementById('bottomright');
let bottomLeft = document.getElementById('bottomleft');

let box = document.getElementById('box');


topLeft.addEventListener('focus', topLeftActive);
topRight.addEventListener('focus', topRightActive);
bottomRight.addEventListener('focus', bottomRightActive);
bottomLeft.addEventListener('focus', bottomLeftActive);


////////// Functions for switching to area in focus ///////////////////
function topLeftActive(){
    keyTopLeft();
}

function topRightActive(){
    keyTopRight();
}

function bottomRightActive(){
    keyBottomRight();
}

function bottomLeftActive(){
    keyBottomLeft();
}


//////////// Functions for what keys were pressed for each input field /////////
function keyTopLeft(){
    addEventListener('keyup', topLeftValue);
}

function keyTopRight(){
    addEventListener('keyup', topRightValue);
}

function keyBottomRight(){
    addEventListener('keyup', bottomRightValue);
}

function keyBottomLeft(){
    addEventListener('keyup', bottomLeftValue);
}



////////////////  Functions for changing the Radius  //////////////
function topLeftValue(){
    let pixels = topLeft.value;   
    box.style.borderTopLeftRadius = pixels + 'px';
}

function topRightValue(){
    let pixels = topRight.value;   
    box.style.borderTopRightRadius = pixels + 'px';
}

function bottomRightValue(){
    let pixels = bottomRight.value;   
    box.style.borderBottomRightRadius = pixels + 'px';
}

function bottomLeftValue(){
    let pixels = bottomLeft.value;   
    box.style.borderBottomLeftRadius = pixels + 'px';
}


////////// Function for copying to clipboard //////////////
let copy = document.getElementById("copy");

copy.addEventListener("click", myFunction);

function myFunction() {
    let copyText1 = document.querySelector(".clipboard1");
    let copyText2 = document.querySelector(".clipboard2");
    let copyText3 = document.querySelector(".clipboard3");
    let copyText4 = document.querySelector(".clipboard4");

    // let input = document.createElement("input");
    let input = document.getElementById("input");

    // document.body.appendChild(input).hidden;

    copyText1.select();
    document.execCommand("copy");
    input.value = copyText1.value;

    copyText2.select();
    document.execCommand("copy");
    input.value =  input.value + " " + copyText2.value;

    copyText3.select();
    document.execCommand("copy");
    input.value =  input.value + " " + copyText3.value;

    copyText4.select();
    document.execCommand("copy");
    input.value =  input.value + " " + copyText4.value;

    input.select();
    document.execCommand("Copy");
    
    
  }

  

  