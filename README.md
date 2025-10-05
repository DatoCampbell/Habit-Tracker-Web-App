# Habit Tracker Web App

A simple, open-source web application to track your daily habits, built with React and Vite. All data is stored locally in your browser using localStorage, ensuring privacy and offline functionality.

![Habit Tracker Demo](./demo.gif) <!-- Placeholder for demo GIF -->

## Features

- **Add, Edit, and Delete Habits**: Easily manage your habit list with a user-friendly interface.
- **Daily Checklist**: Mark habits as completed each day with checkboxes.
- **Streak Tracking**: View your current streak for each habit (consecutive days completed).
- **Progress Bar**: See your daily progress with a visual progress bar showing the percentage of completed habits.
- **Local Storage**: All data persists between sessions without needing a backend.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Tech Stack

- **Frontend**: React 19 with Vite for fast development and building
- **Styling**: TailwindCSS for modern, utility-first CSS
- **Data Storage**: Browser localStorage (no backend required)
- **Language**: JavaScript (ES6+)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TheUnknown550/Habit-Tracker-Web-App.git
   cd Habit-Tracker-Web-App
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

1. **Adding a Habit**: Use the "Add New Habit" form to create a new habit. Provide a name and optional description.

2. **Tracking Progress**: Each day, check off the habits you've completed. The progress bar at the top will update to show your daily completion percentage.

3. **Viewing Streaks**: See your current streak for each habit displayed below the habit name.

4. **Editing Habits**: Click the "Edit" button next to a habit to modify its name or description.

5. **Deleting Habits**: Click the "Delete" button to remove a habit from your list.

## Project Structure

```
src/
├── components/
│   ├── AddHabitForm.jsx    # Form for adding new habits
│   ├── HabitItem.jsx       # Individual habit component
│   ├── HabitList.jsx       # List of all habits
│   └── ProgressBar.jsx     # Daily progress visualization
├── hooks/
│   └── useLocalStorage.js  # Custom hook for localStorage persistence
├── App.jsx                 # Main application component
├── index.css               # Global styles with Tailwind imports
└── main.jsx                # Application entry point
public/
└── ...                     # Static assets
```

## Contributing

Contributions are welcome! This project is open-source and beginner-friendly. Here's how you can contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test them
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Open a Pull Request

### Ideas for Contributions

- Add a calendar view for past completions
- Implement data export/import functionality
- Add notifications for habit reminders
- Integrate with cloud storage for cross-device sync
- Add analytics and insights about habit patterns

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Inspired by various habit tracking apps for a simple, effective approach
