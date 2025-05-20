/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This file contains implementation of a turn-based combat simulation game inspired by Dungeons and Dragons.
 * Players draw cards from their decks and engage in various events based on the card types.
 */


//The Character Cards

/**
 * Represents a character card.
 * @typedef {Object} CharacterCard
 * @property {string} name - The name of the character.
 * @property {string} type - The type of the card (always "character").
 * @property {number} strength - Determines damage potential.
 * @property {number} defense -  Used to reduce incoming damage.
 * @property {number} health - Represents the character’s life points.
 * @property {function} attack - The attack method for the character.
 */


/**
 * Halfling Warrior character card.
 * @type {CharacterCard}
 */
const halflingWarrior = {
    name: "Mario",
    type: "character",
    strength: 11,
    defense: 10,
    health: 15,

    attack: function axeSwing(enemy){
        console.log("Axe Attack!");
        const damagePoints = this.strength - enemy.defense;
        
        //What happens if the character does no damage
        if (damagePoints <= 0) {
            console.log(`The enemy's defense is impenetrable! ${this.name} goes home feeling defeated.`);
        } else {
            //What happens if the character does some damage
            console.log(`${enemy.name}: "${enemy.onHit()}"`)
            console.log(`The hit goes through! ${this.name} wacks ${enemy.name} with an axe!`);
        }
    }
};


/**
 * Human Wizard character card.
 * @type {CharacterCard}
 */
const humanWizard = {
    name: "Luigi",
    type: "character",
    strength: 16,
    defense: 5,
    health: 10,

    attack: function wandSwing(enemy){
        console.log(`${this.name} performs a magic attack!`);
        const damagePoints = this.strength - enemy.defense;
        
        //What happens if the character does no damage
        if (damagePoints <= 0) {
            console.log(`The enemy's defense is impenetrable! ${this.name} goes home feeling defeated.`);
        } else {
            //What happens if the character does some damage
            console.log(`${enemy.name}: "${enemy.onHit()}"`)
            console.log(`The hit goes through! ${this.name} blasts ${enemy.name} with his magic!`);
        }
    }
};


/**
 * Dragonborn Cleric character card.
 * @type {CharacterCard}
 */
const dragonbornCleric = {
    name: "Yoshi",
    type: "character",
    strength: 6,
    defense: 15,
    health: 20,

    attack: function tongueSwing(enemy){
        console.log(`${this.name} uses "Tongue Attack"!`);
        const damagePoints = this.strength - enemy.defense;
        
        //What happens if the character does no damage
        if (damagePoints <= 0) {
            console.log(`The enemy's defense is impenetrable! ${this.name} goes home feeling defeated (and hungry).`);
        } else {
            //What happens if the character does some damage
            console.log(`${enemy.name}: "${enemy.onHit()}"`)
            console.log(`The hit goes through! ${this.name} now knows what ${enemy.name}'s fear tastes like!`)
        }
    }
};




// Character Related Functions:

//The Duel Types
/**
 * @function compareAtk
 * @description Compares the attack stats of two characters. The character with the higher attack grants points equal to their own health to their player.
 * @param {Object} player1 - The player controlling character1.
 * @param {Object} player2 - The player controlling character2.
 * @param {Object} character1 - The first character with an 'attack' stat.
 * @param {Object} character2 - The second character with an 'attack' stat.
 * @returns {void} This function does not return anything,
 * it performs side effects like logging and updating player points.
 */
function compareAtk(player1, player2, character1, character2){
    
    if (character1.attack > character2.attack) {
        console.log(`${character1.name} is stronger than ${character2.name}!`);
        let pointsGained = character1.health;
        player1.addPoints(pointsGained);
        
    } else if (character1.attack < character2.attack) {
        console.log(`${character2.name} is stronger than ${character1.name}!`);
        let pointsGained = character2.health;
        player2.addPoints(pointsGained);

    } else {
        console.log("It's a draw!");
    }
};


/**
 * @function compareDef
 * @description Compares the defense stats of two characters. The character with the higher defense grants points equal to their own health to their player.
 * @param {Object} player1 - The player controlling character1.
 * @param {Object} player2 - The player controlling character2.
 * @param {Object} character1 - The first character with a 'defense' stat.
 * @param {Object} character2 - The second character with a 'defense' stat.
 * @returns {void} This function does not return anything,
 * it performs side effects like logging and updating player points.
 */
function compareDef(player1, player2, character1, character2){
    
    if (character1.defense > character2.defense) {
        console.log(`${character1.name} is sturdier than ${character2.name}!`);
        let pointsGained = character1.health;
        player1.addPoints(pointsGained);

        
    } else if (character1.defense < character2.defense) {
        console.log(`${character2.name} is sturdier than ${character1.name}!`);
        let pointsGained = character2.health;
        player2.addPoints(pointsGained);


    } else {
        console.log("It's a draw!");
    }
};


/**
 * @function compareHp
 * @description Compares the health stats of two characters. The character with the higher health grants points equal to their own health to their player.
 * @param {Object} player1 - The player controlling character1.
 * @param {Object} player2 - The player controlling character2.
 * @param {Object} character1 - The first character with a 'health' stat.
 * @param {Object} character2 - The second character with a 'health' stat.
 * @returns {void} This function does not return anything,
 * it performs side effects like logging and updating player points.
 */
function compareHp(player1, player2, character1, character2){
    
    if (character1.health > character2.health) {
        console.log(`${character1.name} is healthier than ${character2.name}!`);
        let pointsGained = character1.health;
        player1.addPoints(pointsGained);

        
    } else if (character1.health < character2.health) {
        console.log(`${character2.name} is healthier than ${character1.name}!`);
        let pointsGained = character2.health;
        player2.addPoints(pointsGained);

        
    } else {
        console.log("It's a draw!");
    }
};



// Randomly Selects Between the Character Cards' Duel Methods
/**
 * @function duelSelector
 * @description Randomly selects and returns a duel function from the given array.
 * @param {Function[]} duelTypeArray - An array of functions used to compare characters (e.g., compareAtk, compareDef, compareHp).
 * @returns {Function} - One of the functions from the array.
 */
function duelSelector(duelTypeArray) {
    //Selects a function belonging to the duelType array in index form
    const duelTypeIndex = Math.floor(Math.random() * ((duelTypeArray.length-1) - 0 + 1));
    const selectedDuel = duelTypeArray[duelTypeIndex];
    return selectedDuel;
}



// ------------------------------------------------------------------------
//The Enemy Cards


/**
 * Represents an enemy card.
 * @typedef {Object} EnemyCard
 * @property {string} name - The name of the enemy.
 * @property {string} type - The type of the card (always "enemy").
 * @property {number} defense - The defense attribute of the enemy.
 * @property {number} health - The health attribute of the enemy.
 * @property {function} onHit - A method that returns a reaction when the enemy is hit.
 * @property {function} chill - A method that returns a casual phrase from the enemy.
 */


/**
 * Dwarf Artificer enemy card.
 * @type {EnemyCard}
 */
const dwarfArtificer = {
    name: "Wario",
    type: "enemy",
    defense: 10,
    health: 15,

    onHit: function ouch(){
        return "WAH!";
    },

    chill: function tavernTalk(){
        return "'sup.";
    }
};

/**
 * Elf Thief enemy card.
 * @type {EnemyCard}
 */
const elfThief = {
    name: "Waluigi",
    type: "enemy",
    defense: 5,
    health: 10,
    
    onHit: function ouch(){
        return "OUCHIE!";
    },

    chill: function tavernTalk(){
        return "What'cha looking at?";
    }
};

/**
 * Dragonborn Warlock enemy card.
 * @type {EnemyCard}
 */
const dragonbornWarlock = {
    name: "Bowser",
    type: "enemy",
    defense: 15,
    health: 20,
    
    onHit: function ouch(){
        return "Sgrunt!";
    },

    chill: function tavernTalk(){
        return "So, my love for Princess Peach started back in 1985...";
    }
};



//Enemy Related Functions:
/**
 * @function tavernEvent
 * @description Simulates a tavern conversation between two enemies. Each one says a random line from their chill() method.
 * @param {Object} enemy1 - The first enemy character.
 * @param {Object} enemy2 - The second enemy character.
 * @returns {void}
 */
function tavernEvent(enemy1, enemy2) {
    console.log(`${enemy1.name}: "${enemy1.chill()}"`);
    console.log(`${enemy2.name}: "${enemy2.chill()}"`);
    console.log(`${enemy1.name} and ${enemy2.name} ended up bonding a bit!\n...Maybe.`);

}



// ------------------------------------------------------------------------
//The Spell Cards


/**
 * Represents a spell card.
 * @typedef {Object} SpellCard
 * @property {string} name - The name of the spell.
 * @property {string} type - The type of the card (always "spell").
 * @property {function} buff - A method to buff a character's attributes.
 * @property {function} damage - A method to damage a character.
 */

/**
 * Daisy spell card.
 * @type {SpellCard}
 */
const daisySpell = {
    name: "Daisy",
    type: "spell",
    
    buff: function lovesMe(character, player){
        console.log(`It seems like ${this.name} really likes ${character.name}!\nAll stats have gained +5!`);
        let newStrength = character.strength +5;
        let newDefense = character.defense +5;
        let newHealth = character.health +5;
        console.log(`${character.name}'s strength: ${character.strength} -> ${newStrength}\n`,
            `${character.name}'s defense: ${character.defense} -> ${newDefense}\n`,
            `${character.name}'s health: ${character.health} -> ${newHealth}`
            );
        
        player.addPoints(newHealth);
    },
    
    damage: function lovesMeNot(character){
        console.log(`Shucks, ${this.name} can't stand ${character.name}!\nIn fact, they're being sentenced to death.`);

        let newHealth = 0;
        console.log(`${character.name}'s health: ${character.health} -> ${newHealth}.`);
        console.log(`Goodbye ${character.name}, you shall be remembered.`);
    }
};

/**
 * Peach spell card.
 * @type {SpellCard}
 */
const peachSpell = {
    name: "Peach",
    type: "spell",
    
    buff: function toadShield(character, player){
        console.log(`${this.name}: "It's dangerous to go alone, take this Toad!"\nBoost defense!`);
        let newDefense = character.defense +10;
        console.log(`${character.name}'s defense: ${character.defense} -> ${newDefense}.`);
        player.addPoints(character.health);
    
    },

    damage: function panAttack(character, player){
        console.log(`WHACK! ${character.name} has been hit by Peach's trusty pan!`);
        let newHealth = 10 - character.health;
        console.log(`${character.name}'s health: ${character.health} -> ${newHealth}.`);
        
        if (newHealth > 0) {
            console.log(`...yet ${character.name} still lives!`);
            player.addPoints(newHealth);
        } else {
            console.log(`Goodbye ${character.name}, you shall be remembered.`);
            
        }
    }
};

/**
 * Rosalina spell card.
 * @type {SpellCard}
 */
const rosalinaSpell = {
    name: "Rosalina",
    type: "spell",
    
    buff: function wink(character, player){
        console.log(`${this.name}: "Aww! Here ${character.name}, have some more hit points."`);
        let newHealth = character.health +5;
        console.log(`${character.name}'s health: ${character.health} -> ${newHealth}.`);
        player.addPoints(newHealth);
    },
    
    damage: function meteorAttack(character, player){
        console.log(`${this.name}: "You shouldn't have tested my patience."`);
        let newHealth = 15 - character.health;
        console.log(`${character.name}'s health: ${character.health} -> ${newHealth}.`);
        
        if (newHealth > 0) {
            console.log(`...yet ${character.name} still lives!`);
            player.addPoints(newHealth);
        } else {
            console.log(`Goodbye ${character.name}, you shall be remembered.`);
        }
    }
};



// Randomly selects between the Spell Cards' Methods
/**
 * Randomly selects a spell method (buff or damage) and applies it to a character.
 * @param {SpellCard} spell - The spell card.
 * @param {CharacterCard} character - The character card.
 * @param {Player} player - The player owning the character.
 */
function spellMethodSelector(spell, character, player) {
    const methods = ["buff", "damage"];
    const selectedMethod = methods[Math.floor(Math.random() * methods.length)];
    spell[selectedMethod](character, player);
}



// ------------------------------------------------------------------------
//Arrays of Cards



const characterCards = [halflingWarrior, humanWizard, dragonbornCleric];
const enermyCards = [dwarfArtificer, elfThief, dragonbornWarlock];
const spellCards = [peachSpell, daisySpell, rosalinaSpell];

const cardType = [characterCards, enermyCards, spellCards];

const duelType = [compareAtk, compareDef, compareHp];



// ------------------------------------------------------------------------
//The Players


/**
 * Represents a player.
 * @typedef {Object} Player
 * @property {string} name - The name of the player.
 * @property {Array<Object>} deck - The player's deck of cards.
 * @property {number} score - The player's current score.
 * @property {function} makingDeck - A method to populate the player's deck with random cards.
 * @property {function} checkDeck - A method to display the player's current deck.
 * @property {function} drawCard - A method to draw the first card from the player's deck.
 * @property {function} addPoints - A method to add points to the player's score.
 */


/**
 * Represents Player 1 in the game. Contains player's name, deck of cards, and score.
 * @type {Player}
 */
const p1 = {
    name: "Player1",
    deck: [],
    score: 0,

    /**
     * @method makingDeck
     * @description Fills the player's deck with 5 random cards of the specified type.
     * @param {string} cardType - The type of card to add to the deck (e.g., "spell", "enemy", "character").
     * @example
     * p1.makingDeck("spell");
     */
    makingDeck: function(cardType) {
        //STARTING WITH 5 CARDS
        for (let i = 0; i < 5; i++) {

            let selectedCard = cardSelector(cardType);
            
            //Insert it at the end of the deck
            this.deck.push(selectedCard);
            
        }

    },

     /**
     * @method checkDeck
     * @description Logs the current contents of the player's deck.
     * @example
     * p1.checkDeck();
     */
    checkDeck: function() {
        console.log("-------");
        console.log("<<P1 DECK>>");

        this.deck.forEach(card => {
            console.log(`${card.type}: ${card.name}`);
        });

        console.log("-------");   
    },


    /**
     * @method drawCard
     * @description Removes and returns the first card from the player's deck (FIFO).
     * @returns {object|string} The drawn card object, or a message if no cards are available.
     * @example
     * const card = p1.drawCard();
     */
    drawCard: function() {
        if (this.deck.length < 0) {
            return "There are no more cards to draw";  // No more cards to draw
        }

        // Remove and return the first card in the deck/queue (FIFO)
        const drawnCard = this.deck.shift();
        console.log(`P1 has drawn ${drawnCard.name}!`);
        return drawnCard;
    },


    /**
     * @method addPoints
     * @description Adds points to the player's score and logs the update.
     * @param {number} points - The number of points to add.
     * @example
     * p1.addPoints(10);
     */
    addPoints: function(points) {
        this.score += points;
        console.log(`${this.name} has gained ${points} points!`);
    }
};



/**
 * Represents Player 2 in the game. Contains player's name, deck of cards, and score.
 * @type {Player}
 */
const p2 = {
    name: "Player2",
    deck: [],
    score: 0,

    /**
     * @method makingDeck
     * @description Fills the player's deck with 5 random cards of the specified type.
     * @param {string} cardType - The type of card to add to the deck.
     * @example
     * p2.makingDeck("enemy");
     */
    makingDeck: function(cardType) {
        //STARTING WITH 5 CARDS
        for (let i = 0; i < 5; i++) {

            let selectedCard = cardSelector(cardType);
            
            //Inserts it at the end of the deck
            this.deck.push(selectedCard);
        }
    },

    /**
     * @method checkDeck
     * @description Logs the current contents of the player's deck.
     * @example
     * p2.checkDeck();
     */
    checkDeck: function() {
        console.log("<<P2 DECK>>");

        this.deck.forEach(card => {
            console.log(`${card.type}: ${card.name}`);
        });

        console.log("-------");
    },


    /**
     * @method drawCard
     * @description Removes and returns the first card from the player's deck (FIFO).
     * @returns {object|string} The drawn card object, or a message if no cards are available.
     * @example
     * const card = p2.drawCard();
     */
    drawCard: function() {
        if (this.deck.length < 0) {
            return "There are no more cards to draw";  // No more cards to draw
        }

        // Remove and return the first card in the deck/queue (FIFO)
        const drawnCard = this.deck.shift();
        console.log(`P2 has drawn ${drawnCard.name}!`);
        return drawnCard;
    },


    /**
     * @method addPoints
     * @description Adds points to the player's score and logs the update.
     * @param {number} points - The number of points to add.
     * @example
     * p2.addPoints(15);
     */
    addPoints: function(points) {
        this.score += points;
        console.log(`${this.name} has gained ${points} points!`);
    }
};



// Shows the players' scores
/**
 * @function showScores
 * @description Displays the current scores of both players in the console.
 * @example
 * showScores();
 */
function showScores() {
    //console.log("-------");
    console.log("<---<< SCOREBOARD >>--->");
    console.log(`P1 SCORE: ${p1.score}\nP2 SCORE: ${p2.score}`);
    //console.log("-------");
}



// Randomly selects which Cards will become part of a deck
/**
 * Randomly selects a card from a given array of card types.
 * @param {Array<Array<Object>>} typeArray - An array of card type arrays.
 * @returns {Object} The selected card.
 */
function cardSelector(typeArray) {
    
    //Selects the Card Type
    const typeIndex = Math.floor(Math.random() * ((typeArray.length-1) - 0 + 1));
    const cardArray = typeArray[typeIndex];
    
    //From the resulting array, selects one card
    const cardIndex = Math.floor(Math.random() * ((cardArray.length-1) - 0 + 1));
    const selectedCard = cardArray[cardIndex];

    return selectedCard;
}



// ------------------------------------------------------------------------
// MAIN BODY OF THE PROGRAM SET-UP



// [EVENT SELECTOR]: Selects an Event Depending on the Drawn Card Types
/**
 * @function eventSelector
 * @description Handles the interaction logic when both players draw cards.
 * Different outcomes depend on the types of the drawn cards.
 * @param {Player} player1 - The first player.
 * @param {Player} player2 - The second player.
 * @param {Object} drawnCardP1 - The card drawn by the first player.
 * @param {Object} drawnCardP2 - The card drawn by the second player.
 */
function eventSelector(player1, player2, drawnCardP1, drawnCardP2) {

    if (drawnCardP1.type === drawnCardP2.type) {
    
        //Spell vs Spell
        if (drawnCardP1.type === "spell") {
            console.log(`Those are both spells!\nThey make pretty fireworks!`);
    
        //Enemy vs Enemy
        } else if (drawnCardP1.type === "enemy") {
            console.log(`They are both enemies!\nAt this moment in time, inside a random tavern in the Shroom Kingdom...`);
            tavernEvent(drawnCardP1, drawnCardP2);
    
        //Chara vs Chara
        } else {
            console.log("They are both characters!");
            const selectedDuel = duelSelector(duelType);
            selectedDuel(player1, player2, drawnCardP1, drawnCardP2);
        }
        
    } else {
    
        //Chara vs Enemy
        if (drawnCardP1.type === "character" && drawnCardP2.type === "enemy") {
            console.log("Enemy spotted!");
            drawnCardP1.attack(drawnCardP2);
            
        } else if (drawnCardP1.type === "enemy" && drawnCardP2.type === "character") {
            console.log("Enemy spotted!");
            drawnCardP2.attack(drawnCardP1);
        

        //Spell vs Chara
        } else if (drawnCardP1.type === "spell" && drawnCardP2.type === "character") {
            console.log("The spell hit the character!");
            spellMethodSelector(drawnCardP1, drawnCardP2, player2);
            
        } else if (drawnCardP1.type === "character" && drawnCardP2.type === "spell") {
            console.log("The spell hit the character!");
            spellMethodSelector(drawnCardP2, drawnCardP1, player1);
    

        //Spell vs Enemy
        } else {
            console.log(`The enemy limboed their way out of the spell's range!\nThe spell is a bit sad...`);
        }
    }
}



//[TURN]: The logic of a single turn
/**
 * @function singleTurn
 * @description Executes a single turn of the match between two players.
 * Each turn is composed of multiple timed actions: displaying the turn number, drawing cards,
 * evaluating the turn's outcome via events, and updating the score.
 * @param {Object} player1 - The first player object.
 * @param {Object} player2 - The second player object.
 * @param {number} turnNumber - The number representing the current turn in the match.
 * @returns {void}
 */
function singleTurn(player1, player2, turnNumber) {

    let drawnCardP1, drawnCardP2;
    
    // All the actions making up a single turn 
    const actions = [
        () => console.log(`<---<< TURN NUMBER ${turnNumber} >>--->`),
        () => {
            drawnCardP1 = player1.drawCard();
            drawnCardP2 = player2.drawCard();
        },
        () => eventSelector(p1, p2, drawnCardP1, drawnCardP2),
        () => showScores()
    ];
    
    // The index to use for the "action" array
    let currentAction = 0;
    
    // Execute each action after a certain time
    const intervalIdTurn = setInterval(() => {

        // If there are still actions to perform, execute the current one
        if (currentAction < actions.length) {
            actions[currentAction]();
            currentAction++;
            
        } else {
            // Stop the interval when all actions are done
            clearInterval(intervalIdTurn);
        }
    }, 2000); // Execute actions every 2 seconds
}
    



//The return statement in this context is not strictly necessary, but it helps prevent the rest of the code in the setInterval callback from running after the match is over and the interval has been cleared.

//MATCH SECTION: the Main Function
/**
 * @function startMatch
 * @description Initializes the match by creating decks for both players and begins the turn-based loop.
 * The match continues until all cards are used.
 * @param {Object} player1 - The first player object.
 * @param {Object} player2 - The second player object.
 * @returns {void}
 */
function startMatch(player1, player2) {

    console.log(">-------<< START OF THE MATCH >>-------<");

    // Creating the decks (5 cards each)
    player1.makingDeck(cardType);
    player2.makingDeck(cardType);

    // Uncomment to print the content of the decks
    //player1.checkDeck();
    //player2.checkDeck();
    
    let turnNumber = 1;
    
    const intervalIdMatch = setInterval(() => {
    
        // Stop the interval if the deck is empty
        if (player1.deck.length === 0) {
            clearInterval(intervalIdMatch);
            setTimeout(endOfMatch, 1500);
            return;  // Exit the interval callback early  
        }
    
        // Continue the match
        singleTurn(player1, player2, turnNumber);
        turnNumber++;
    
    }, 7500);   //How long the turns last
}



// ------------------------------------------------------------------------
// END OF THE GAME



//Declares who the winner is, or if it's a draw
/**
 * @function declareWinner
 * @description Compares the final scores of both players and logs the winner (or a draw).
 * @param {Object} player1 - The first player object.
 * @param {Object} player2 - The second player object.
 * @returns {void}
 */
function declareWinner(player1, player2){
    
    let winner;

    if (player1.score > player2.score) {
        winner = player1.name;
    } else if (player1.score < player2.score) {
        winner = player2.name;
    } else {
        winner = "actually, it's a draw";
    }
    console.log(`Aaand the winner is... ${winner}!`);
}



// End of the Match Messages
/**
 * @function endOfMatch
 * @description Handles the end-of-match sequence, including displaying the end message, declaring the winner, and a goodbye message. All steps are delayed for timing and dramatic effect.
 * @returns {void}
 */
function endOfMatch() {

    //End Game
    setTimeout(() => {
        console.log(">-------<< END OF THE MATCH >>-------<");
    }, 1500);

    // Declaring the winner
    setTimeout(() => {
        declareWinner(p1, p2);
    }, 3000);

    // Goodbyes
    setTimeout(() => {
        console.log("Thanks for playing! See you next time :)");
    }, 4500);
}




// ------------------------------------------------------------------------


//Starts the Game
startMatch(p1, p2);