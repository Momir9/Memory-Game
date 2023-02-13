cardArray = [
   {
     name: 'fries',
     img: 'images/fries.png'
   }, 
   {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  }, {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  }, 
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  }, 
  {
   name: 'cheeseburger',
   img: 'images/cheeseburger.png'
 }, {
   name: 'hotdog',
   img: 'images/hotdog.png'
 },
 {
   name: 'ice-cream',
   img: 'images/ice-cream.png'
 },
 {
   name: 'milkshake',
   img: 'images/milkshake.png'
 }, 
 {
   name: 'pizza',
   img: 'images/pizza.png'
 }
]

cardArray.sort(() => 0.5 - Math.random()) /*randomize upon each page refresh*/

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
  for (let i = 0; i < cardArray.length; i++){
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', turnCard) /*calls the turnCard function when a cell is clicked*/
      gridDisplay.append(card)
      
  }
}
createBoard()

function checkMatch () {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1] 
    console.log(cards)
    console.log('check for a match!')
    if (optionOneId == optionTwoId){ /* if we click on the same image twice*/
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var closeButton = document.getElementsByClassName("close-button")[0];
    closeButton.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }};
        /*alert('You have clicked on the same image!')*/
    }
   else if (cardsChosen[0] === cardsChosen[1]) { 
      alert('You found a match!') /* We can do a popup instead of the alert */
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', turnCard)
      cards[optionTwoId].removeEventListener('click', turnCard)
      cardsWon.push(cardsChosen)
  } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Try again')
  }
  resultDisplay.textContent = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if (cardsWon.length === (cardArray.length/2)) {
      resultDisplay.innerHTML = 'You won the game'
}
}

function turnCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}