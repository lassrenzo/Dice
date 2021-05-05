// PLAYER 1
var randomPicture1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "d" + randomPicture1 + ".png"; 

var randomImageSource1 = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

// PLAYER 2
var randomPicture2 = Math.floor(Math.random() * 6) + 1; 

var randomImage2 = "d" + randomPicture2 + ".png"; 

var randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

var One = "d1.png";
var Two = "d2.png";
var Three = "d3.png";
var Four = "d4.png";
var Five = "d5.png";
var Six = "d6.png";

if (randomImage1 == One && randomImage2 == Two) {
  document.querySelector("h1").innerHTML = "DICE #2 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>";
 }
else if (randomImage1 == One && randomImage2 == Three) {
  document.querySelector("h1").innerHTML = "DICE #3 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>";
 }
 else if (randomImage1 == One && randomImage2 == Four) {
  document.querySelector("h1").innerHTML = "DICE #4 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>";
 }
 else if (randomImage1 == One && randomImage2 == Five) {
  document.querySelector("h1").innerHTML = "DICE #5 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>";
 }
 else if (randomImage1 == One && randomImage2 == Six) {
  document.querySelector("h1").innerHTML = "DICE #6 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>";
 }
 else if (randomImage1 == Two && randomImage2 == One) {
  document.querySelector("h1").innerHTML = "DICE #2 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Two && randomImage2 == Three) {
  document.querySelector("h1").innerHTML = "DICE #3 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>"
 }
 else if (randomImage1 == Two && randomImage2 == Four) {
  document.querySelector("h1").innerHTML = "DICE #4 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>"
 }
 else if (randomImage1 == Two && randomImage2 == Five) {
  document.querySelector("h1").innerHTML = "DICE #5 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>"
 }
 else if (randomImage1 == Two && randomImage2 == Six) {
  document.querySelector("h1").innerHTML = "DICE #6 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>"
 }
 else if (randomImage1 == Three && randomImage2 == One) {
  document.querySelector("h1").innerHTML = "DICE #3 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Three && randomImage2 == Two) {
  document.querySelector("h1").innerHTML = "DICE #3 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Three && randomImage2 == Four) {
  document.querySelector("h1").innerHTML = "DICE #4 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>"
 }
 else if (randomImage1 == Three && randomImage2 == Five) {
  document.querySelector("h1").innerHTML = "DICE #5 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>"
 }
 else if (randomImage1 == Three && randomImage2 == Six) {
  document.querySelector("h1").innerHTML = "DICE #6 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>"
 }
 else if (randomImage1 == Four && randomImage2 == One) {
  document.querySelector("h1").innerHTML = "DICE #4 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Four && randomImage2 == Two) {
  document.querySelector("h1").innerHTML = "DICE #4 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Four && randomImage2 == Three) {
  document.querySelector("h1").innerHTML = "DICE #4 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Four && randomImage2 == Five) {
  document.querySelector("h1").innerHTML = "DICE #5 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>"
 }
 else if (randomImage1 == Four && randomImage2 == Six) {
  document.querySelector("h1").innerHTML = "DICE #6 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>"
 }
 else if (randomImage1 == Five && randomImage2 == One) {
  document.querySelector("h1").innerHTML = "DICE #5 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Five && randomImage2 == Two) {
  document.querySelector("h1").innerHTML = "DICE #5 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Five && randomImage2 == Three) {
  document.querySelector("h1").innerHTML = "DICE #5 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Five && randomImage2 == Four) {
  document.querySelector("h1").innerHTML = "DICE #5 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Five && randomImage2 == Six) {
  document.querySelector("h1").innerHTML = "DICE #6 WINS!";
  document.querySelector('.p1').innerHTML = "🏳️ <strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩 <strong>PLAYER 2 WINS!</strong>"
 }
 else if (randomImage1 == Six && randomImage2 == One) {
  document.querySelector("h1").innerHTML = "DICE #6 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Six && randomImage2 == Two) {
  document.querySelector("h1").innerHTML = "DICE #6 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Six && randomImage2 == Three) {
  document.querySelector("h1").innerHTML = "DICE #6 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Six && randomImage2 == Four) {
  document.querySelector("h1").innerHTML = "DICE #6 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
 else if (randomImage1 == Six && randomImage2 == Five) {
  document.querySelector("h1").innerHTML = "DICE #6 WINS!";
  document.querySelector('.p1').innerHTML = "🚩 <strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🏳️ <strike>PLAYER 2</strike>";
 }
else {
    document.querySelector("h1").innerHTML = "DRAW!";
}

