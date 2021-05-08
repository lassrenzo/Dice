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


// IF PLAYER 1 WINS
if (randomImage1 > randomImage2) { 
  document.querySelector('h1').innerHTML = 'DICE #' + randomPicture1 + ' WINS!';
  document.querySelector('.p1').innerHTML = "🏳️<strong>PLAYER 1 WINS!</strong>";
  document.querySelector('.p2').innerHTML = "🚩<strike>PLAYER 2</strike>";
}
// IF PLAYER 2 WINS
else if (randomImage2 > randomImage1) {
  document.querySelector('h1').innerHTML = 'DICE #' + randomPicture2 + ' WINS!';	
  document.querySelector('.p1').innerHTML = "🏳️<strike>PLAYER 1</strike>";
  document.querySelector('.p2').innerHTML = "🚩<strong>PLAYER 2 WINS!</strong>";
}
// IF TWO SAME NUMBER
else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
