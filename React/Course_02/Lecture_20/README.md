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
