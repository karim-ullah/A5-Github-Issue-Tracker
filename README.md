1️⃣ What is the difference between var, let, and const?

    Ans:  var, let and const are used to declare variable in javaScript. But they have differences like in scope,hoisting and reassignment.
    
    Where var is function scoped or global scope if it is declared outside of a function, hoisted and initialized with undefined, reassign and redeclaration both are allowed. 

    On the other hand, let is block scoped (means work in a block like {}), it is also hoisted but not initialized with undefined-  it remains in temporal death zone, possible to reassign but is not allowed to redeclaration in same scope.

    In the same way const is block scope and hoisted but not initialized. It is not possible to reassign or redeclaration with const.

2️⃣ What is the spread operator (...)?

    Ans: Spread operator (...) is used to expand elements of  arrays or objects into individual elements.

3️⃣ What is the difference between map(), filter(), and forEach()?

    Ans: map() is used when we want to modify the array without changing original array. filter() is used to select elements based on a condition and return a new array. forEach() is used to loop through array.

4️⃣ What is an arrow function?

    Ans: arrow function is a shorter syntax of writing function for example const add = (a,b) => a+b;

5️⃣ What are template literals?

    Ans: template literals is a method of writing string using backticks instead of quotes. it allows to embed variables and expressions using ${}.