# 🌟 Habit Tracker Web App

A beautiful, modern web application to track your daily habits with gamification elements, built with React and Vite. All data is stored locally in your browser using localStorage, ensuring privacy and offline functionality.

![Habit Tracker Demo](./demo.gif) <!-- Placeholder for demo GIF -->

## ✨ Features

- **🎨 Beautiful UI**: Modern design with gradients, animations, and smooth transitions
- **🎯 Add, Edit, and Delete Habits**: Easily manage your habit list with an intuitive interface
- **✅ Daily Checklist**: Interactive habit completion with celebratory animations
- **🔥 Streak Tracking**: View your current streak for each habit with achievement badges
- **📊 Progress Visualization**: Animated progress bar with color-coded completion levels
- **📅 Calendar View**: Monthly calendar showing habit completion history with visual indicators
- **📈 Statistics Dashboard**: Comprehensive analytics including completion rates, top habits, and progress charts
- **💾 Data Management**: Export/import habit data and clear all data with backup functionality
- **🎉 Motivational Messages**: Dynamic encouragement based on your progress percentage
- **🎭 Random Icons**: Each habit gets a fun emoji icon for better visual organization
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

The app features four main sections accessible via the navigation tabs at the top:

### 🎯 Habits Tab
1. **Adding a Habit**: Use the beautiful "Add New Habit" form to create a new habit. Each habit automatically gets a fun emoji icon!

2. **Tracking Progress**: Click the circular icon next to each habit to mark it as completed. Watch the celebratory animation and see your progress bar update in real-time!

3. **Viewing Streaks**: See your current streak displayed below each habit name. Earn achievement badges for 7+ day and 30+ day streaks! 🔥⭐👑

4. **Editing Habits**: Click the "✏️ Edit" button next to a habit to modify its name or description.

5. **Deleting Habits**: Click the "🗑️ Delete" button to remove a habit from your list.

### 📅 Calendar Tab
- View your habit completion history in a monthly calendar format
- Green dots: All habits completed that day
- Yellow dots: Some habits completed that day
- Gray dots: No habits completed that day
- Navigate between months and jump back to today

### 📊 Statistics Tab
- **Key Metrics**: Total habits, active habits, longest streak, monthly completion rate
- **Top Performing Habits**: See which habits you complete most consistently
- **Progress Charts**: Visual representation of your last 14 days of habit completion

### 💾 Data Tab
- **Export Data**: Download your habits and progress as a JSON backup file
- **Import Data**: Upload a previously exported backup to restore your data
- **Clear All Data**: Permanently remove all habits and completion history

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
│   ├── AddHabitForm.jsx       # Form for adding new habits
│   ├── CalendarView.jsx       # Monthly calendar with completion history
│   ├── DataExport.jsx         # Data management (export/import/clear)
│   ├── HabitItem.jsx          # Individual habit component
│   ├── HabitList.jsx          # List of all habits
│   ├── ProgressBar.jsx        # Daily progress visualization
│   └── StatisticsDashboard.jsx # Analytics and statistics
├── hooks/
│   └── useLocalStorage.js     # Custom hook for localStorage persistence
├── App.jsx                    # Main application with tab navigation
├── index.css                  # Global styles with Tailwind imports
└── main.jsx                   # Application entry point
public/                        # Static assets (currently empty)
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

- **🌙 Dark Mode**: Toggle between light and dark themes for better user experience
- **� PWA Features**: Progressive Web App capabilities for mobile installation
- **🔔 Browser Notifications**: Optional reminders for habit completion times
- **📊 Advanced Analytics**: Trend analysis, habit correlations, and predictive insights
- **� Habit Categories**: Group habits by categories (Health, Productivity, Learning, etc.)
- **📤 Data Export Options**: Export to CSV, PDF reports, or shareable formats
- **🔄 Habit Templates**: Pre-built habit collections for common goals
- **👥 Social Features**: Share achievements and compete with friends
- **🎵 Sound Effects**: Customizable audio feedback for habit completions
- **� Weekly/Monthly Goals**: Set and track completion targets
- **🔥 Streak Challenges**: Community challenges and streak competitions
- **� Habit Insights**: AI-powered suggestions for habit improvement

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Inspired by various habit tracking apps for a simple, effective approach
