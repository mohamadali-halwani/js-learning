# Variables

### It's where you store info, functions, anything. They vary, and thus, variables.


### To store stuff in your variable, you'll first need to declare it, then initialize it
```javascript
let x
let y
let z
```

### Or you can define multiple variables together like this:
```javascript

let a, b, c;

```

### To initialize your variables:
```javascript

x=24, y=25, z=26;

```
### Or you can initialize them separately, your choice:
```javascript

a=1;
b=2;
c=3;

```

### Now try to check the value using the console:
```javascript

console.log(x,y,z);

```
### To initialize variables of the text type, you should use single or double quotation marks.
### You may also declare and initialize variables in one step:
```javascript

let total = 149.99,
  product = ' hiking boots',
  discounted = true;

console.log("<br/>" + "Your" + product + " has cost you " + total);

```

### In the previous example, the variable `discounted` is a special type of variable called boolean, which can only hold the value of `true` or `false`.

```javascript

let food = true, buncker1 = `full`, buncker2 = `empty`;
    if(food = true){
        console.log(`Your buncker is `+ buncker1+ ` and you're gonna live`);
    }else if(food = false) {
        console.log(`Your buncker is `+ buncker2+ ` and you're gonna starve`);
    }


```

### Booleans are useful in conditional if statements that we'll be explaining later.

### Note that variables may hold values that have different data types:

|Variable 	|Explanation 	|Example|
|-----------|---------------|-------|
|String| 	This is a sequence of text known as a string. To signify that the value is a string, enclose it in single quote marks.| 	let myVariable = 'Bob';|
|Number| 	This is a number. Numbers don't have quotes around them. 	|let myVariable = 10;|
|Boolean| 	This is a True/False value. The words true and false are special keywords that don't need quote marks.| 	let myVariable = true;|
|Array| 	This is a structure that allows you to store multiple values in a single reference. | let myVariable = [1,'Bob','Steve',10]; Refer to each member of the array like this: myVariable[0], myVariable[1], etc.|
|Object| 	This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn.| 	let myVariable = document.querySelector('h1');      All of the above examples too.|



[Previous Lesson](04-console-feedback.md)`_____________________________________________________________________________________`[Next Lesson](06-variable-tips.md)