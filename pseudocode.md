# Calculator

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