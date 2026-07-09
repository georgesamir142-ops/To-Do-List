# 📝 To-Do List — Daily Ledger

A clean, minimal to-do list web app with a warm "paper ledger" aesthetic, built with vanilla HTML, CSS, and JavaScript.

## Features

- ➕ Add new tasks via input field or button
- ✅ Mark tasks as done by clicking the circle toggle
- ❌ Delete tasks with the "×" button
- 📊 Live task counter showing `done/total` tasks
- 🎨 Custom styled UI with Google Fonts (`Inter` + `Space Grotesk`)

## Project Structure

```
project/
├── index.html      # Main HTML structure
├── style.css       # Styling (paper-ledger theme)
└── script.js       # App logic (add/complete/delete tasks)
```

## How It Works

### HTML (`index.html`)
Defines the layout: a title, an input field, an "add task" button, a task counter, and an empty `<ul>` that gets populated dynamically with tasks.

### JavaScript (`script.js`)
- Listens for clicks on the **Add** button to create a new task (`<li>`) containing:
  - A circle (toggle for marking done/undone)
  - The task text
  - A delete button (`×`)
- Tracks `totalCount` and `doneCount` to update the counter (`done/total`) live.
- Clicking the circle toggles the `done` class (adds strikethrough styling) and updates the counter.
- Clicking `×` removes the task from the list and updates the counts.

### CSS (`style.css`)
- Uses CSS variables for a warm, paper-like color palette (cream background, deep green accent, rust-colored highlights).
- Ruled-paper background effect using a repeating linear gradient.
- Rounded cards for each task with hover/active states on buttons.
- Smooth `dropIn` animation when a new task is added.

## Getting Started

1. Save the three files (`index.html`, `style.css`, `script.js`) in the same folder.
2. Open `index.html` in your browser.
3. Start adding tasks! ✨

## Possible Improvements

- 💾 Persist tasks using `localStorage` so they survive page reloads
- ⌨️ Add task on pressing **Enter** key (not just button click)
- ✏️ Allow editing existing tasks
- 🔍 Add filters (All / Active / Completed)
- 📱 Improve responsiveness for smaller screens

## License

Free to use and modify for personal or educational purposes.