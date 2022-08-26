# React - Tenzies Game

Click [here](https://edmond-luu.github.io/react-tenzies) or on the image below to see the app!
[![image](https://user-images.githubusercontent.com/26613209/186963727-81e0d683-f9e8-4de1-a21a-e152aa942a8c.png)](https://edmond-luu.github.io/react-tenzies)

This was one of the final projects from Scrimba's React course. The goal of this game is simple; roll all the dice until all of them have the same number value. The player can choose to hold any dice to prevent them from rolling when the roll button is clicked. Once all the dice are of the same value and the player holds all of them, the game will end and confetti will drop down from the top of the screen.

I have added some extra features to the game beyond what has been shown on Scrimba. Here are the features that I've incorporated:
- There are actual dice dots displayed for each dice instead of numbers.
- A roll counter that displays the number of times the player has rolled the dice.
- A last rolls counter that displays the number of rolls from the previous game.
- A high score counter that displays the lowest number of rolls the player used to win a game.
  - Also, The high score value is saved in the localStorage, which means that if the player reloads the page, the high score value will not reset.
- When all dice are held, but the game has not yet been won, clicking the roll button will not increase the roll counter.
- When the game is won, the blue button changes to green.
- When the game is won, the user cannot unhold any die.

![image](https://user-images.githubusercontent.com/26613209/186963608-05ad590c-c2f7-4418-993d-029ce74ee75b.png)
