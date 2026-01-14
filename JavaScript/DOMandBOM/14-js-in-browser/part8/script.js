//Example 1: Accessing DOM Elements

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

//Example 2: Traversing the DOM 

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//Example 3: Manipulating DOM Elements 

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

//Example 4: Creating and Inserting Elements
document.getElementById("addNewItem").addEventListener("click", function () {

  // creating new Element
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  // appending
  document.getElementById("shoppingList").appendChild(newItem);
});

//Example 5: Removing DOM Elements 
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//Example 6: Event Handling in the DOM 
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    // after double click alert will pop up
    alert("chaicode");
  });

// Example 7: Event Delegation 

document.getElementById("teaList").addEventListener("click", function (event) {

  //target the which you selected ->
  // console.log(event.target);
  
  if (event.target && event.target.matches(".teaItem")) {
    //event target the only matches of class -> teaItem not others
    alert("You selected: " + event.target.textContent);
  }
  else if(event.target && event.target.matches(".notTeaItem")){
    alert(`you choosed ${event.target.textContent}, not the tea item`);
  }
});

// Example 8: Form Handling 

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {

    // prevent the default behavior when you submit the form -> to submit
    event.preventDefault(); // imp

    let feedback = document.getElementById("feedbackInput").value; // grabing value of the feedback have you written
    console.log(feedback);

    // display the feedback content
    let feedbackContent = document.getElementById( "feedbackDisplay");
    feedbackContent.textContent = `Feedback is: ${feedback}`;

    // adding styles
    feedbackContent.style.backgroundColor = "yellow";
    feedbackContent.style.padding = "10px";
    feedbackContent.style.color = "black";


  });

//Example 9: DOM Content Loaded 

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//Example 10: CSS Classes Manipulation 
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");

    // ye id="descriptionText" wale element me ek class add kr dega  then when you click button apply .highlight css property but not toggle the property

    // descriptionText.classList.add("highlight");

    descriptionText.classList.toggle("highlight"); // toggle the highlight class css property
  });

  // getElementByTagName
  let tags = document.getElementById("tag");
  tags.getElementsByTagName("h3");
  tags.getElementsByTagName("a");
