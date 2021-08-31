# Funtions

### Functions in Javascript are chunks of code made to do a particular task whenever they are called.
### It is useful to contain the code inside a function, as it helps with reusability. This way, you don't have to re-write the same code every time you wanna use it.
//Functin scope vs Global scope
### To declare a function:

```javascript

function logMessage(){
  console.log(`Here's a message`);
}
```
### To invoke(call) the function you just declared, you type the name of the function with opening and closing parenthesis:

```javascript
logMessage();
```

## 1.Function Expression
### It simply is assigning that function inside a variable and then calling the variable.
```javascript
let fn = function (){
  console.log(`I am F... N...!!!`);
}
fn();
```
### You can also name your function, this will make it easier for you in debugging.

```javascript
let func = function funkyFunction(){
  console.log(`yaaaaay I'm kinda funky right now bruh`);
}
func();
```
### But... you can't call your function by its name. You'll need to use the variable, or in other words, your expression.


## 2.Passing Informtion to Functions

### We already learned about alternating an HTML element by its ID, we can use that to write some functions
### We give each function an argument(messeji) (message, anotherMessage) (percentage), to let the computer know that we're going to pass our own information into the function on call.

```javascript
function showMessage(messeji){
    document.getElementById('messeji').textContent= messeji;
}
function showMessages(message, anotherMessage){

    document.getElementById('message').textContent= message;
    document.getElementById('anotherMessage').textContent= anotherMessage;
}

function changePercentOff(percentage){
    document.getElementById(`percent-off`).textContent= percentage + "% OFF !!!";
}

  showMessage(`Hey, I'm a passed information`);
  showMessages(`Somatra rocks!`, `Somatra sucks :( `);
  changePercentOff(50);
```

### Note that you need to pass information for all the parameters or you'll get undefined for the parameter you didn't fill.

```javascript
let myFunction = function (message, firstName){
  console.log(message,firstName);
}
myFunction(`Salute `);
```

## 3.Function scope

### Functions have complete access to what's outside their scope,but on the contrary, What's outside the scope can't acess what's inside unless returned.
### You'll see in the following example how each value of the variable key is different in each scope. outside the funciton it's 42, inside the function it's the product of the number you specify in this line`let secretNum = getSecretNum(3);` which means it will be 36 , and inside the nested function it's 12 just like we specified. 
```javascript

let key = 42;

function getSecretNum(value){

  //Nesting a function inside getSecretNum
  let keyGenerator = function(){
    let key = 12;
    console.log(`in keyGenerator key's value is`, key); // 12
    return key;
  }


  let num = value * keyGenerator();
  //When a function finishes executing, all its local variables disappear
  console.log(`in getSecretNum key's value is`, key); // 42
  return num;
}
let secretNum = getSecretNum(3);
console.log(secretNum);

```

## 4.Function Return Values

### Without using return, and since the variables are scoped inside the function, we can't get the result of the function.

```javascript
function getSecretCode(value){

  code = value * 42;
    return code;
}
let secretCode = getSecretCode(prompt("insert your number"
,"Number goes here fella"));

console.log(secretCode);
```
### You can call your functions from other files and use them to deliver your desired changes to the webpage. Check [utils.js](../utils.js) for each function.

```javascript
  changePercentOff(30);
  showMessage(`Little high little hoe`); 
```


[Previous Lesson<](./js-tutorials/12-string-manipulation.md)`___________________________________________________________________________________`[>Next Lesson](./js-tutorials/13-functions.md)