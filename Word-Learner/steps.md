# Steps to Build Your Word Learner App

Follow these steps to create your application. Don't worry if you don't understand everything at once. Use the `instructions.md` file and online resources to learn as you go.

1.  **Set up your React project:**
    *   Open your terminal in the `Learning/Deutsche Word/Word-Learner` directory.
    *   Run `npx create-react-app client`. This will create a new directory named `client` with a basic React application.
    *   `cd client` to move into the new directory.
    *   Run `npm start` to see the starter application in your browser.

2.  **Create your word data:**
    *   Inside the `src` directory of your `client` app, create a new file called `words.js`.
    *   In this file, create a JavaScript object with German words, categorized by level (A1, A2, B1). For example:
        ```javascript
        export const words = {
          A1: [
            { german: 'Hallo', english: 'Hello' },
            { german: 'Danke', english: 'Thank you' },
            // ... add more words
          ],
          A2: [
            // ... words for A2
          ],
          B1: [
            // ... words for B1
          ],
        };
        ```

3.  **Build the main App component (`src/App.js`):**
    *   Import the `words` data.
    *   Use the `useState` hook to manage the currently selected level (e.g., 'A1').
    *   Use `useState` to store the 5 random words you'll display.
    *   Create a function to pick 5 random words from the selected level. Call this function when the component first loads and when the level changes.
    *   Render the UI:
        *   A dropdown or buttons to select the level (A1, A2, B1).
        *   A button to get new words.
        *   A display area for the 5 words.

4.  **Create a `WordCard` component:**
    *   Create a new component file `src/WordCard.js`.
    *   This component will take a single word object as a "prop".
    *   It will display the German word.
    *   It can have a button to reveal the English translation.
    *   It should have a "Save" button.

5.  **Implement the "Save Word" functionality:**
    *   In `App.js`, create a state variable to hold your saved words (e.g., `savedWords`).
    *   Create a function `saveWord(word)` that adds a word to the `savedWords` array.
    *   Pass this function down to the `WordCard` component as a prop.
    *   When the "Save" button in `WordCard` is clicked, it should call the `saveWord` function.
    *   Use the `useEffect` hook to save the `savedWords` array to `localStorage` whenever it changes.
    *   When the app loads, check `localStorage` for any saved words and initialize your `savedWords` state with them.

6.  **Display Saved Words:**
    *   Create a new component `src/SavedWords.js`.
    *   This component will receive the `savedWords` array as a prop.
    *   It will map over the array and display each saved word.
    *   Include a button to "unsave" or remove a word.

7.  **Styling:**
    *   Use CSS to make your application look good. You can start with the `src/App.css` file.

This is a solid roadmap to get you started. Good luck!
