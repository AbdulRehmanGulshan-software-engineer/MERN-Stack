# 📘 CSS Modules in React – Notes & Concepts

## 🧠 What are CSS Modules?

CSS Modules are a way to write CSS in React where:

> Each class name is scoped locally to the component (no global conflicts)

---

## 📦 How it works

### CSS file:

```css
/* Button.module.css */
.btn {
  color: white;
  background: blue;
}

.active {
  background: green;
}
```

---

### Import in React:

```js
import styles from "./Button.module.css";
```

Now CSS becomes an object:

```js
styles.btn     // "btn_hash123"
styles.active  // "active_hash456"
```

👉 React automatically generates unique class names.

---

## ⚡ Why CSS Modules?

* ❌ No global class conflicts
* ✅ Scoped styles per component
* ✅ Better maintainability
* ✅ Works well in large apps

---

# 🧠 ClassName Handling Techniques

## 1. Basic usage

```jsx
<button className={styles.btn}>
```

---

## 2. Multiple classes using array + join

```jsx
<button className={[styles.btn, styles.active].join(" ")}>
```

### 🔥 `.join(" ")` means:

> Convert array → string separated by spaces

---

## 3. Conditional classes using `&&`

```jsx
className={[
  styles.btn,
  isActive && styles.active
]}
```

---

## 4. Removing falsy values with `.filter(Boolean)`

```jsx
className={[
  styles.btn,
  isActive && styles.active
].filter(Boolean).join(" ")}
```

### 🧠 `.filter(Boolean)` removes:

* false
* null
* undefined
* ""

---

## 🔥 Final manual pattern

```jsx
className={[
  styles.btn,
  isActive && styles.active
].filter(Boolean).join(" ")}
```

---

# 🚀 clsx Library (Recommended)

## 📦 What is clsx?

`clsx` is a **JavaScript library** used to simplify class name handling.

---

## 📥 Install

```bash
npm install clsx
```

---

## ⚡ Usage

```jsx
import clsx from "clsx";

<button className={clsx(styles.btn, isActive && styles.active)}>
```

---

## 🔥 Benefits of clsx

* Cleaner code
* No `.join()` needed
* No `.filter()` needed
* Handles conditional classes automatically

---

## 📊 Comparison

### Without clsx:

```jsx
className={[
  styles.btn,
  isActive && styles.active
].filter(Boolean).join(" ")}
```

---

### With clsx:

```jsx
className={clsx(styles.btn, isActive && styles.active)}
```

---

# 🧠 Key Concepts Summary

## CSS Modules:

* Scoped CSS
* Imported as JS object
* Prevents class conflicts

---

## JavaScript helpers used:

### `.join(" ")`

> Converts array → string

### `.filter(Boolean)`

> Removes falsy values

---

## clsx:

> Utility library for cleaner conditional class names

---

# 🎯 Final Mental Model

```text
CSS Modules → scoped class names
join()      → combine classes
filter()    → remove invalid classes
clsx        → smart cleaner version of both
```

---