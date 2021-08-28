# Math Operations


### Math operators follow the mathematic rules of precedence which means parenthesis first(grouping) then expotentiation, multiplication & division, incrementing and decrementing..etc

```javascript
let shop =(5* (66-1) + (5/5) + (5*6) - 2**4);
  console.log(shop); //Must return 340
```
### Variables with mathematical values accept incrementing:

```javascript
let chop = 788;
chop++;
  document.write(chop); //Must print 789
```
### and decrementing

```javascript
let chop = 788;
chop--;
  document.write(chop); //Must print 787
```


### Here are a set of examples of the many things you can do with math operators in JS
```javascript

    let hanzo = 25, memer=20, doner=20, sandman=17, lobster=2;
    hanzo += 25;          //or hanzo = hanzo + 25; //Must return 50
    memer /= 4;            //or memer = memer / 4; //Must return 5
    doner *= 5;            //or doner = doner * 5; //Must return 100
    sandman %= 4;            //or sandman = sandman % 4; //Must return 1 since the remainder of 17/4 is 1
    lobster **=4;           //or lobster = lobster ** 4; //Must return 16 since the exponent of 2 to the power of 4 is 16
    document.write("hanzo is: ", hanzo);
    document.write("<br>");
    document.write("memer is: ", memer);
    document.write("<br>");
    document.write("doner is: ", doner);
    document.write("<br>");
    document.write("sandman is: ", sandman);
    document.write("<br>");
    document.write("lobster is: ", lobster);
```

### And finally, Here is a table summarizing the math operators in Javascript
|Operator | Description |
|---------|-------------|
|+        |Addition|
|-        |Subtraction|
|* 	      |Multiplication|
|** 	  |Exponentiation [ES2016](https://flaviocopes.com/es2016/)|
|/ 	      |Division|
|% 	      |Modulus (Division Remainder)|
|++ 	  |Increment|
|-- 	  |Decrement|