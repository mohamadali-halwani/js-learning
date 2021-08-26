# Constants

### Constants are a special kind of data storage that its value cannot be altered during normal execution.
### You must always initialize constants when declaring them

```javascript
const price = 40;
console.log("Your price is: " + price);
```


### If you try to change the value of the constant later in the code, you'll get an error

```javascript

const price = 40;
price = 50;
console.log(price);

```

`Uncaught TypeError: invalid assignment to const 'price'`

### So make sure that you only initialize the constant once.