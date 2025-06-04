# **Function vs. Method in JavaScript**

### **Simple Definition**
✅ **Function**:  
A function is **a block of reusable code** that performs a specific task. It can exist **independently** and be called from anywhere.  

✅ **Method**:  
A method is **a function that belongs to an object**. When a function is defined inside an object, we call it a **method**.  

---

### **Key Difference**
| Feature | Function | Method |
|---------|---------|--------|
| **Definition** | A standalone reusable block of code | A function inside an object |
| **Belongs To** | Does **not** belong to any object | Belongs to an **object** |
| **Called Using** | Called directly by its name | Called using `object.methodName()` |
| **Example** | `greet();` | `person.sayHello();` |

---

### **Example: Function vs. Method**
```js
// ✅ Function (Independent)
function greet() {
    return "Hello!";
}

console.log(greet()); // Output: Hello!

// ✅ Method (Inside Object)
const person = {
    name: "Amit",
    sayHello: function() {
        return "Hello, I am " + this.name;
    }
};

console.log(person.sayHello()); // Output: Hello, I am Amit
```

🔹 **Explanation**:  
- `greet()` is an **independent function**.  
- `sayHello()` is a **method** because it is inside the `person` object.  

---

### **Real-Life Example**
Imagine a **remote control** 🎛️:  
- A **function** is like a single **detached button** (you press it directly).  
- A **method** is like a button **on a remote** (you need the remote to use it).  

---

### **Another Example: Built-in Methods vs. Functions**
JavaScript has **built-in functions** and **methods**.

✅ **Function Example (`parseInt()`)**  
```js
let num = "42";
console.log(parseInt(num)); // Output: 42
```

✅ **Method Example (`toUpperCase()`)**  
```js
let text = "hello";
console.log(text.toUpperCase()); // Output: HELLO
```

🔹 `parseInt()` is a **function** because it works independently.  
🔹 `toUpperCase()` is a **method** because it belongs to the **string object**.  

---

## Is a Method Just a Predefined Function?
Not exactly! A **method** is a function that belongs to an **object**. It can be:

1️⃣ **Predefined (Built-in) Method** – Like `Math.pow()`, `toUpperCase()`, etc.  
2️⃣ **User-Defined Method** – Functions inside objects that we define ourselves.  

---

### **Example 1: Predefined (Built-in) Method**
Yes, **`Math.pow()` is a method** because it belongs to the `Math` object.
```js
console.log(Math.pow(2, 3)); // Output: 8
```
🔹 Here, `pow()` is not a standalone function; it's a **method of the `Math` object**.

---

### **Example 2: User-Defined Method**
We can also **create our own methods** inside objects.
```js
const calculator = {
    add: function(a, b) {
        return a + b;
    }
};

console.log(calculator.add(5, 3)); // Output: 8
```
🔹 `add()` is **not predefined** but is still a **method** because it belongs to the `calculator` object.

---

### **What About Standalone Functions?**
A function that is **not inside an object** is just a **function**, not a method.
```js
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8
```
🔹 `add()` is just a **function**, not a **method**, because it doesn't belong to an object.

---

### **Conclusion**
❌ **A method is not necessarily a predefined function.**  
✅ A **method is any function inside an object** (whether built-in or user-defined).  
✅ `Math.pow()`, `toUpperCase()`, etc., are **predefined methods**.  
✅ `calculator.add()`, `person.sayHello()` are **user-defined methods**.  

So, **methods can be predefined, but they can also be created by users!** 🚀😊
