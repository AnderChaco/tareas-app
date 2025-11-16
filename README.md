# Todo App 📝

A beautiful and intuitive Todo application built with React Native and Expo. Organize your tasks with a clean interface and powerful features.

![Todo App](https://img.shields.io/badge/Platform-React%20Native-blue?style=flat-square&logo=react)
![Expo](https://img.shields.io/badge/Built%20with-Expo-black?style=flat-square&logo=expo)
![Version](https://img.shields.io/badge/Version-1.0.0-green?style=flat-square)

## ✨ Features

- ✅ **Add Tasks** - Create new tasks using a beautiful modal dialog
- 🎯 **Mark Complete** - Toggle task completion with intuitive checkboxes
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 📊 **Progress Tracking** - See your completion progress at a glance
- 📱 **Responsive Design** - Works perfectly on all device sizes
- ⌨️ **Keyboard Support** - Smart keyboard handling for better UX
- 🎨 **Modern UI** - Clean design with smooth animations

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ToDoApp.git
   cd ToDoApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on your device**
   - Install the [Expo Go](https://expo.dev/client) app on your mobile device
   - Scan the QR code displayed in your terminal or browser
   - The app will load on your device

### Alternative Run Methods

```bash
# Run on Android emulator
npm run android

# Run on iOS simulator (macOS only)
npm run ios

# Run in web browser
npm run web
```

## 📱 How to Use

### Adding Tasks
1. Tap the **"+ Add New Task"** button at the bottom
2. Enter your task description in the modal dialog
3. Tap **"Add Task"** to save or **"Cancel"** to discard

### Managing Tasks
- **Complete Task**: Tap the blue checkbox next to any task
- **Delete Task**: Tap the red ✗ button on the right side
- **View Progress**: Check the completion counter in the header

## 🏗️ Project Structure

```
ToDoApp/
├── App.js                      # Main application component
├── components/
│   ├── Task.js                 # Individual task component
│   └── AddTaskModal.js         # Modal dialog for adding tasks
├── assets/                     # Static assets (images, icons)
├── package.json                # Dependencies and scripts
├── app.json                    # Expo configuration
└── README.md                   # Project documentation
```

## 🛠️ Built With

- **[React Native](https://reactnative.dev/)** - Cross-platform mobile framework
- **[Expo](https://expo.dev/)** - Development platform and tools
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces

## 📋 Dependencies

```json
{
  "expo": "~54.0.20",
  "expo-status-bar": "~3.0.8",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "react-native-vector-icons": "^10.3.0"
}
```

## 🎨 UI Components

### Task Component
- Displays individual tasks with completion status
- Toggle completion functionality
- Delete task capability
- Visual feedback for completed tasks

### AddTaskModal Component
- Modal dialog for task creation
- Input validation and character limits
- Auto-focus and keyboard handling
- Cancel and confirmation actions

## 🔧 Customization

### Styling
All styles are defined using React Native's `StyleSheet`. You can customize:
- Colors in the style objects
- Fonts and text sizes
- Spacing and layout
- Shadow effects and animations

### Features
Easy to extend with additional features:
- Task categories or tags
- Due dates and reminders
- Task priorities
- Data persistence
- Cloud synchronization

## 🐛 Troubleshooting

### Common Issues

**App won't start:**
```bash
# Clear Expo cache
expo start --clear

# Reset Metro bundler cache
npx react-native start --reset-cache
```

**Dependencies issues:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Android build issues:**
- Ensure Android SDK is properly installed
- Check that Android emulator is running
- Verify USB debugging is enabled on physical devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub or contact the development team.

---

**Happy Task Managing! 🎉**

Made with ❤️ using React Native and Expo