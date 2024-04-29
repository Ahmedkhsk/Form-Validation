form = document.getElementById("log");
var userin = document.getElementById("us").value;
var passin = document.getElementById("ps").value;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let uservalied = checkuser();
  let passvalied = checkpass();
  let semsvalied = checksems();
  if (uservalied && passvalied && semsvalied) {
    display();
  }
});
function checkuser() {
  let valid = false;
  min = 6;
  max = 12;
  username = userin.trim();
  let error = document.getElementById("uerorr");
  if (!isRequired(username)) {
    error.textContent = "Username cannot be blank";
  } else if (!isBetween(username.length, min, max)) {
    error.textContent = `Username must between ${min} and ${max}`;
  } else {
    error.textContent = "";
    valid = true;
  }
  return valid;
}

function checkpass() {
  let valid = false;
  min = 6;
  pass = passin.trim();
  let error = document.getElementById("perorr");
  if (!isRequired(pass)) {
    error.textContent = "Password cannot be blank";
  } else if (pass.length < min) {
    error.textContent = `Password must be more than ${min}`;
  } else if (!(containsUpperCase(pass) || containsLowerCase(pass))) {
    error.textContent = `Password must be one Uppercase and one Lowercase`;
  } else {
    error.textContent = "";
    valid = true;
  }
  return valid;
}
function checksems() {
  let valid = false;
  c1 = document.getElementById("c1").checked;
  c2 = document.getElementById("c2").checked;
  m1 = document.getElementById("m1").checked;
  semster = document.getElementById("s").value;
  error = document.getElementById("serror");
  if (semster == "first" && semster == "second") {
    if (c2) {
      error.textContent =
        "You cannot take COMP 206 in the first or second semester.";
    }
  } else {
    valid = true;
  }
  return valid;
}

function isBetween(x, min, max) {
  return x >= min && x <= max;
}
function isRequired(x) {
  return x != "";
}
function containsUpperCase(str) {
  return /[A-Z]/.test(str);
}

function containsLowerCase(str) {
  return /[a-z]/.test(str);
}
function display() {
  document.getElementById("result").style.display = "block";
  username = userin.trim();
  pass = passin.trim();
  c1 = document.getElementById("c1").checked;
  c2 = document.getElementById("c2").checked;
  m1 = document.getElementById("m1").checked;
  semster = document.getElementById("s").value;
  data = "";
  data += `Username: ${username}\n`;
  data += `Semster ${semster}\n`;
  data += `Course Token:\n`;
  if (c1) {
    data += `COMP 102\n`;
  }
  if (c2) {
    data += `COMP 206\n`;
  }
  if (m1) {
    data += `MATH 101\n`;
  }
  document.getElementById("result").innerHTML = data;
}
