// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}




// Get the modal
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}




// Get the modal
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}




// Get the modal
var modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];

// When the user clicks the button, open the modal 
btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}




// Get the modal
var modal5 = document.getElementById('myModal5');

// Get the button that opens the modal
var btn5 = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[5];

// When the user clicks the button, open the modal 
btn5.onclick = function() {
    modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}




// Get the modal
var modal6 = document.getElementById('myModal6');

// Get the button that opens the modal
var btn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[6];

// When the user clicks the button, open the modal 
btn6.onclick = function() {
    modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}



// Get the modal
var modal7 = document.getElementById('myModal7');

// Get the button that opens the modal
var btn7 = document.getElementById("myBtn7");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[7];

// When the user clicks the button, open the modal 
btn7.onclick = function() {
    modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal7.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
}


var modal8 = document.getElementById('myModal8');

// Get the button that opens the modal
var btn8 = document.getElementById("myBtn8");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[8];

// When the user clicks the button, open the modal 
btn8.onclick = function() {
    modal8.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal8.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal8) {
        modal8.style.display = "none";
    }
}


var modal9 = document.getElementById('myModal9');

// Get the button that opens the modal
var btn9 = document.getElementById("myBtn9");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[9];

// When the user clicks the button, open the modal 
btn9.onclick = function() {
    modal9.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal9.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal9) {
        modal9.style.display = "none";
    }
}

/*text style*/

var listEl = document.querySelector('.home-grid.products-grid.products-grid--max-4');
var btnLeftEl = document.querySelector('#left-btn');
var btnRightEl = document.querySelector('#right-btn');
count = 0;
btnLeftEl.addEventListener("click", function(e) {
    count++;
    listEl.style.left = count * 286 + 'px';
    if (count > -2) {
        btnRightEl.style.display = 'block';
    }
    if (count >= 0) {
        btnLeftEl.style.display = 'none';
    }
});
btnRightEl.addEventListener("click", function(e) {
    count--;
    listEl.style.left = count * 286 + 'px';
    if (count < 0) {
        btnLeftEl.style.display = 'block';
    }
    if (count <= -2) {
        btnRightEl.style.display = 'none';
    }
});

/*slide*/

var modal10 = document.getElementById('myModal10');

// Get the button that opens the modal
var btn0 = document.getElementById("myB0");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[10];

// When the user clicks the button, open the modal 
btn0.onclick = function() {
    modal10.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal10.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal11) {
        modal11.style.display = "none";
    }
}


var modal11 = document.getElementById('myModal11');

// Get the button that opens the modal
var btn11 = document.getElementById("myB1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[11];

// When the user clicks the button, open the modal 
btn11.onclick = function() {
    modal11.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal11.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal11) {
        modal11.style.display = "none";
    }
}

var modal12 = document.getElementById('myModal12');

// Get the button that opens the modal
var btn12 = document.getElementById("myB2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[12];

// When the user clicks the button, open the modal 
btn12.onclick = function() {
    modal112.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal12.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal12) {
        modal12.style.display = "none";
    }
}

var modal13 = document.getElementById('myModal13');

// Get the button that opens the modal
var btn13 = document.getElementById("myB3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[13];

// When the user clicks the button, open the modal 
btn13.onclick = function() {
    modal13.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal13.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal13) {
        modal13.style.display = "none";
    }
}

var modal14 = document.getElementById('myModal14');

// Get the button that opens the modal
var btn14 = document.getElementById("myB4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[14];

// When the user clicks the button, open the modal 
btn14.onclick = function() {
    modal14.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal14.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal14) {
        modal14.style.display = "none";
    }
}

var modal15 = document.getElementById('myModal15');

// Get the button that opens the modal
var btn15 = document.getElementById("myB5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[15];

// When the user clicks the button, open the modal 
btn15.onclick = function() {
    modal15.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal15.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal15) {
        modal15.style.display = "none";
    }
}

var modal16 = document.getElementById('myModal16');

// Get the button that opens the modal
var btn16 = document.getElementById("myB6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[16];

// When the user clicks the button, open the modal 
btn16.onclick = function() {
    modal16.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal16.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal16) {
        modal16.style.display = "none";
    }
}

var modal17 = document.getElementById('myModal17');

// Get the button that opens the modal
var btn17 = document.getElementById("myB7");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[17];

// When the user clicks the button, open the modal 
btn17.onclick = function() {
    modal17.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal17.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal17) {
        modal17.style.display = "none";
    }
}

var modal18 = document.getElementById('myModal18');

// Get the button that opens the modal
var btn18 = document.getElementById("myB8");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[18];

// When the user clicks the button, open the modal 
btn18.onclick = function() {
    modal18.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal18.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal18) {
        modal18.style.display = "none";
    }
}


var modal19 = document.getElementById('myModal19');

// Get the button that opens the modal
var btn19 = document.getElementById("myB9");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[19];

// When the user clicks the button, open the modal 
btn19.onclick = function() {
    modal19.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal19.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal19) {
        modal19.style.display = "none";
    }
}







