I have decided to attempt to make the game Simon.

Once I learn to play I'll post the instructions below.

Enjoy!

Step 1: User must press the start button.


# Pseudocode
-----------------------------------------------
# Initial computer choice.

Turn variable must be set to 1.

Computer must make a choice.

That choice must be added to the computerChoices array.

The corresponding div should highlight.

There should be a beeping sound when the div is highlighted.

The userChoices array should be set to 0.


# Initial Player choice.
Turn 1.

Player must make a choice.

That choice should be added to the userChoices array.

The corresponding div should highlight.

The userChoices array and computerChoices array should be checked for equality.

If all indexes of the arrays are equivalent, there should be a beeping sound and the game
should continue to the next turn.

If the players array is not the same as the computer array, there should be a buzzer and
both arrays should be set to 0.

 # Turn computer[i]

 If userChoices === computerChoices then:

 Turn variable must be set to += 1.

 Computer must make a choice.

 That choice must be added to the computerChoices array.

 The corresponding divS should highlight.

 There should be a beeping sound when each div is highlighted.

 The userChoices array should be set to 0.

 # Turn user[i]

 Player must make multiple choices equal to computerChoices.length.

 Those choices should be added to the userChoices array.

 The corresponding divs should highlight and beep when clicked.

 The userChoices array and computerChoices array should be checked for equality at every index.

 If all indexes of the arrays are equivalent, the game should continue to the next turn.

 If userChoices[i] is not equal to computerChoices[i] at any point, there should be a buzzer and
 both arrays should be set to 0.
