# Adding a script within an HTML file

### Sometimes you want to add a simple script directly in the HTML page. For that, you can use the HTML tag `<script>`

```html
<script>

    //Hi, this is a javascript comment
    //You'll learn the next line in the next lesson
    console.log("Hello World!");
</script>

```

### It's not the best practice to put the script in the html webpage, so instead, we make a file with a .js extension to contain our code
### It is useful to know how to navigate directories, aka folders, in your code


```html

<script src="./script.js"></script>

```
### Here I used the one dot to say that the script is in the same directory as the html file
### Otherwise, I will have to provide the complete address of my script file. For example: `/home/user/projects/website/code/script.js` which can be really tideous.

### You can use the dot and the slash ./ to point to the current directory, two dots and a slash for the previous directory ../ and the forward slash alone for the next directory / 


[Previous Lesson](./js-tutorials/02-ignore-script.md)`_____________________________________________________________________________________`[Next Lesson](./js-tutorials/04-console-feedback.md)