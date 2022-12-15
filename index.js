//initialize array and ID for student objects
let studentsArray = [];
let studentID = 1;

let empty = document.getElementById("empty");
let studentList = document.getElementById("students-grid");

//get form and add event listener on submit, to grab all form inputs
let form = document.querySelector("form");
form.addEventListener("submit", handleClick);

function handleClick(event) {
  //Stop the form from submitting
  event.preventDefault();

  //Get form items
  let formItems = event.target.elements;
  let name = formItems.name.value;
  let url = formItems.url.value;

  //create a student object to store all info
  let student = {
    id: studentID,
    name: name,
    url: url,
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
  //create box for image
  let gridItem = document.createElement("div");
  let img = document.createElement("img");
  gridItem.append(img);

  //add some styling by adding the class "student" defined in styles.css
  gridItem.classList.add("student");

  //add on the img element the src and an id
  //we will use the id when we click the image to identify which one has been clicked
  img.src = student.url;
  img.id = student.id;

  //append the whole div with the image to the grid
  studentList.append(gridItem);
}

//add event listener to the grid, to hear for any click on any of the boxes
studentList.addEventListener("click", chooseItem);

function chooseItem(event) {
  //grab the featured section elements you will need
  let featured = document.querySelector("#featured");
  let featuredimg = document.querySelector("#feat-img");
  let featuredtext = document.querySelector("#feat-text");

  if (event.target.tagName === "IMG") {
    //filter array of students, find object with id equal to event.target.id (your clicked image id).
    let chosen = studentsArray.find((item) => item.id == event.target.id);

    //fill the elements of the featured section:
    //- img with the stored url from object
    //- title with the stored name from object
    featuredimg.src = chosen.url;
    featuredtext.innerHTML = chosen.name;

    //make section appear by removing the "hide" class
    featured.classList.remove("hide");
  }
}
