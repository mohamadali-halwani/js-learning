# Setting Timout

### `setTimeout` evaluates a function every given time it differs from `setInterval` in its property in executing the code only once while evaluating and changing its value on demand

```javascript 

function timespacedate(){
    let taimu = new Date();
    document.getElementById('www').innerHTML= taimu;
    setTimeout(function(){timespacedate()} , 1000);


  window.onload = function(){
    timespacedate();
    }
  
  }


```

[Previous Lesson<](14-intervals.md)`___________________________________________________________________________________`[>Next Lesson]()