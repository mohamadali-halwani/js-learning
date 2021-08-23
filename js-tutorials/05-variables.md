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

### Booleans are useful in conditional if statements, and we'll explain them later.