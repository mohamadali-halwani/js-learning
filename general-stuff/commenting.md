# Commenting

### Adding comments to your code helps you other maintainers, and other people reading your code to understand what you really mean with variables, functions, and objects.

### Add as much comments as needed, but within reason of course <3

### To write a comment on one line, you simply use double forward slashes //


```javascript 
//Some sort of code to test 
function showMessage(message){
    document.getElementById('message').textContent= message;
}

//Some sort of blabbery to test
function showMessage(message){
    document.getElementById('message').textContent= message;
}

//Some sort of stuff to test
function showMessage(message){
    document.getElementById('message').textContent= message;
}

//Some sort of talk to test
function showMessage(message){
    document.getElementById('message').textContent= message;
}
//Some sort of text to test
```
### To make a comment on multiple lines, you open with /* and close with */

```
/* As you can see, this chunk of text is marked as a comment thanks to the opening and closing 
symbols in javascript. You can keep writing until you break the first line and the text will 
still be considered a comment, pretty cool huh? */

```