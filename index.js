//initialize array and ID for student objects
let studentsArray = [];
let studentID = 1;

let empty = document.getElementById("empty");
let studentList = document.getElementById("students-grid");
let featured = document.getElementById("featured");

//get form and add event listener on submit, to grab all form inputs
let form = document.querySelector("form");
form.addEventListener("submit", handleClick);

function handleClick(event) {
  //Stop the form from submitting
  event.preventDefault();

  //Get form items
  let formItems = event.target.elements;
  let name = formItems.firstname.value;
  let lastname = formItems.lastname.value;

  //create a student object to store all info
  let student = {
    id: studentID,
    firstname: name,
    lastname: lastname,
  };
  studentID++;

  //push object to studentsArray
  studentsArray.push(student);
  console.log(studentsArray);

  if (name !== "") {
    //call the addNewStudent function to create the new student box
    addNewStudent(student);
    empty.className = "hide";
  }
  // Reset the form field(s)
  form.reset();
}

function addNewStudent(student) {
  //create box of type "span" (can be also div)
  let gridItem = document.createElement("span");

  //add some styling by adding the class "student" defined in styles.css
  gridItem.classList.add("student");

  //add the name as text on the box and an id to the span
  gridItem.innerHTML = student.firstname;
  gridItem.id = student.id;

  //append to the grid
  studentList.append(gridItem);
}

//add event listener to the grid, to hear for any click on any of the boxes
studentList.addEventListener("click", chooseItem);

function chooseItem(event) {
  if (event.target.tagName === "SPAN") {
    console.log(event.target.innerHTML);
    //your code here!
    //1. get the event.target.id, so that we know which box has been clicked
    //2. get the object with this id from the array of students
    //3. pass the object to a new function that will create the featured section, using the info from the object
  }
}
