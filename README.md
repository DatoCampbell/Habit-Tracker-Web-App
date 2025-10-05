# 🌟 Habit Tracker Web App

A beautiful, modern web application to track your daily habits with gamification elements, built with React and Vite. All data is stored locally in your browser using localStorage, ensuring privacy and offline functionality.

![Habit Tracker Demo](./demo.gif) <!-- Placeholder for demo GIF -->

## ✨ Features

- **🎨 Beautiful UI**: Modern design with gradients, animations, and smooth transitions
- **🎯 Add, Edit, and Delete Habits**: Easily manage your habit list with an intuitive interface
- **✅ Daily Checklist**: Interactive habit completion with celebratory animations
- **🔥 Streak Tracking**: View your current streak for each habit with achievement badges
- **📊 Progress Visualization**: Animated progress bar with color-coded completion levels
- **🎉 Motivational Messages**: Dynamic encouragement based on your progress
- **🎭 Random Icons**: Each habit gets a fun emoji icon for visual appeal
- **💾 Local Storage**: All data persists between sessions without needing a backend
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Smooth Animations**: Fade-in effects, hover animations, and completion celebrations

## Tech Stack

- **Frontend**: React 19.1.1 with Vite for fast development and building
- **Styling**: TailwindCSS 4.1.14 for modern, utility-first CSS with custom animations
- **Data Storage**: Browser localStorage (no backend required)
- **Language**: JavaScript (ES6+)
- **Icons**: Unicode emojis for cross-platform compatibility

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** (optional)
- **Git** (for cloning the repository) - [Download here](https://git-scm.com/)

You can check your versions by running:
```bash
node --version
npm --version
git --version
```

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TheUnknown550/Habit-Tracker-Web-App.git
   cd Habit-Tracker-Web-App
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   Or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

That's it! 🎉 The app will automatically open in your default browser.

### Alternative Installation Methods

#### Using GitHub CLI (if installed)
```bash
gh repo clone TheUnknown550/Habit-Tracker-Web-App
cd Habit-Tracker-Web-App
npm install
npm run dev
```

#### Download ZIP (without Git)
1. Go to the [GitHub repository](https://github.com/TheUnknown550/Habit-Tracker-Web-App)
2. Click the **"Code"** button → **"Download ZIP"**
3. Extract the ZIP file
4. Open terminal in the extracted folder
5. Run `npm install && npm run dev`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` folder. You can serve them using any static file server:

```bash
npm run preview
```

### Troubleshooting

#### Common Issues

**❌ "npm install" fails**
- Make sure you have Node.js 18+ installed
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

**❌ Port 5173 is already in use**
- The dev server will automatically use the next available port
- Or specify a different port: `npm run dev -- --port 3000`

**❌ "command not found: npm"**
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal/command prompt

**❌ App doesn't load in browser**
- Check that the terminal shows "ready in XXXms"
- Try a different browser
- Clear browser cache
- Check firewall/antivirus settings

**❌ Build fails**
- Ensure all dependencies are installed
- Try `npm run build` again
- Check that you're in the correct directory

#### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### System Requirements

- **OS**: Windows, macOS, or Linux
- **RAM**: 512MB minimum (1GB recommended)
- **Storage**: ~50MB for dependencies
- **Browser**: Modern browser with JavaScript enabled (Chrome, Firefox, Safari, Edge)

### Offline Usage

Since this app uses localStorage for data storage, it works completely offline once loaded. No internet connection is required for core functionality after the initial setup.

## 🎮 Usage

1. **Adding a Habit**: Use the beautiful "Add New Habit" form to create a new habit. Each habit automatically gets a fun emoji icon!

2. **Tracking Progress**: Click the circular icon next to each habit to mark it as completed. Watch the celebratory animation and see your progress bar update in real-time!

3. **Viewing Streaks**: See your current streak displayed below each habit name. Earn achievement badges for 7+ day and 30+ day streaks! 🔥⭐👑

4. **Motivational Feedback**: Get personalized encouragement messages based on your daily progress percentage.

5. **Editing Habits**: Click the "✏️ Edit" button next to a habit to modify its name or description.

6. **Deleting Habits**: Click the "🗑️ Delete" button to remove a habit from your list.

## 📈 Gamification Features

- **🎯 Achievement Badges**: Special indicators for impressive streaks
- **🎨 Dynamic Progress Colors**: Progress bar changes color based on completion percentage
- **✨ Celebration Animations**: Satisfying animations when completing habits
- **💬 Motivational Messages**: Context-aware encouragement throughout your journey
- **🎭 Visual Icons**: Each habit gets a unique emoji for better visual organization

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
public/                     # Static assets (currently empty)
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

- **📅 Calendar View**: Add a monthly calendar showing past completions with visual indicators
- **📊 Advanced Analytics**: Detailed statistics, trends, and habit performance insights
- **🔔 Notifications**: Browser notifications for habit reminders and streak maintenance
- **☁️ Cloud Sync**: Optional cloud storage integration for cross-device synchronization
- **🎨 Themes**: Dark mode, custom color schemes, and personalization options
- **📤 Data Export**: Export habit data to CSV, JSON, or PDF formats
- **👥 Social Features**: Share achievements and compete with friends
- **🎵 Sound Effects**: Optional audio feedback for habit completions
- **📱 PWA**: Progressive Web App features for mobile installation
- **🔄 Habit Templates**: Pre-built habit categories and templates for common goals

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Inspired by various habit tracking apps for a simple, effective approach
