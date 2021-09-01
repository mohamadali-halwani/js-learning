const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';



document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}
