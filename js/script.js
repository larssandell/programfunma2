// Question 1: Loop through the array below and console log each type property if the age is at least 4.
console.log("---------------------------------------------------");
console.log("Question 1:");

const pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
  ];

   for (let i = 0; i < pets.length; i++) {
        const age = pets[i].age;
     if(age <= 4) {
       console.log(pets[i].type);
  }
 }

 console.log("---------------------------------------------------");
 console.log("Question 2:");

// Question 2: Create a function with one argument. 
// Inside the function check the type of the value being passed in.
// If it is a boolean value, log the value.
// If it is not a boolean value, log the message “Please pass a boolean value in”.
// Call the function and pass a value in.

function booleanValue(input) {
  if(typeof(input) === "boolean") {
  console.log(input);
  } else if(typeof(input)!== true){
    console.log("Please pass a boolean value in")
  }
}
booleanValue("true");

console.log("---------------------------------------------------");
console.log("Question 3:");

// Question 3: Write code that does the following:
// When the button in the HTML is clicked, 
// change the colour of the h2 element to “blue” and change it to read “Updated subheading”.

console.log("Push the button Mister!");

const heading = document.querySelector("h2");
const btn = document.querySelector("button");

function changeFormat() {
  heading.innerHTML = "Updated Subheading";
  heading.style.color = "blue";
}

btn.onclick = changeFormat;


// End of Questions :D
