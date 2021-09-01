# Writing on the webpage

### Since web development is all about making webpages, it's sensible that you'd want to display output on the page, or what's called : the document, since a webpage is an HTML document.

```javascript
let summer = "It's really hot in here \" OMG \" ";
// You can use escape characters in javascript 
//to insert another quotation in a text
  document.write(summer);
  document.write("<br>");
let name = "Mando";
let age = 28;
document.write(name + " " + "is my name!!!");
```


### You may also use `document.write()` to write variables only

```javascript
let tuna = "I am a fish";
let sheep = "I'm a mammal... I guess...";
let raven = " kaaaaak ";
document.write(tuna);
document.write(sheep);
document.write(raven);
```

### You can use addition to write multiple variables together too

```javascript
let tuna = "I am a fish ";
let sheep = "I'm a mammal... I guess... ";
let raven = "kaaaaak ";
document.write(tuna + sheep + raven);
```

### Another use of `document.write()` is to write constants too. Like your website's name for example
```javascript
const website_name= "TheDragonSlayers.org";
document.write(website_name);
```

### We'll use `document.write()` later to modify webpages in a better, more interactive, and more efficient way <3


[Previous Lesson<](07-constants.md)`___________________________________________________________________________________`[>Next Lesson](09-prompt-box.md)
