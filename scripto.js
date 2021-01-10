//#############################################################################
/*
      Table of Content:
        1-
        2-
        3-
        4-
        5-
        6-
        7-




*/





//#############################################################################
//################################commenting###################################
//#############################################################################
//comment goes here
//function that does something
/*hey there
this is my multiline comment */



//#############################################################################
//#####################How to tell an old browser to ignore the script#########
//#############################################################################

/*

<!--

your script here


  //-->


*/

//#############################################################################
//#####################Include your script file in your html file##############
//#############################################################################

//Use this html tag to include your script in the html page
// <script src="./script.js"></script>



//#############################################################################
//#####################Using console object####################################
//#############################################################################



//console.log("Halt! Hey there playboy!");




//#############################################################################
//#####################variables###############################################
//#############################################################################



/*
//You can declare and initialize a variable or a set of variables like this:
let total = 149.99,
  product = ' hiking boots',
  discounted = true;

document.write("<br/>" + "Your" + product + " has cost you" + total);
*/


/*
//////////////A boolean is a variable that can be either true or false

  let food = true, buncker1 = `full`, buncker2 = `empty`;
  if(food = !true){
    console.log(`Your buncker is `+ buncker1+ ` and you're gonna live`);
  }else{
    console.log(`Your buncker is `+ buncker2+ ` and you're gonna starve`);
  }

*/

//#############################################################################
//#####################Constants###############################################
//#############################################################################

/*
//You must initialize constants when declaring them
const price = 40;
document.write("Your price is: " + price);
*/



//#############################################################################
//#####################Tips on Variables#######################################
//#############################################################################

/*

1-Var does not give you errors as it is outdated You should not use the variable
 before initializing it
2-To whipe out the value of a certain variable, make it equals null

      let varo = 55;
      varo = null;
      console.log(varo);

3-An Undefined variable is variable that was declared but not initialized

*/


//#############################################################################
//############Using document.write#############################################
//#############################################################################

/*
let tuni = "texty texter said: \"hey hoe hah \"";
  document.write(tuni);
  document.write("<br>");
let name = "mamamia";
let age = 25;
document.write(name + " " + "is my name!!!");
*/

////////////////////To write variables
/*
let tuni = "i am a fish";
let baco = " baconator?";
let han = " haburglarr";
document.write(tuni + baco + han);
*/


//#############################################################################
//############Using prompt box#################################################
//#############################################################################

/*
let name=prompt("Enter your name", "NAME GOES HERE DUMMY!");
document.write("Hello " + name);
*/




//#############################################################################
//############setting intervals################################################
//#############################################################################

/*
function doSomething(){

  document.write("Hi there brozo");
  document.write("<br/>");

}
setInterval(doSomething, 1000);
*/

//#############################################################################
//####################setting Timeout##########################################
//#############################################################################



/*
//setTimeout evaluates a function every given time
//it differs from setInterval in its property in executing the code only once
//while evaluating and changing its value on demand

//in html, put : The Time is: <br> <span id="salami"></span>

  window.onload= function(){timespacedate();}

  function timespacedate(){
    let taimu = new Date();
    document.getElementById('salami').innerHTML= taimu;
    setTimeout(function(){timespacedate()} , 1000);

  }


*/



//#############################################################################
//#######################Math Operations#######################################
//#############################################################################

//Math operators follow the mathematic rules of precedence 
//which means parenthesis first(grouping) then expotentiation, multiplication
// & division, incrementing and decrementing..etc

/*

let shop =(5* (66-1) + (5/5) + (5*6) - 2^4);
  console.log(shop);


let chop = 788;
chop++;
  document.write(chop); */
/*
  let ali = 25;
  ali += 25;    //or ali = ali + 25;
  ali /=4;
  ali*=5;
  ali = ali % 4;
  document.write(ali);

  // You can use the operator typeof to get the type of the variable

  document.write(typeof ali);


*/

//#############################################################################
//##############################String manipulation############################
//#############################################################################

/*
//Using backticks `` to deal with strings gives you the ability to do 
//          Interpolation

let personName = 'samsano';
let mamamia = `Hello ${personName}`;
// using backticks also allows you to put spaces inside the string 
//without getting them printed out
//but the spaces will show exactly as they are in the console
let mamamio = `Hello 



${personName}`;
console.log(mamamia);
console.log(mamamio);
*/

//You can use addition on strings
/*
let salutation = `Hello `;
salutation = salutation + `People`;
console.log(salutation);
*/


//////////////////////example string manipulating methods
/*

let salutation = `Hello `;

salutation = salutation.toLowerCase();
console.log(salutation);

salutation = salutation.substring(1);
console.log(salutation);

salutation = salutation.toUpperCase();
console.log(salutation);

salutation = salutation.toLocaleLowerCase(); //takes difference in locales
//(languages) into account
console.log(salutation);

*/


//////////////////////example string properties


/*
let salutation = `Hello `;

salutation = salutation.length;
console.log(salutation);

salutation = `Hello `;
console.log(typeof salutation);
*/

//////////////////////example strings and numbers

/*
//number to string
let amount = 123;
amount = amount.toString();
console.log(`The type of your variable is: ` + typeof amount);


//string to number
let amount2 = `123.12`;
amount2 = Number.parseFloat(amount2);
console.log(amount2);
*/


//#############################################################################
//##############################Objects########################################
//#############################################################################


/*
//Each object can hold many properties specified as follows
  let person = {
    firstName: `John`,
    lastName: `Luke`
  };

  console.log(`${`Hi ` + person.firstName} ${person.lastName}`);
*/

//#############################################################################
//##############################IF STATEMENTS##################################
//#############################################################################
/*
let apples= 34;
let hotdogs= 24;
// comparing :
// ==
// > <
// !=
// <=
// >=

if (apples < hotdogs) {
  document.write("YAY AWESOME! ");
} else {
  document.write("NAAAAAAHHHAAAAH TED! ");
} */

//#############################################################################
//##########################IF/ELSE STATEMENTS#################################
//#############################################################################
/*

  let blue = 33;
  let red = 77;
  if (blue>red) {
    document.write("I love hotpockets");
  }else {
    document.write("FALSE, POOR MORTAL! I love strawberries");
  }
*/

//#############################################################################
//####################################NESTING##################################
//#############################################################################
/*
      let firstName= "ali";
      let lastName= "Haruna";

      if (firstName=="ali") {
        if (lastName=="Haruno") {
            document.write("You DID IT MORTY!");
        }else {
          document.write("Get outta here IMPOSTER!");
        }
      }
*/

//#############################################################################
//#########################Complex CONDITIONS##################################
//#############################################################################
/*
      let first= "ali";
      let last= "haruno";
///////////////////"AND"

        if ((first=="ali") && (last=="haruno")) {
          document.write("welcome aboard papa mio !");
        }else {
          document.write("gettouta here IMPOSTER");
        }


///////////////////"OR"

      if ((first=="ali") || (last=="haruno")) {
        document.write("bacon");
      }else {
        document.write("hotdogs")
      }
*/
//###########################################################################
//#########################Switches##########################################
//###########################################################################
/*
        let girl="ham";

              switch (girl) {

                case "natalie":
                  document.write("You must like garden state");
                  break;

                case "ashley":
                    document.write("You must like twilight");
                  break;

                case "lalamlu":
                      document.write("linlonlandon");
                    break;

                default: document.write("Name Unknown");

              }
*/
//#############################################################################
//###########################for loops#########################################
//#############################################################################
/*
          for (i = 0; i < 10; i++) {

            document.write("I love black pepper <br />");
          }
*/

//#############################################################################
//############################while loops######################################
//#############################################################################
/*

  let girl = 2;
      while (girl !=50) {
          document.write("not yet girl " + girl + "<br>" );
          girl++;
      }
*/

//#############################################################################
//##############################do while#######################################
//#############################################################################

/*

  let x = 21;
      do {
    document.write(x + "- House Hlalu will have their revenge !!! <br />");
        x++;
      } while (x<=20);

*/


//#############################################################################
//####################Using Functions##########################################
//#############################################################################


/*
    function funky(){
      alert("Ouch!!!");
    }

    function meatball(x){
      alert("meatball function says: I love " + x );

    }

    function apples(one, two){
      document.write("<br /> apples function says: "
+ one + " is better than " + two + "<br />");

    }

function tooeasy(){
  return "gametime";

}
  function addNumbers(a,b){
    let c = a+b;
    return c;

  }
    function doFirst(){
      document.write("<br>I'm first bo!");
    }
    function doSecond(){
      document.write("<br>222222");
    }

    function start(){
      doFirst();
      doSecond();
    }
meatball("bacon");
meatball("waaaaaaamuuuuuuuuuuuuu");
apples("wamu","dio");
apples("kami","maru");
tooeasy();
document.write(tooeasy());
document.write(" is " + addNumbers(3,6));
start();
<input type="button" value="touch me biach" onclick="funky()">

*/

/*
let girl = " konodondo";

    function spit(){
        let girl = "kelsey";
        document.write(girl);

    }

    spit();
document.write(girl); */

//#############################################################################
//##########################Event Handlers#####################################
//#############################################################################




///////////////Basic Event Handler

//<input type="button" value="Touch me senpai"
//onClick="alert('henlo papamio');alert('Fish EYE !');"/>




//#############################################################################
//##########################Event Handlers####Part 2###########################
//#############################################################################

////////////////onMouseOver

//<a href="http://youtube.com" onMouseOver="alert('gametime!');">
  //Hover over me! </a>

///////////////onMouseOut

//<a href="http://youtube.com" onMouseOut="alert('gametime!');">
  //Hover over me! </a>


///////////onLoad

//<body onLoad="alert('your website is loaded');">


///////////onUnload
//<body onUnload="alert('goodbye!');">



//#############################################################################
//##########################Objects############################################
//#############################################################################

/*
//an object has properties(all the variables) and methods (which
// are all the things the object does)
           let shark = "hey i'm a shark fish";
//To use objects you'll need the dot separator like this:
           document.write(shark.length);
//document is an object itself while write is a method
          document.write();
//So we're calling the method called "write" from the object "document"
*/

//#############################################################################
//###########Making Our own Ogjects#########constructor function###############
//#############################################################################

/*
//making a method(function) with properties to call later(constructor
//function)
          function person(name, age){
//we say that what ever we pass in, will be assigned to the object
            this.name = name;
            this.age = age;

          }
//creating a new instance of an object
          let ali = new person("ali dono ", 25 );
          let sansa = new person("sansaki ", 24);
//print out the stuff
          document.write(ali.name, ali.age);
          document.write(sansa.name, sansa.age);
*/

//#############################################################################
//##########################Object Initializers################################
//#############################################################################

/*

          ali = {name: "ali dono ",
                 age: 25,
                  height: 180};

          sansa = {name: "sansaki sonso ", age: 20, height: 150};

  document.write(ali.name + "loves " + sansa.name + "because she is " +
      sansa.age);
*/

//#############################################################################
//##########################Adding methods to objects##########################
//#############################################################################

/*
//parameters are inputs that we give to the function to perform its shit
//First we'll make constructor function with properties

  function people(name, age){

//we set the name and the age for whatever we pass in

    this.name = name;
    this.age = age;

//We invoke the outside function/method and save the return value into
//the variable that is called "yearsUntilRetire"

    this.yearsUntilRetire = yearsLeft;
  }

//The function that we invoke up stairs

  function yearsLeft(){

    let numYears = 65 - this.age;
    return numYears;
  }


//New instance of an object

    let natalie = new people("Natalie Portman", 28);
    let ali = new people("ali dono", 21);

//We call the instance with the output variable from the function

document.write(natalie.yearsUntilRetire());
document.write("<br />"+ali.yearsUntilRetire());

*/

//#############################################################################
//###########################Simple Arrays#####################################
//#############################################################################


/*

  let people = new Array("ali", "sara", "bla bla blu", "bleed");

for (let i = 0; i < people.length; i++) {
  document.write(people[i]+"<br>");
}
*/

//#############################################################################
//###########################Arrays 2##########################################
//#############################################################################




/*
////////////////////////////////////////
//Make an array with predetermined value
////////////////////////////////////////

  let things = new Array(3);

  things[0]="pen";
  things[1]="pencil";
  things[2]="pensimo";

  for (let i = 0; i < things.length; i++) {
    document.write(things[i]+"<br>");
  }

/////////////////////////////////////
//Make an array as an empty building
/////////////////////////////////////

  let stuff = new Array();

  let x = 9;

  let pump = 96-69;

  stuff[0]="summer";

  stuff[1]=pump;

  stuff[2]=x;

for (let i = 0; i < stuff.length; i++) {
  document.write(stuff[i]+"<br>");
}

*/



//#############################################################################
//###########################Operating on Arrays###############################
//#############################################################################


/*

//Arrays are objects, and as any objects they have properties

    let prob = new Array("no", "yes", "nah");

    document.write("The length of the array is : " + prob.length + "<br>");

    let brob = new Array("yaya", "nini", "longo");

//concat adds arrays together keeping elemts separated

    let peopo = prob.concat(brob);

    document.write(peopo[0] +"<br>"+ peopo[1]+"<br>" + peopo[2] + "<br>"
  + peopo[3] + "<br>"+ peopo[4] + "<br>"+ peopo[5] + "<br>");

*/



//#############################################################################
//###########################Methods to deal with Arrays#######################
//#############################################################################

/*

//join method
//it converts an array to string


  let anime = new Array("GTO " ,"InitialD " , "Naruto.");

//If you put a parameter it can replace the comma

  let stringvariable = anime.join(" - ");

  document.write(stringvariable + "<br />");

//Pop method deletes the last element in an array

anime.pop();

let stringvariable2 = anime.join(" 0 ");

document.write(stringvariable2 + "<br />");


*/

//#############################################################################
//###########################Methods to deal with Arrays part 2################
//#############################################################################


/*
//////Reverse method
//reverses the order of the array


  let bp = new Array("head", "shoulders", "knees");
  bp.reverse();
  document.write(bp.join());

//////Push method
//Adds elements at the end of the array

  bp.push("tongue", "lips");
  bp.reverse();
  document.write("<br/>" + bp.join());



//Sort method
//Sorts the array elements in alphabetical order

  bp.sort();
  document.write("<br/>" + bp.join());

*/


//#############################################################################
//###########################Add Array Elements################################
//#############################################################################


/*
//Using a loop and a prompt

let something = new Array(3);
for (let i = 0; i < something.length; i++) {
  something[i]=prompt("Add Something To the Array", "write something");
}

//joining the array so I can print it all at once
document.write(something.join(" - "));

*/

//#############################################################################
//###########################Associative Arrays################################
//#############################################################################

/*
//It's like a json element

let haruno = new Array();
haruno["color"] = "RED";
haruno["Food"] = "MEAT";
*/

//#############################################################################
//#############################Math Objects####################################
//#############################################################################

/*
document.write(Math.PI);
document.write("<br/>" + Math.E);

let n = prompt("Enter A number","Numburrhe");
let answer= Math.sqrt(n);
alert("The square root of " + n + " is :" + answer);
*/

//#############################################################################
//#############################Date Object#####################################
//#############################################################################

//This way, you can make the page keeps printing the time in an interval
//you specify

/*
function fullDate(){
let today = new Date();
document.write(today);
document.write("<br/>");
}
setInterval(fullDate, 1000);
*/

/*
function printTime(){

  let now = new Date();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
document.write(hours+":"+mins+":"+secs+"<br/>");

}
setInterval(printTime, 1000);
*/



///////////////////////////
//To make an online watch:
///////////////////////////


/*


//in html :
//Current Time: <span id="clock"></span>


  window.onload=function(){getTime();}

    function getTime(){
        let today=new Date();
        let h=today.getHours();
        let m=today.getMinutes();
        let s=today.getSeconds();


// add a zero in front of numbers<10
        m=checkTime(m);
        s=checkTime(s);


        document.getElementById('clock').innerHTML= h + ":" + m + ":" + s;

       setTimeout( function(){getTime()} , 1000);
}


//setInterval("getTime()",1000);//another way

function checkTime(i){

  if (i<10){
    i="0" + i;
  }
    return i;
}

*/


//#############################################################################
//#############################Accessing Forms#################################
//#############################################################################
/*
sample html form :

<form name="myform">
  Username: <input type="text" name="username" />
  Password: <input type="password" name="password" />
  Checkbox: <input type="checkbox" name="thebox" />

  <input type="submit" value="Submit!" onclick="validator()" />

</form>




//////////////////////////////////////////////////
//Forms are stored in javascript in an array form
//so we can call them in the same manner
//////////////////////////////////////////////////


let x = document.forms[0].length;
document.write(x);

*/


//#############################################################################
//######################Accessing Form Elements################################
//#############################################################################

/*

//Accessing the elements goes in the same manner as the forms


//the basic formula is
  let x = document.forms[0].elements[0].name;

//or you can specify what you want since you already named everything
  let y = document.myform.password.name;

  document.write("<br/>"  +  y);
  document.write("<br/>"  +  x);

*/


//#############################################################################
//###############################Form Validator################################
//#############################################################################

/*

//You can name your function any name you like

function validator(){


//if statement to check if the checkbox in your form is checked
  if (document.myform.thebox.checked) {
    alert("Your box is checked YO!");
  }else {
    alert("You better check that box YO!");
  }

}

*/

//#############################################################################
//#############################################################################
//#############################################################################





//#############################################################################
//###############################Working With Modules##########################
//#############################################################################




