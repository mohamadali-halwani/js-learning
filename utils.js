
//A list of functions to use
//object.method.property= content;
function showMessage(message){
    document.getElementById('messeji').textContent= message;
}

function showMessages(message, anotherMessage){

    document.getElementById('message').textContent= message;
    document.getElementById('anotherMessage').textContent= anotherMessage;
}

function changePercentOff(percentage){
    document.getElementById(`percent-off`).textContent= percentage + "% OFF !!!";
}