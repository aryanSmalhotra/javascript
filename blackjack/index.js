let allCards = []
let sum = 0
let hasBlackJack= false
let player={
    name:"Aryan",
    chips: 200
}

let message = ""
let messageEl=document.getElementById("message")
let sumEL= document.getElementById("sum")
let card = document.getElementById("card")

let playerEl =document.getElementById("currency")



function getRandomCard(){
   let randomNo = Math.floor((Math.random() * 13) + 1);
   if(randomNo>10){
       return 10
   }else if(randomNo === 1){
       return 11
   }else{
       return randomNo
   }
}
function startGame() {
    isAlive =true
    let firstCard = getRandomCard()
    let secondCard=getRandomCard()
    allCards = [firstCard,secondCard]
    sum = firstCard+secondCard
    Start()
}

function Start() {
    
    card.textContent =  "Cards: " 

    for(let i=0; i<allCards.length; i++){
        card.textContent += allCards[i] + " "
        sumEL.textContent="Sum:"+ sum
       
    }
    
    
    if (sum <= 20) {
        message = "Dealer: Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Dealer: You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "Dealer: You're out of the game!"
        isAlive = false
    }
    messageEl.textContent=message}
    
      

function newCard(){
    if(isAlive === true && sum<21){
        let newCard = getRandomCard()
        sum += newCard
        // Push the card to the cards array
        allCards.push(newCard)
        
        Start()

    }

}
    

    