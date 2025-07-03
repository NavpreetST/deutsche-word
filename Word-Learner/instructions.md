# Instructions

This file contains high-level instructions and resources to help you build your German word learning application.

## Core Technologies

*   **React:** A JavaScript library for building user interfaces. You'll use it to create the components of your application, like the word display, buttons, and level selector.
    *   **Key Concepts:** Components, State, Props, Hooks (`useState`, `useEffect`).
    *   **Official Tutorial:** [https://react.dev/learn](https://react.dev/learn)
*   **Create React App:** A tool to quickly set up a new React project with a good default configuration.
    *   **Command:** `npx create-react-app <your-app-name>`
*   **JavaScript (ES6+):** The programming language you'll use to write the logic for your React application.
    *   **Key Concepts:** Variables, Functions, Arrays, Objects, Promises, `async/await`.
*   **HTML & CSS:** For structuring and styling your application.

## Word Data

You'll need a source for your German words. Here are a few options:

*   **Simple JavaScript Object:** For a start, you can create a JavaScript file (e.g., `words.js`) that exports an object or array with words categorized by level (A1, A2, B1).
*   **JSON File:** You could also store your words in a JSON file and fetch them in your application.
*   **API (Advanced):** In the future, you could use a dictionary API to get words dynamically.

## Saving Words

To save words for later, you can use the browser's built-in `localStorage`.

*   **Key Concepts:** `localStorage.setItem(key, value)`, `localStorage.getItem(key)`. Remember that `localStorage` only stores strings, so you'll need to use `JSON.stringify()` and `JSON.parse()` for objects and arrays.
