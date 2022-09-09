
// Dice 1 
let randomNumber1 = Math.floor(Math.random() * 6) + 1; 

let randomDiceImage = `images/dice${randomNumber1}.png`; // path of dice images

let getImage = document.querySelectorAll("img")[0] // get image element with index 0 (i.e. first image)

let setImage = getImage.setAttribute("src", randomDiceImage) // change sourceo of image
