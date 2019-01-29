// how do you find elements on the page?
//document.

//querySelector('p')

//this gets ahold of the p tag

function change()
{ 
  document.
  querySelector('p').
  style =
  'font-family: "Helvetica";font-style: italic;'
}
//*callback*

//tells it to execute set of instructions automagically ()= do this code,, run this funtion recipe


//define function, written receipe but haven't cooked anthing 
function SayHello() 
{
console.log("Hello")
}

  function ChangeBackground() 
  {
    document.querySelector('body')
    .style = 'background-color: gray'
  }
//run function 
//console logged hello <- to print 
// no (), you want to "call" and say Hello

// What follows is calling/invoking/running the function named "change"
document.querySelector('img')
.addEventListener('click', change)

//when the mouse goes over the image
document.querySelector('img')
.addEventListener('mouseenter',
  ChangeBackground)

//change the color background 
  document.querySelector('img')
  .addEventListener('mouseleave', ResetBackground) 




  //change the background back
  function ResetBackground() 
  {
    document.querySelector('body')
    .style = 'background-color: default'
  }
  //when the mouse leaves the image 

  document.querySelector('img')
  .addEventListner('click', change)




  document.query.Selector('img')
  .addEventListener('mouseenter', ChangeBackground)

  document.query.Selector('img')
  .addEventListener('mouseleave', ResetBackground)


//data types 7 main

//strings
//data types
//numbers ()
//booleans
//array 
//undefined
//objects
//  datatimes


//variables




//functions 
//syntax for setting up a variable
//prints string
let myString= "Hello, World"

console.log(myString)



//loops
//keep going as long as count is less than ten, for every time add 1
for (let count = 0; count < 10;
count++) {

console.log(count)
console.log('did a loop')
}


// how do you change them?

// how do add elements to the page?


// What other things do you think js _can_ do?



////////////////////////////////
//    Afternoon               //
////////////////////////////////

// Goal: add 1000 of the above image
// Plan

// data types

// variables

// functions

// console.log(z);

// conditions

// loops
