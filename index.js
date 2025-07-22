function dan() {
  let userName = document.getElementById("w").value;
  if (userName == "Admin") {
    window.location.href = "userInformation.html";
  } else if (userName == "") {
    alert("Canceled");
  } else {
    alert("I don't know you");
  }
}

function truong() {
  let userPassword = document.getElementById("q").value;
  if (userPassword == "TheMaster") {
    alert("Welcome admin!");
  } else if (userPassword == "") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
}
