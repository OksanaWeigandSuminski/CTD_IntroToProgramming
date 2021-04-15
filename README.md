# CTD_IntroToProgramming
**What does the JavaScript return statement do?**

***return*** exits a function and sends a value back to the spot in the program where the function was called.

**Can you have more than one return statement in a function?**

Yes. However, only one ever runs.

**Difference between Parameter and Argument**

> Unlike argument in usual mathematical usage, ***the argument*** in computer science is the actual input expression passed/supplied to a function, procedure, or routine in the invocation/call statement, whereas ***the parameter*** is the variable inside the implementation of the subroutine. For example, if one defines the add subroutine as def add(x, y): return x + y, then x, y are **parameters**, while if this is called as add(2, 3), then 2, 3 are **the arguments**. Note that variables (and expressions thereof) from the calling context can be arguments: if the subroutine is called as a = 2; b = 3; add(a, b) then the variables a, b are **the arguments**, not the values 2, 3.
"Parameter" is a variable in which the function stores information passed to it.
When you call a function you pass an "argument" which is stored in a "parameter" in the function.
"Argument" is a value that you pass to a function when you call the function.

**An example of passing an argument to a function.**
document.write("<h1>Welcome!</h1>")
alert("Hello world!")
getArea( 10, 20, 'sq ft' )
Math.floor(2.2)

> The JavaScript engine moves function declarations to the top of their scope before code execution. This behavior is called: ***hoisting***
