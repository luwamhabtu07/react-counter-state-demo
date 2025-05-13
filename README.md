# React Counter State Demo

This project demonstrates basic state management in React, including:

- Standard state updates
- Asynchronous updates with `setTimeout`
- State batching behavior
- Correct use of updater function

## Run Instructions

1. Clone the repo
2. Run `npm install`
3. Run `npm start` to start the development server

## Demonstration

See the buttons in action:
- "Increment" adds 1
- "Increment After Delay" adds 1 after 2s
- "Increment Twice" may only add 1 due to batching
- "Correct Increment Twice" adds 2 using functional updates
