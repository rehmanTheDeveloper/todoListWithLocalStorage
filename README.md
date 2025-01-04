# TodoList Application Documentation

## Overview
The TodoList application is a React Native-based mobile application that allows users to efficiently manage their tasks. It provides features such as adding, editing, deleting, and marking tasks as completed. The UI is minimalistic, focusing on functionality and logic, ensuring a seamless user experience.

---

## Features
1. **Task Management:**
   - Add new tasks.
   - Edit existing tasks.
   - Delete tasks.
   - Mark tasks as completed.
2. **Data Persistence:**
   - Tasks are stored locally using AsyncStorage to ensure data is preserved between sessions.
3. **Categorization:**
   - Fetch and display priority tasks.
   - View all tasks or specific categories.

---

## Packages Used
1. **@react-native-async-storage/async-storage:**
   - Used for persistent local storage of tasks.
2. **react-native-wind:**
   - Utility-first CSS styling for React Native components.
3. **react-native-ui-datepicker:**
   - Provides an easy-to-use date picker for setting task deadlines.
4. **react-native-heroicons:**
   - Provides icons for better visual representation.
5. **@react-navigation/stack & @react-navigation/native:**
   - Implements stack-based navigation between screens.
6. **react-native-screens:**
   - Optimizes performance by using native screens.
7. **react-native-safe-area-context:**
   - Ensures the app layout respects device safe areas.
8. **react-native-rename:**
   - Helps in renaming the app during development.

---

## Pages
1. **Onboarding:**
   - Introduces users to the app’s features and functionality.
2. **Home:**
   - Displays an overview of tasks, categorized into priority, completed, and pending tasks.
3. **Create Task:**
   - Provides a form to add a new task, including fields for title, description, deadline, and priority.
4. **View Tasks:**
   - Displays a detailed list of tasks using a FlatList component.
5. **Edit Task:**
   - Allows users to modify task details.

---

## Fonts
- **Open Sans:** Used for all textual content, ensuring readability and consistency.

---

## Helpers
### AsyncHelpers
1. **addTask:** Adds a new task to AsyncStorage.
2. **editTask:** Updates an existing task in AsyncStorage.
3. **deleteTask:** Removes a task from AsyncStorage.
4. **fetchTask:** Retrieves a specific task based on its ID.
5. **fetchAllTasks:** Fetches all tasks stored in AsyncStorage.
6. **fetchPriorityTasks:** Fetches tasks marked with high priority.
7. **toggleStatusTask:** Toggles the completion status of a task.

---

## Development Details
### Core Points
1. **Task Operations:**
   - Users can perform CRUD (Create, Read, Update, Delete) operations on tasks.
2. **Components Used:**
   - **FlatList:** Displays lists of tasks efficiently.
   - **TextInput:** Provides input fields for adding and editing tasks.
   - **TouchableOpacity:** Handles button-like interactions.
3. **State Management:**
   - **useState:** Manages component-level states like task data.
   - **useContext:** Shares state across different components efficiently.

### Navigation
- Navigation between screens is managed using React Navigation with a stack-based approach for a clean transition.

---

## Installation and Setup
1. Clone the repository.
2. Run `npm install` to install all dependencies.
3. Start the Metro bundler using `npm start`.
4. Run the application:
   - For Android: `npm run android`
   - For iOS: `npm run ios`

---

## Future Enhancements
1. **Cloud Sync:** Integrate Firebase or another backend service for cloud-based task storage.
2. **User Authentication:** Add user accounts to allow personalized task lists.
3. **Notifications:** Implement reminders for upcoming deadlines.
4. **Advanced Filtering:** Enable filtering by tags, priorities, or completion status.

---

## Conclusion
The TodoList application offers a robust and user-friendly solution for task management. With its minimalistic design and powerful functionality, it is a handy tool for users seeking to organize their tasks efficiently.

