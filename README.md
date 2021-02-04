# React Calculator

# Pseudo Code:

## Components
- Screen to view numbers
- buttons to enter numbers
    - number buttons
    - clear, backspace
    - multiply, divide, subtract, multiply
    - decimal

## State variables
- Current number display
    - updates whenever a new number is pressed
- Previous number display
    - takes whatever number was previously on screen whenever an operator is pressed
    

### What shows up in the view window?
- a div that will show the current state of the current number display

### Function for getting numbers in the display window
- Display shows currentNumberState
- funciton updateNumber(numState) {
    if(numstate == 0)
}

### What happens on each button click?

1. You type in a number, this is constantly updating to be the current number
2. You will choose an operator. This will set the operator state variable and also move the current number state to now equal the previous number state.
3. Type another number. This will update the solution variable with an answer based on this number, previous number, and the currently chosen operator
4. If another operator is chosen, it will replace the current operator and move the solution into the previous number state
5. This will replace the current number with the solution number.