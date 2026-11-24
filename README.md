# Todo App 📝

A beautiful and intuitive Todo application built with React Native and Expo. Organize your tasks with a clean interface and powerful features XD.

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
- 🌐 **REST API Integration** - Full CRUD operations with backend synchronization
- 🔄 **Pull to Refresh** - Manual data refresh capability
- ⚡ **Optimistic Updates** - Instant UI feedback with error recovery
- 🛡️ **Error Handling** - Comprehensive error management and user feedback

## 🌐 API Integration

This app follows **industry best practices** for REST API consumption in React Native applications.

### Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐    ┌──────────────┐
│   Components    │◄──►│   Custom Hooks   │◄──►│  Service Layer  │◄──►│  API Client  │
│   (UI Logic)    │    │ (State Management│    │(Business Logic) │    │(HTTP Requests│
└─────────────────┘    └──────────────────┘    └─────────────────┘    └──────────────┘
```

### API Endpoints

The app integrates with a REST API running on `http://localhost:8080/api/tareas/`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/tareas` | Fetch all tasks |
| POST   | `/api/tareas` | Create a new task |
| PUT    | `/api/tareas/{id}` | Update a task |
| DELETE | `/api/tareas/{id}` | Delete a task |

### Expected API Response Format

```json
{
  "id": 1,
  "descripcion": "Task description",
  "realizada": false
}
```

### Key Features

#### 🏗️ **Layered Architecture**
- **API Client** (`services/apiClient.js`) - HTTP request handling
- **Service Layer** (`services/taskService.js`) - Business logic & data transformation
- **Custom Hooks** (`hooks/useTasks.js`) - State management & side effects
- **Components** - Pure UI components

#### 🛡️ **Error Handling**
- Network timeout handling (10s)
- Request cancellation with AbortController
- Error boundaries for React errors
- User-friendly error messages
- Automatic retry mechanisms
- Optimistic updates with rollback

#### ⚡ **Performance Optimizations**
- **Optimistic Updates** - Immediate UI feedback
- **Request Cancellation** - Prevents memory leaks
- **Pull-to-Refresh** - Manual data synchronization
- **useCallback** optimization - Prevents unnecessary re-renders
- **Data Caching** - Computed values memoization

#### 🔄 **State Management**
```javascript
// Custom hook provides:
const {
  tasks,           // Current tasks array
  isLoading,       // Initial loading state
  error,           // Error messages
  isRefreshing,    // Pull-to-refresh state
  completedCount,  // Computed completed tasks
  totalCount,      // Total tasks count
  addTask,         // Create new task
  toggleTask,      // Toggle completion
  deleteTask,      // Remove task
  refreshTasks,    // Manual refresh
} = useTasks();
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- **REST API Server** running on `http://localhost:8080/api/tareas/`

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

3. **Start your API server** (must be running on port 8080)
   ```bash
   # Example with your backend server
   # Make sure your API is running and accessible
   ```

4. **Start the development server**
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
4. Task will be automatically synced with the API server

### Managing Tasks
- **Complete Task**: Tap the blue checkbox next to any task
- **Delete Task**: Tap the red ✗ button on the right side
- **View Progress**: Check the completion counter in the header
- **Refresh Tasks**: Pull down on the task list to refresh from server
- **Offline Mode**: App handles network errors gracefully with user feedback

## 🏗️ Project Structure

```
ToDoApp/
├── App.js                      # Main application component
├── components/
│   ├── Task.js                 # Individual task component
│   ├── AddTaskModal.js         # Modal dialog for adding tasks
│   └── ErrorBoundary.js        # Error handling component
├── hooks/
│   └── useTasks.js             # Custom hook for task management
├── services/
│   ├── apiClient.js            # HTTP client with error handling
│   └── taskService.js          # Task API service layer
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

## 🎨 Architecture Components

### API Layer
**`services/apiClient.js`** - HTTP Client
- Request/response interceptors
- Timeout handling (10s default)
- Request cancellation with AbortController
- Consistent error handling across all requests

**`services/taskService.js`** - Business Logic
- Data transformation between API and app formats
- CRUD operations for tasks
- Error handling and retry logic

### State Management
**`hooks/useTasks.js`** - Custom Hook
- Centralized task state management
- Optimistic updates for better UX
- Error handling with automatic retries
- Loading states and refresh capabilities

### UI Components
**`components/Task.js`** - Individual Task
- Displays task with completion status
- Toggle completion functionality
- Delete task capability
- Visual feedback for completed tasks

**`components/AddTaskModal.js`** - Task Creation
- Modal dialog for task creation
- Input validation and character limits
- Auto-focus and keyboard handling
- Cancel and confirmation actions

**`components/ErrorBoundary.js`** - Error Handling
- Catches React component errors
- Provides user-friendly error messages
- Retry mechanisms for failed operations

## ⚙️ API Configuration

### Environment Setup
```javascript
// services/apiClient.js
const API_BASE_URL = 'http://localhost:8080/api';

// Configurable timeout
const timeout = 10000; // 10 seconds
```

### Request/Response Flow
```
User Action → Custom Hook → Service Layer → API Client → REST API
     ↑                                                        ↓
UI Update ← State Update ← Data Transform ← Response ← HTTP Response
```

## 🔧 Customization

### API Configuration
```javascript
// Change API endpoint
const API_BASE_URL = 'https://your-api-domain.com/api';

// Adjust timeout
const timeout = 15000; // 15 seconds

// Add authentication headers
headers: {
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
}
```

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
- **Data persistence** (already implemented via API)
- **Real-time synchronization** (WebSocket support)
- **Offline mode** with sync when back online
- **Push notifications** for task reminders

### Advanced API Features
```javascript
// Add request interceptors
apiClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

// Add response interceptors  
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle authentication errors
      logout();
    }
    return Promise.reject(error);
  }
);
```

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

Made with ❤️ using React Native and Expo for educational purposes - Analistas 2024