let studentsArray = [];
let studentID = 1;

let empty = document.getElementById("empty");
let studentList = document.getElementById("students-grid");
let featured = document.getElementById("featured");

let form = document.querySelector("form");
form.addEventListener("submit", handleClick);

studentList.addEventListener("click", chooseItem);

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
    addNewStudent(student);
    empty.className = "hide";
  }
  // Reset the form field(s)
  form.reset();
}

function addNewStudent(student) {
  let gridItem = document.createElement("span");
  gridItem.classList.add("student");
  gridItem.innerHTML = student.firstname;
  gridItem.id = student.id;
  studentList.append(gridItem);
}

function chooseItem(event) {
  if (event.target.tagName === "SPAN") {
    //your code here
    console.log(event.target.innerHTML);
  }
}
