let dayinp = document.getElementById("day");
let monthinp = document.getElementById("month");
let yearinp = document.getElementById("year");

// Outputs variables

let dayopt = document.getElementById("DD");
let monthopt = document.getElementById("MM");
let yearopt = document.getElementById("YY");

let form = document.querySelector("form");

let date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validdate() {
  let inputs = document.querySelectorAll("input");

  let validator = true;
  inputs.forEach((i) => {
    let parent = i.parentElement;

    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerHTML = "This field is required";
      validator = false;
    } else if (dayinp.value > 31) {
      dayinp.style.borderColor = "red";
      dayinp.parentElement.querySelector("small").innerHTML =
        "Must be a valid date";
      validator = false;
    } else if (monthinp.value > 12) {
      monthinp.parentElement.querySelector("small").innerHTML =
        "Must be a valid Month";
    } else if (yearinp.value> year){
      yearinp.style.borderColor = "red";
      yearinp.parentElement.querySelector("small").innerHTML =
        "Must be in the past";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerHTML = "";
      validator = true;
    }
  });
  return validator;
}

function submitform(e) {
  e.preventDefault();


  // variables are re-assign

  let dayinp = document.getElementById("day").value;
  let monthinp = document.getElementById("month").value;
  let yearinp = document.getElementById("year").value;
  

  if (validdate()){
    if(dayinp>day){
      day = day + months[month -1]
      month-=1
    }
    if(monthinp>month){
      month+=12;
      year-=1
    }

    let d = day - dayinp;
    let m = month - monthinp;
    let y = year - yearinp;

    dayopt.innerHTML = d;
    monthopt.innerHTML = m;
    yearopt.innerHTML = y;

  }
}
form.addEventListener('submit',submitform )