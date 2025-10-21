# 🚀 React.js — Learning Notes & Overview

## 📘 Introduction

**React.js** is a small yet powerful **JavaScript UI library** developed and maintained by **Facebook (Meta)**.
Released in **2013**, it enables developers to build **self-contained, reusable UI components** for creating fast and interactive **Single Page Applications (SPAs)**.

React is **open-source**, **cross-platform**, and follows a **component-based architecture** that allows developers to divide the UI into smaller, manageable parts.

---

## ⚙️ Key Features

* **Component-Based Architecture** – Build modular, reusable components.
* **JSX (JavaScript XML)** – Write HTML-like syntax directly inside JavaScript.
* **Virtual DOM** – A lightweight in-memory DOM that enables faster rendering and performance optimization.
* **Declarative UI** – Makes code more predictable and easier to debug.
* **Cross-Platform Support** – Used in web, mobile (React Native), and VR applications.

---

## 🧩 Project Setup

1. Open terminal and run:

   ```bash
   npx create-react-app myapp
   ```
2. Navigate into the folder:

   ```bash
   cd myapp
   ```
3. Start the development server:

   ```bash
   npm start
   ```

---

## 🗂 Folder Structure

```
myapp/
│
├── node_modules/     # Dependencies and modules
├── public/           # Static assets (index.html, images, icons)
│   └── index.html    # Main HTML file containing <div id="root"></div>
│
├── src/              # Main source code (components, services, assets)
│   ├── App.js        # Root component
│   └── index.js      # Entry point file (renders App to root div)
│
└── package.json      # Project configuration and dependencies
```

---

## ⚛️ Components

Components are the **building blocks** of a React application.
They improve code reusability, readability, and maintainability.

### Types of Components

* **Class Components** – Use ES6 classes, lifecycle methods, and `this.state`.
* **Functional Components** – Simpler syntax using React **Hooks** (preferred since React 16.8).

---

## 🔁 Props and State

* **Props:**

  * Used to pass data **from parent to child** components.
  * **Read-only** and cannot be modified by the child component.

* **State:**

  * Mutable data managed **within a component**.
  * Controls dynamic behavior of the UI.
  * Updated using setter methods like `setState` or `useState`.

---

## 🔄 Component Lifecycle

Each component in React goes through the following lifecycle phases:

1. **Mounting:** `componentDidMount()` – Called after the component is inserted into the DOM.
2. **Updating:** `componentDidUpdate()` – Invoked after changes to state or props.
3. **Unmounting:** `componentWillUnmount()` – Called before removing a component from the DOM.

---

## ⚙️ React Hooks (v16.8+)

Hooks allow using state and lifecycle features in **functional components**.

| Hook             | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `useState`       | Manage component state.                                      |
| `useEffect`      | Handle side effects like fetching data or DOM updates.       |
| `useRef`         | Create references to DOM elements without re-rendering.      |
| `useMemo`        | Memoize expensive calculations for performance.              |
| `useCallback`    | Prevent unnecessary re-renders by memoizing functions.       |
| `useReducer`     | Manage complex state logic (alternative to Redux).           |
| `useContext`     | Share data globally without prop drilling.                   |
| **Custom Hooks** | Create reusable logic (e.g., `useFetch`, `useLocalStorage`). |

---

## 🧠 Advanced Concepts

* **HOCs (Higher-Order Components):** Functions that enhance other components.
* **Context API:** Simplifies global state management.
* **React Router:** Enables client-side routing with `<BrowserRouter>`, `<Route>`, and `<Link>`.
* **Redux / Zustand / Recoil:** For large-scale state management.
* **Error Boundaries:** Catch and handle runtime errors gracefully.
* **Lazy Loading:** Load components dynamically using `React.lazy` and `<Suspense>`.
* **Axios:** For API calls – install via `npm i axios`.
* **Bootstrap Integration:**

  ```js
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle";
  ```

---

## ⚡ Advantages

* High performance with **Virtual DOM**.
* **Reusable** and **scalable** components.
* **Declarative** and easy-to-read code.
* **Strong community** and extensive ecosystem.

---

## ⚠️ Disadvantages

* Steeper learning curve for beginners.
* JSX syntax may feel confusing initially.
* Complex state management for very large applications.

---

## 🧩 ES6 Features Used in React

* `let` and `const` for variable declarations.
* **Arrow functions** for cleaner syntax.
* **Destructuring** for props and state.
* **Classes** for component definitions.

---

## 🧱 State Management Approaches

1. **Local State** – Managed within a single component.
2. **Inter-Module State** – Shared between parent and child components.
3. **Global State** – Managed across the entire app using Context API or Redux.

---

## 🧰 Tools & Libraries

* **React DOM:** Enables interaction with the browser DOM.
* **Axios:** For handling API requests.
* **Bootstrap / Material UI:** For responsive UI design.
* **Jest / React Testing Library:** For testing React components.

---

## 📖 Summary

React.js simplifies UI development by combining **component-based architecture**, **virtual DOM**, and **declarative programming**.
It’s fast, modular, and scalable — perfect for building interactive web applications.
useReducer also re-renders a component when the state changes just like useState
Custom Hook
Custom Hooks are named with "use" as prefix. For example, a custom hook could be named useLocalStorage or useAuthentication. In our case, the custom hook will be named useBoolean.
High Order Components
A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
HOC is pattern function except components return enhance components

---

## 👨‍💻 Author

**kRameshr** — Frontend Developer | MERN Stack Enthusiast

---

## 🏷️ Tags

`#ReactJS` `#FrontendDevelopment` `#MERNStack` `#JavaScript` `#WebDevelopment`




