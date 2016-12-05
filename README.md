Game completed December 2016 with the help of Neil Burdick and Danny Kirschner.

When starting this project I had a good understanding of algorithms and how to
make functions that work on their own, but found out I was very weak on where
to use those functions.  At certain points I found this project to be impossibly
hard and thought I was miles from completion and did not realize that by moving
one function to a better spot I could change the whole gameflow, and was
actually very near completion.  Danny and Neil both deserve the credit for
teaching me this.

Simon is a fun memory game where the user has to mimic the computers color patterns.



I'm keeping the pseudocode below to I can look back on how I used to think.

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
