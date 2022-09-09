
// Dice 1 
let randomNumber1 = Math.floor(Math.random() * 6) + 1; 

let randomDiceImage = `images/dice${randomNumber1}.png`; // path of dice images

let getImage1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage) // get and set image with new src


// Dice 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1; 

let randomDiceImage2 = `images/dice${randomNumber2}.png`; // path of dice images

let getImage2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2) // get and set image with new src

// If player 1 has a higher number, player 1 wins

let setText = document.querySelector("h1").innerHTML
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "✨ Player 1 Wins! ✨ "
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "✨ Player 2 Wins! ✨ "
} else {
  document.querySelector("h1").innerHTML = "🚩 Draw"
}