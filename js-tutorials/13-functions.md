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


```javascript
//////////////////////
//Function Expression
//////////////////////

//It simply is assigning that function inside a variable and then calling the variable.

let fn = function (){
  console.log(`I am F... N...!!!`);
}
fn();

//You can also name your function, this will make it easier for you in debugging.

let func = function funkyFunction(){
  console.log(`yaaaaay I'm kinda funky right now bruh`);
}
//But, you can't call your function by its name. You'll need to use the variable,
//or in other words, your expression.

func();



//////////////////////////////////
//Passing Informtion to Functions
//////////////////////////////////

    showMessage(`Hey, I'm a passed information`);
    showMessages(`Somatra rocks!`, `Somatra sucks :( `);

//Instead of making the function like func()
//we can use parameters and then pass whatever we need to pass when we call
// the function. Just like in funca()

let funca = function funkaFunction(message){
  console.log(message);
}
funca(`WOAH! I feel like a funca right now`);


//Note that you need to pass information for all the parameters or you'll get
//undefined for the parameter you didn't fill.

let myFunction = function (message, firstName){
  console.log(message,firstName);
}

myFunction(`Salute `);


////////////////////////
//Function Return Values
////////////////////////

//Without using return, and since the variables are scoped inside the function,
//we can't get the result of the function.


function getSecretCode(value){

  code = value * 42;
    return code;
}
let secretCode = getSecretCode(prompt("insert your number"
,"Number goes here fella"));

console.log(secretCode);


////////////////
//Function scope
////////////////

//Functions have complete access to what's outside their scope,but on the contrary,
//What's outside the scope can't acess what's inside unless returned.
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




////////////////////////////////
//Using Function to Modify Webpages
////////////////////////////////


//You can call your functions from other files and use them to deliver your 
//desired changes to the webpage. Check utils.js for each function.

  changePercentOff(30);
  showMessage(`Little high little hoe`); 


```