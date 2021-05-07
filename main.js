const deck = ["A♠", "K♠", "Q♠", "J♠", "10♠", "9♠", "8♠", "7♠", "6♠", "5♠", "4♠", "3♠", "2♠", "A♥", "K♥", "Q♥", "J♥", "10♥", "9♥", "8♥", "7♥", "6♥", "5♥", "4♥", "3♥", "2♥", "A♣", "K♣", "Q♣", "J♣", "10♣", "9♣", "8♣", "7♣", "6♣", "5♣", "4♣", "3♣", "2♣", "A♦", "K♦", "Q♦", "J♦", "10♦", "9♦", "8♦", "7♦", "6♦", "5♦", "4♦", "3♦", "2♦"];
const card_index = ["2", "3", "4", "5", "6", "7", "8", "9", "1", "J", "Q", "K", "A"];
var shuffled_deck = [];
var player_count = 10;

// Burn Card
function burnCard() {
    let new_card = shuffled_deck[0];
    console.log("Burning card.. ", new_card);
    shuffled_deck.splice(shuffled_deck[0], 1);
}

// Check Hand Strength
function checkHandStrength() {
    // let flop1 = document.getElementById("flop-1").innerHTML.charAt(0);
    // let flop2 = document.getElementById("flop-2").innerHTML.charAt(0);
    // let flop3 = document.getElementById("flop-3").innerHTML.charAt(0);
    // let turn = document.getElementById("turn").innerHTML.charAt(0);
    // let river = document.getElementById("river").innerHTML.charAt(0);
    // let table_cards = [flop1, flop2, flop3, turn, river];

    // // // For loop to handle each player
    // for (var i = 1; i < player_count+1; i++) {
    //     let card1 = document.getElementById("p".concat(i, "_card1")).innerHTML.charAt(0);
    //     let card2 = document.getElementById("p".concat(i, "_card2")).innerHTML.charAt(0);
    //     let card_match = 0;

    //     // Hand 1
    //     for (var j = 0; j < table_cards.length; j++) {
    //         if (card1 == table_cards[j] && card1 != table_cards[0]) {
    //             card_match++;
    //         }
    //     }
    //     // Hand 2
    //     for (var k = 0; k < table_cards.length; k++) {
    //         if (card2 == table_cards[k] && card2 != table_cards[1]) {
    //             card_match++;
    //         }
    //     }
    //     console.log(i, card_match);
    //     card_match = 0;
    // }
}

// Deal player cards
function dealPlayerCards() {
    // Card 1
    for (var i = 1; i < player_count+1; i++) {
        //let card = shuffled_deck[0];
        //shuffled_deck.splice(shuffled_deck[0], 1);
        let card_id = "s".concat(i, "-card1");
        showCard(card_id);
    }
    // Card 2
    setTimeout(() => {
        for (var i = 1; i < player_count+1; i++) {
            //let card = shuffled_deck[0];
            //shuffled_deck.splice(shuffled_deck[0], 1);
            let card_id = "s".concat(i, "-card2");
            setTimeout(() => { showCard(card_id); }, 50);
        }
    }, 1000);
}

// Deal Fresh Table; Player Cards & Table Cards
function dealTable() {
    document.getElementById("sd-button").disabled = true;
    document.getElementById("sw-button").disabled = true;
    resetTable();
    document.querySelector("#table p").innerHTML = "Currently shuffling the deck"; shuffleDeck();
    setTimeout(() => { document.querySelector("#table p").innerHTML = "Currently dealing player cards"; dealPlayerCards(); }, 1000);
    setTimeout(() => { document.querySelector("#table p").innerHTML = "Currently dealing the Flop"; burnCard(); showCard("flop-1"); showCard("flop-2"); showCard("flop-3"); }, 3000);
    setTimeout(() => { document.querySelector("#table p").innerHTML = "Currently dealing the Turn"; burnCard(); showCard("turn"); }, 4000);
    setTimeout(() => { document.querySelector("#table p").innerHTML = "Currently dealing the River"; burnCard(); showCard("river"); }, 5000);
    setTimeout(() => { document.querySelector("#table p").innerHTML = "Currently waiting for action"; document.getElementById("sd-button").disabled = false; document.getElementById("sw-button").disabled = false; }, 6000);
}

// Reset Table
function resetTable() {
    // Clear card 1.
    for (let i = 1; i < player_count+1; i++) {
        document.getElementById("s".concat(i, "-card1")).innerHTML = "";
    }
    //  Clear card 2.
    for (let j = 1; j < player_count+1; j++) {
        document.getElementById("s".concat(j, "-card2")).innerHTML = "";
    }
    // Clear table cards.
    document.getElementById("flop-1").innerHTML = "";
    document.getElementById("flop-2").innerHTML = "";
    document.getElementById("flop-3").innerHTML = "";
    document.getElementById("turn").innerHTML = "";
    document.getElementById("river").innerHTML = "";
    // Reset card style and rotation.
    resetStyle();
    resetRotation();

}

// Reset Card Rotation
function resetRotation() {
    // Reset seat cards
    for (let i = 1; i < player_count+1; i++) {
        document.getElementById("s".concat(i, "-card1")).style.transform = "rotateX(180deg)";
        document.getElementById("s".concat(i, "-card2")).style.transform = "rotateX(180deg)";
    }
    // Reset table cards
    document.getElementById("flop-1").style.transform = "rotateX(180deg)";
    document.getElementById("flop-2").style.transform = "rotateX(180deg)";
    document.getElementById("flop-3").style.transform = "rotateX(180deg)";
    document.getElementById("turn").style.transform = "rotateX(180deg)";
    document.getElementById("river").style.transform = "rotateX(180deg)";
}

// Reset Card Style
function resetStyle() {
    // Reset table cards.
    document.getElementById("flop-1").style.backgroundColor = "lightblue"
    document.getElementById("flop-1").style.borderColor = "white";
    document.getElementById("flop-2").style.backgroundColor = "lightblue"
    document.getElementById("flop-2").style.borderColor = "white";
    document.getElementById("flop-3").style.backgroundColor = "lightblue"
    document.getElementById("flop-3").style.borderColor = "white";
    document.getElementById("turn").style.backgroundColor = "lightblue"
    document.getElementById("turn").style.borderColor = "white";
    document.getElementById("river").style.backgroundColor = "lightblue"
    document.getElementById("river").style.borderColor = "white";
    // Reset card 1.
    for (let i = 1; i < player_count+1; i++) {
        document.getElementById("s".concat(i, "-card1")).style.backgroundColor = "lightblue"
        document.getElementById("s".concat(i, "-card1")).style.borderColor = "white";
    }
    //  Reset card 2.
    for (let j = 1; j < player_count+1; j++) {
        document.getElementById("s".concat(j, "-card2")).style.backgroundColor = "lightblue"
        document.getElementById("s".concat(j, "-card2")).style.borderColor = "white";
    }
    // Reset opacity of all cards to 1.
    let seat_cards = document.querySelectorAll(".card-mini");
    for (let k = 0; k < seat_cards.length; k++) {
        seat_cards[k].style.opacity = "1";
    }
}

// Show card and set suit.
function showCard(card) {
    document.getElementById(card).style.transition = "all 1s ease";
    document.getElementById(card).style.transform = "rotateX(0deg)";
    document.getElementById(card).style.backgroundColor = "white";
    document.getElementById(card).style.borderColor = "lightblue";
    // Take card in the array.
    let new_card = shuffled_deck[0];
    shuffled_deck.splice(shuffled_deck[0], 1);
    // Set suit based on selection.
    if (new_card.charAt(new_card.length-1) == "♠") {
        document.getElementById(card).style.color = "black";
    }
    else if (new_card.charAt(new_card.length-1) == "♥") {
        document.getElementById(card).style.color = "red";
    }
    else if (new_card.charAt(new_card.length-1) == "♣") {
        document.getElementById(card).style.color = "green";
    }
    else if (new_card.charAt(new_card.length-1) == "♦") {
        document.getElementById(card).style.color = "blue";
    }
    setTimeout(() => { document.getElementById(card).innerHTML = new_card; }, 500);
}

// Show Winner
function showWinner() {
    let seat_cards = document.querySelectorAll(".card-mini");
    for (let i = 0; i < seat_cards.length; i++) {
        seat_cards[i].style.opacity = "0.33";
    }
    var rn = Math.ceil(Math.random() * 18);
    if (rn %2 == 1) {
        rn = rn-1;
    }
    //console.log(rn);
    seat_cards[rn].style.opacity = "1";
    seat_cards[rn+1].style.opacity = "1";
    document.querySelector("#table p").innerHTML = "Player # wins with [ ][ ] (This is random and doesn't work yet)";
}

// Shuffle deck
function shuffleDeck() {
    shuffled_deck = []; // Clear previous deck.
    var new_deck = [];
    new_deck = deck.map(card => card);
    // Create a new shuffled deck.
    while (new_deck.length > 0) {
        var rn = Math.floor(Math.random() * (new_deck.length*100)/100);
        shuffled_deck.push(new_deck[rn]);
        new_deck.splice(rn, 1);
    }
    console.log(shuffled_deck); // Log shuffled deck
}

// Set Default Card Position
resetTable();
document.getElementById("sw-button").disabled = true;
