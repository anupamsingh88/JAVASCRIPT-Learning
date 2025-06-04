

* **Global scope**
* **Function scope**
* **Block scope (let, const)**
* **Closures**
* **Shadowing**
* **Lexical scope**

---

## 🧠 Example Code:

```javascript
let globalVar = "🌍 Global";

function outerFunction() {
    let outerVar = "🧭 Outer";

    function innerFunction() {
        let innerVar = "🔍 Inner";
        console.log("Inside innerFunction:");
        console.log("Accessing globalVar:", globalVar);   // OK
        console.log("Accessing outerVar:", outerVar);     // OK
        console.log("Accessing innerVar:", innerVar);     // OK

        if (true) {
            let blockScoped = "🧱 Block Scoped";
            var functionScoped = "📦 Function Scoped";
            console.log("Inside block:");
            console.log("blockScoped:", blockScoped);     // OK
            console.log("functionScoped:", functionScoped); // OK
        }

        // console.log(blockScoped); // ❌ Error: blockScoped is not defined
        console.log("functionScoped after block:", functionScoped); // ✅ Still works
    }

    innerFunction();

    // Shadowing example:
    let globalVar = "❌ Shadowed Global";  // Shadows the outer 'globalVar'
    console.log("Shadowed globalVar inside outerFunction:", globalVar);
}

outerFunction();
console.log("Accessing globalVar outside:", globalVar);
```

---

## 📋 Output:

```
Inside innerFunction:
Accessing globalVar: 🌍 Global
Accessing outerVar: 🧭 Outer
Accessing innerVar: 🔍 Inner
Inside block:
blockScoped: 🧱 Block Scoped
functionScoped: 📦 Function Scoped
functionScoped after block: 📦 Function Scoped
Shadowed globalVar inside outerFunction: ❌ Shadowed Global
Accessing globalVar outside: 🌍 Global
```

---

## ✅ **Detailed Explanation (Hinglish + English)**

### 1. **Global Scope**

```js
let globalVar = "🌍 Global";
```

🟢 Declared outside any function — accessible anywhere unless shadowed.

---

### 2. **Function Scope**

```js
function outerFunction() {
    let outerVar = "🧭 Outer";
}
```

🟢 `outerVar` is accessible **only inside `outerFunction()`**.

---

### 3. **Nested Function (Lexical Scope + Closure)**

```js
function innerFunction() {
    let innerVar = "🔍 Inner";
    console.log(outerVar); // ✅ Can access outerVar due to closure
}
```

🟢 `innerFunction()` can access variables from its **outer lexical scope** — that's **closure**.

---

### 4. **Block Scope (let/const vs var)**

```js
if (true) {
    let blockScoped = "🧱 Block Scoped";
    var functionScoped = "📦 Function Scoped";
}
```

🔹 `let` and `const` are block-scoped: ❌ can't be accessed outside `{}`
🔹 `var` is function-scoped: ✅ accessible outside block but inside the function

---

### 5. **Shadowing**

```js
let globalVar = "❌ Shadowed Global";
```

🔹 This variable **shadows** the `globalVar` from the global scope **only inside** `outerFunction`.

So:

* Inside `outerFunction`, it prints the shadowed one
* Outside, the original global variable is still intact

---

## 📌 Summary Table:

| Variable         | Scope Type     | Where Accessible                |
| ---------------- | -------------- | ------------------------------- |
| `globalVar`      | Global         | Everywhere unless shadowed      |
| `outerVar`       | Function       | Only inside `outerFunction`     |
| `innerVar`       | Function       | Only inside `innerFunction`     |
| `blockScoped`    | Block (let)    | Only inside the `if` block      |
| `functionScoped` | Function (var) | Anywhere inside `innerFunction` |

---


Here’s a **complete explanation of Scopes in JavaScript** with simple examples, real-world relevance, and differences between types of scopes. This is beginner-friendly but also covers essential interview-level concepts.

---

# ✅ JavaScript Scope Explained (With Examples)

**Scope** in JavaScript determines **where variables can be accessed or referenced** in your code.

---

## 🔹 Types of Scope in JavaScript

1. **Global Scope**
2. **Local Scope**

   * **Function Scope**
   * **Block Scope (ES6)**
3. **Lexical (Static) Scope**

---

### ✅ 1. **Global Scope**

Any variable declared **outside of all functions or blocks** has a global scope and is accessible **everywhere**.

```js
let name = "Anupam";

function greet() {
  console.log("Hello " + name);
}

greet(); // Hello Anupam
```

> 🔹 `name` is globally accessible inside the function.

---

### ✅ 2. **Function Scope**

Variables declared **inside a function** are only available **within that function**.

```js
function sayHello() {
  let message = "Hello World";
  console.log(message);
}

sayHello(); // Hello World
console.log(message); // ❌ Error: message is not defined
```

> 🧠 Function scope prevents variables from leaking outside.

---

### ✅ 3. **Block Scope (with `let` and `const`)**

Introduced in **ES6**, variables declared using `let` or `const` inside `{}` are **block-scoped** — meaning they only exist within that block.

```js
{
  let x = 10;
  const y = 20;
  var z = 30;
}

console.log(z); // ✅ 30 (var is function/global scoped)
console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError
```

> 🧠 Prefer `let` or `const` over `var` to avoid scope-related bugs.

---

### ✅ 4. **Lexical Scope (Static Scope)**

Lexical scope means **inner functions have access to variables from their outer functions**, based on where they are written, **not where they are called**.

```js
function outer() {
  let outerVar = "I’m outside!";

  function inner() {
    console.log(outerVar); // Accesses variable from outer()
  }

  inner();
}

outer(); // Output: I’m outside!
```

> 🔹 This is the basis for **closures** in JavaScript.

---

## 🔁 Real-World Use Case: Preventing Global Pollution

```js
// Without function/block scope
var counter = 0;

function increment() {
  var counter = 5; // This is local to the function
  counter++;
  return counter;
}

console.log(increment()); // 6
console.log(counter);     // 0
```

✅ Helps avoid naming conflicts in large applications.

---

## ⚠️ Scope with `var`, `let`, `const`

| Feature       | `var`                    | `let` / `const`                       |
| ------------- | ------------------------ | ------------------------------------- |
| Scope         | Function                 | Block                                 |
| Hoisting      | Yes (value: `undefined`) | Yes, but no access before declaration |
| Redeclaration | Allowed                  | Not allowed                           |

---

### Example: Hoisting Confusion

```js
function test() {
  console.log(a); // undefined (hoisted)
  var a = 5;

  // console.log(b); // ❌ ReferenceError
  // let b = 10;
}

test();
```

---

## ✅ Best Practices

* Use `let` and `const` for safer scoping
* Minimize use of global variables
* Understand scope to debug better and avoid accidental overwrites
* Learn closures — they're deeply tied to scope!

---


