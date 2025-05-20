# 02 Double combo


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Create a simulation of a turn-based combat system in a Dungeons and Dragons
game using two queues of cards
- the card types are
    - characters, spells, or enemies
- create two queues: one for each player's cards
- fill each queue with N random cards of different types
- each card should be an object with appropriate
    - properties e.g. strength, defense, health
    - methods e.g. attack(enemy), buff(character), damage(character), duel(character)


Turn-based Combat
- on each turn, draw one card from the start of each player's queue
- based on the type of cards drawn, certain combinations might trigger
special actions or effects, such as:
    - Character vs. Enemy: Attack action, dealing damage to the enemy
    - Spell vs. Character: Buff action, boosting the character's attributes or Damage action,
damaging or killing the character
    - Character vs. Character: Duel action, comparing attributes to determine the winner
    - Enemy vs. Enemy: No effect
- award points to each player based on the remaining health of their used
character cards



<br>
<br>

# Approach to Solution

## 📌 My Overview Of The Game

This game simulates a DnD-style battle between two players using **decks of cards**. Each turn, players draw one card and engage in a match-up: character vs character, character vs enemy, spell vs character, etc. Points are awarded for surviving battles and winning duels. The game continues until all cards are used.

<br>


## 🃏 Deck & Cards

Each player has a **queue (deck)** filled with `N` randomly generated cards of the following types:

- **Character**: A playable hero with attributes like `strength`, `defense`, and `health`. Can attack, duel, or be affected by spells.
- **Spell**: Used to either **buff** a character or **damage** an enemy or character.
- **Enemy**: Has `strength` and `health`, can fight characters but ignores spells and other enemies.

Each card is an **object** with properties and methods appropriate to its type (e.g., `attack()`, `buff()`, `onHit()`).

<br>



## 🎮 Game Flow (How a Match Works)

### Decks are created using `makeDeck()`
Each deck contains 10 cards randomly selected from three types:
- Character
- Enemy
- Spell

<br>

## Match starts with `startMatch()`

```js
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
```

This is the entry point of the game loop. It initializes the decks and kicks off the turn-by-turn system.

It:  
- Logs the start of the match.
- Calls `makingDeck()` on both players to give them 5 random cards.
- Starts a timer-based loop to execute one turn every **7.5 seconds**.
- When decks are empty → stops the loop and calls `endOfMatch()`.

<br>

## Single Turn Breakdown

- A single round is processed using `singleTurn()`
- Players draw a card each turn using `drawCard()`, which removes the top card from a deck and returns it.

```js
    drawCard: function() {
        if (this.deck.length < 0) {
            return "There are no more cards to draw";  // No more cards to draw
        }

        // Remove and return the first card in the deck/queue (FIFO)
        const drawnCard = this.deck.shift();
        console.log(`P1 has drawn ${drawnCard.name}!`);
        return drawnCard;
    },
```

- Players engage in different ways depending on the type of cards that have been drawn. Event type is selected via `eventSelector()`
- The chosen event function is executed (duel, attack, spell).
- **Award points** to players based on outcomes (in this case, remaining health of surviving characters).
- The result is printed and points are updated


### 3. Repeat

### 4. Game ends when decks are empty

<br>


## ⚔️ Events & Interactions

Depending on the drawn cards, different effects occur:

- `Character vs Enemy`: The character **attacks** the enemy.
- `Spell vs Character`: The spell either **buffs** or **damages** the character.
- `Character vs Character`: The two characters engage in a **duel** (compare stats to determine the winner).
- `Enemy vs Enemy`: No effect – the enemies ignore each other.

Additional feedback (e.g., sound effects, quotes, flavor text) can be triggered inside these interactions for immersion.

<br>

## 📦 Key Concepts Recap

- **Decks are queues** → cards drawn FIFO (First-In, First-Out).
- **Card Types** dictate interaction logic.
- **Points System** rewards player luck.
- **Events** are dynamic and driven by card method logic.