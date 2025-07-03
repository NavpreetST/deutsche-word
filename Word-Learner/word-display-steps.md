# Detailed Steps: Displaying Random Words

This guide will walk you through the process of showing 5 random German words when a button is clicked.

Follow these steps inside your `word-learner-app` React project.

---

### Step 1: Create Your Word List

First, you need a place to store the words you'll be using.

1.  Navigate to the `src` folder inside your React app (`word-learner-app/src/`).
2.  Create a new file named `words.js`.
3.  Open `words.js` and add the following code. This creates and exports an array of word objects.

```javascript
// src/words.js

export const commonWords = [
  { german: 'ich', english: 'I' },
  { german: 'du', english: 'you' },
  { german: 'er', english: 'he' },
  { german: 'sie', english: 'she/they' },
  { german: 'es', english: 'it' },
  { german: 'wir', english: 'we' },
  { german: 'ihr', english: 'you (plural)' },
  { german: 'und', english: 'and' },
  { german: 'oder', english: 'or' },
  { german: 'aber', english: 'but' },
  { german: 'ja', english: 'yes' },
  { german: 'nein', english: 'no' },
  { german: 'bitte', english: 'please' },
  { german: 'danke', english: 'thank you' },
  { german: 'gut', english: 'good' },
  { german: 'schlecht', english: 'bad' },
  { german: 'heute', english: 'today' },
  { german: 'morgen', english: 'tomorrow' },
  { german: 'gestern', english: 'yesterday' },
  { german: 'essen', english: 'to eat' },
  { german: 'trinken', english: 'to drink' },
  { german: 'sprechen', english: 'to speak' },
  { german: 'sehen', english: 'to see' },
  { german: 'gehen', english: 'to go' },
  { german: 'kommen', english: 'to come' },
];
```

---

### Step 2: Modify the Main App Component

Now, let's edit the main component that controls your app.

1.  Open the file `src/App.js`.
2.  **Delete everything** in that file and replace it with the code below. I'll explain what each part does.

```javascript
// src/App.js

import React, { useState } from 'react'; // Import React and the useState hook
import { commonWords } from './words.js'; // Import your word list
import './App.css'; // Import the default stylesheet

function App() {
  // 1. STATE: Create a piece of state to hold the 5 words we want to display.
  // It starts as an empty array.
  const [displayWords, setDisplayWords] = useState([]);

  // 2. LOGIC: This function gets 5 random words and updates our state.
  const handleGetNewWords = () => {
    // Shuffle the original array in a random order
    const shuffled = [...commonWords].sort(() => 0.5 - Math.random());
    // Get the first 5 items from the shuffled array
    const selected = shuffled.slice(0, 5);
    // Update the state with the 5 new words
    setDisplayWords(selected);
  };

  // 3. UI (What you see): This is the HTML-like code (JSX) that gets rendered.
  return (
    <div className="App">
      <header className="App-header">
        <h1>German Word Learner</h1>

        {/* This button calls our logic function when clicked */}
        <button onClick={handleGetNewWords} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Get 5 New Words
        </button>

        {/* This is where the words will appear */}
        <div style={{ marginTop: '30px', fontSize: '24px' }}>
          {displayWords.map((wordObject) => (
            <div key={wordObject.german}>
              {wordObject.german}
            </div>
          ))}
        </div>

      </header>
    </div>
  );
}

export default App;
```

### How the Code Works

1.  **`useState`**: This is a React "hook". It lets you create a variable (`displayWords`) that, when changed with its special function (`setDisplayWords`), tells React to re-render the component and show the new data.
2.  **`handleGetNewWords`**: This is the function that runs when you click the button.
    *   It first makes a copy of your `commonWords` array.
    *   `sort(() => 0.5 - Math.random())` is a simple trick to shuffle the array randomly.
    *   `slice(0, 5)` takes the first 5 elements from that newly shuffled array.
    *   `setDisplayWords(selected)` updates our state variable, triggering a re-render to show the new words.
3.  **The `return` statement**:
    *   The `<button>` has an `onClick` attribute that is set to our `handleGetNewWords` function.
    *   The `displayWords.map(...)` part is key. It loops through our `displayWords` array (which is in the state). For each `wordObject` in the array, it creates a `<div>` and puts the German word (`wordObject.german`) inside it. The `key` is a special requirement for React to keep track of items in a list.

---

### Step 3: Run Your App

1.  If your app isn't running, open your terminal in the `word-learner-app` directory.
2.  Run the command: `npm start`
3.  Your browser should open to `http://localhost:3000`. You will see the title and the button. Click the button, and 5 random German words should appear!
