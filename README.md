# ToDo App

This is a simple Todo List application built with Vue.js.

### Screenshots
![list-app](https://github.com/ErsinCol/vue-list-app/blob/main/project-image.png)

### Technologies and Libraries Used

- **Vite:** The project is built using Vite, a fast and efficient build tool for Vue.js projects.

- **Vue 3 Composition API:** Vue List App leverages the Composition API, the new and powerful way to organize and reuse logic in Vue components.

- **Pinia for State Management:** Pinia is used for state management in the application, providing a simple and scalable solution for managing the app's state.

- **Axios:** The project uses Axios for making HTTP requests. Axios is a promise-based HTTP client that simplifies data fetching and manipulation.

- **JSON Server:** JSON Server is utilized as a mock API to simulate a backend server for development purposes. It provides a quick and easy way to prototype and test API calls.

- **i18n for Internationalization:** The application supports multiple languages with the help of i18n. Language files are organized in the `locales` directory.

- **BEM CSS Methodology:** The project follows the Block Element Modifier (BEM) methodology for writing clean and maintainable CSS code.

### Component Decomposition

The application is structured using a component-based architecture. Key components include:

- **AddSection.vue:** Component responsible for adding new tasks to the Todo list.

- **LanguagePicker.vue:** Component for language selection, allowing users to switch between supported languages.

- **ListSection.vue:** Displays the list of tasks.

- **ResultBar.vue:** Shows a summary of the task list, including the number of tasks.

- **TodoList.vue:** Main component managing the overall Todo list functionality.

- **TodoListItem.vue:** Represents an individual task item in the list.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ErsinCol/vue-todo-app.git
```

2. Navigate to the project directory:
```bash
cd vue-todo-app
```

3. Install dependencies:
```bash
npm install
```

### Usage
To run the project in development mode:
```bash
npm run dev
```

To build the project for production:
```bash
npm run build
```

### Scripts
- dev: This script starts the Vite development server, allowing you to develop the application locally.
- build: This script builds the application for production. The generated files will be available in the dist directory.
- preview: This script allows you to preview the built application locally before deploying it. It is useful for testing the production build.

