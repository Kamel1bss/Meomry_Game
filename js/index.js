// Accessing all the Cards
const allCards = document.querySelectorAll(".card");

// Declaring Two Variables Two Compare The Matching 
let firstCard = null,
secondCard = null;
let canClick = true
let score = 0;
allCards.forEach(card => {
    card.addEventListener("click", handleCardClicked);
})

// Handling Card On Click
function handleCardClicked() {
    if (!canClick) return;
    // Prevent Card Double Click
    if (this.classList.contains("Flip")) return;
    this.classList.add("Flip");
    if(firstCard == null) firstCard = this;
    else if (secondCard == null) secondCard = this;

    // Matching Two Images
    let img1 = firstCard? firstCard.firstElementChild.src : null;
    let img2 = secondCard? secondCard.firstElementChild.src : null;

// Handling Matching Condition  
    if (img1 === img2){
        firstCard = null;
        secondCard = null;
        score++;
        if (score === 6 ) handleGameOver();
    } else if (img1 && img2)
    {
        canClick = false
        setTimeout(()=> {
            firstCard.classList.remove("Flip")
            secondCard.classList.remove("Flip")
            firstCard = null;
            secondCard = null;
            canClick = true;
        },500)
    }
}

// handling Game Over

function handleGameOver(){
    setTimeout(()=>{
        let answer = confirm("You Won \nDo You Wanna Play Again?");
        if(answer) location.reload();
    },1000)
}

// Suffle All The Cards

allCards.forEach(card=>{
    let randPos = Math.floor(Math.random() * 12)
    card.style.order = randPos;
})

