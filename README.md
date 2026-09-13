# Dev Stack Builder

Dev Stack Builder is a technology stack builder website where developers can explore different technologies and create their own development stack.

## Live Website



## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUi
- Vite
- React Toastify
- JSON

## Features

### 1. Explore Technologies
Users can explore different technologies with their category, difficulty level, rating, badge, and description.

### 2. Build Your Stack
Users can add technologies to their own stack and see the selected technologies in the sidebar.

### 3. Manage Your Stack
Users can remove individual technologies or remove all technologies from their stack. Duplicate technologies cannot be added.

---

# React Questions & Answers


## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It is used in React to easily create and describe the UI of a component.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and manage data inside a component.

Props are received from outside, while state can be changed by the component.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and update state in a component.

In this project, I used `useState` to store the selected technologies in the stack.

```tsx
const [stack, setStack] = useState<Technology[]>([]);

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component.

In this project, I used useEffect to handle the loading process when the technology data is loaded.

It helps run the loading logic after the component renders.

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 800);

  return () => clearTimeout(timer);
}, []);

## 5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.

It helps React understand which item has been added, removed, or changed.

Example:{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, I used it to show an empty message when the stack has no technology.

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}

If the stack is empty, it shows the empty message. Otherwise, it shows the selected technologies.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using props.

A child can send information back to the parent by calling a function that the parent passes as a prop.

For example:

<TechnologyCard
  technology={technology}
  onAdd={handleAddToStack}
/>

Here, technology sends data to the child, and onAdd lets the child call the parent's function when the user clicks Add to Stack.