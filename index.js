let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false

let message=""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Jack Black",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent= player.name + " : $"+player.chips


function getRandomCard(){

    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber===1){
        return 11
    }else if (randomNumber<14 && randomNumber >11){
        return 10
    }else{
        return randomNumber
    }

    
}


function startGame(){
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){

    cardsEl.textContent= "Cards: "

    for(let i = 0; i<cards.length;i++){
        cardsEl.textContent += cards[i] +" "
    }
    //cardsEl.textContent= "Cards: "+cards[0]+" and " +cards[1]
    sumEl.textContent="Sum: "+ sum
    
    if (sum < 21){
        message=("Do you want to draw a new card? ")
    
        isAlive = true
    } else if( sum=== 21){
        message=("Blackjack!")
        hasBlackJack = true
        
    } else{
        message=("You lose")
        isAlive = false
        
    }
    messageEl.textContent=message
    
}


function newCard(){
   
    if (isAlive===true && hasBlackJack===false){
    let card = getRandomCard()
    cards.push(card)
    sum +=card
    renderGame()

    }
}




