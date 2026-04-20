This Lecture is project based learning

JS Concept Below 👇
# 📘 Optional Chaining in JavaScript (`?.`)

---

## 🧠 What is Optional Chaining?

Optional chaining (`?.`) is a JavaScript feature that allows you to safely access deeply nested object properties **without causing errors if a value is null or undefined**.

---

## 🚀 Syntax

```js
object?.property
object?.[expression]
object?.method?.()
```

---

## ❌ Problem without optional chaining

If a property doesn’t exist, JavaScript throws an error:

```js id="a1"
const country = {};

console.log(country.capital[0]); // ❌ Error
```

👉 Error: Cannot read properties of undefined

---

## ✅ Solution with optional chaining

```js id="a2"
const country = {};

console.log(country.capital?.[0]); // undefined (no crash)
```

---

# 🔥 How it works

> “Only access the next property if the previous value is NOT null or undefined.”

---

## 📦 Example 1: Object property

```js id="a3"
const user = {};

console.log(user.name?.first);
```

👉 Output:

```
undefined
```

---

## 📦 Example 2: Nested object

```js id="a4"
const user = {
  profile: {
    name: "Rahul"
  }
};

console.log(user.profile?.name);
```

👉 Output:

```
Rahul
```

---

## 📦 Example 3: Arrays

```js id="a5"
const country = {
  capital: ["New Delhi"]
};

console.log(country.capital?.[0]);
```

👉 Output:

```
New Delhi
```

---

## 📦 Example 4: Functions

```js id="a6"
const obj = {};

obj.sayHello?.();
```

👉 No error even if function doesn't exist

---

# ⚡ Why Optional Chaining is useful

* Prevents runtime errors
* Handles missing API data safely
* Reduces need for manual checks (`if` conditions)
* Cleaner code

---

# 🧠 Real-world use case (React / APIs)

APIs often return incomplete data:

```js id="a7"
country.capital?.[0]
country.flags?.png
user?.address?.city
```

👉 Prevents app crashes when data is missing

---

# ⚠️ Important rules

* Works only for **null or undefined**
* Does NOT fix logic errors
* Stops evaluation immediately if value is missing

---

# 🚀 One-line memory

> Optional chaining (`?.`) safely accesses properties without crashing when values are missing.

---

# 🔥 Related concepts (for learning next)

* `??` (Nullish coalescing operator)
* `&&` short-circuiting
* `try/catch` error handling

---


Try to implement search filter using useState hook



----------------------------------------------

Lecture No 27 Pass Data From One Page To Another
---

# 📘 React Router `navigate()` with `state` — Documentation

## 🧭 Overview

React Router’s `navigate()` function allows you to **programmatically move between routes** and optionally pass **temporary in-memory data** using the `state` option.

This `state` is stored in the browser’s **History API entry**, not in the URL.

---

# 📌 Syntax

```js
navigate(path, options)
```

### Example:

```js
navigate("/country/pakistan", {
  state: { from: "home" }
});
```

---

# 🧠 What it does

When executed, this call:

1. Changes the route to `/country/pakistan`
2. Stores additional data (`state`) in the browser history entry
3. Makes that data available in the next page via `useLocation()`

---

# 📦 Parameters

## 1. `path` (string)

The destination route.

```js
"/country/pakistan"
```

---

## 2. `options.state` (any object)

Optional data passed to the next route.

```js
{
  from: "home"
}
```

This is:

* NOT visible in the URL
* NOT persisted after refresh
* Stored only in browser history entry

---

# 🔄 How to read the state

In the destination component:

```js
import { useLocation } from "react-router-dom";

const { state } = useLocation();

console.log(state.from);
```

---

# 🧭 Internal working (simplified)

React Router uses the **History API** internally:

```js
history.pushState(
  { from: "home" }, 
  "", 
  "/country/pakistan"
);
```

So the state is attached to the browser’s history entry.

---

# ⚡ Example Flow

### Page A (Home)

```js
navigate("/country/pakistan", {
  state: { from: "home" }
});
```

---

### Browser internally stores:

```js
{
  pathname: "/country/pakistan",
  state: { from: "home" }
}
```

---

### Page B (Country)

```js
const { state } = useLocation();

console.log(state.from); // "home"
```

---

# ❗ Important Characteristics

| Feature                    | Behavior |
| -------------------------- | -------- |
| Visible in URL             | ❌ No     |
| Survives refresh           | ❌ No     |
| Persists on reload         | ❌ No     |
| Shareable link             | ❌ No     |
| Good for sensitive UI data | ✔ Yes    |

---

# ⚠️ Limitations

### 1. Lost on refresh

```js
state === null
```

### 2. Not persistent storage

Use Redux, Context, or localStorage instead.

### 3. Not SEO-friendly

Because it's not in the URL.

---

# 🆚 Comparison with other methods

| Method           | Use case                  | Example            |
| ---------------- | ------------------------- | ------------------ |
| `params`         | required route data       | `/country/:name`   |
| `query params`   | filters/search            | `?sort=asc`        |
| `location.state` | temporary navigation data | `{ from: "home" }` |
| global state     | shared app data           | Redux/Zustand      |

---

# 💡 When to use `state`

Use it when:

* You don’t want to expose data in URL
* Data is temporary
* You are passing UI context (not core data)

### Example use cases:

* “came from homepage”
* “open modal with preselected item”
* “scroll position info”

---

# 🚀 Example Real Use Case

### Navigate:

```js
navigate("/profile/123", {
  state: { from: "dashboard" }
});
```

---

### Read:

```js
const { state } = useLocation();

if (state?.from === "dashboard") {
  console.log("User came from dashboard");
}
```

---

# 🧠 Key takeaway

> `navigate(path, { state })` is a way to pass **temporary hidden data between routes using the browser History API**

---

