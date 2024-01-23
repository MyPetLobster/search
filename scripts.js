const logo = document.querySelector(".logo");
const darkMode = document.getElementById("dark-mode");
var r = document.querySelector(":root");
let darkModeOn = true;

darkMode.addEventListener("click", myFunctionSet);

function myFunctionSet() {
  if (darkModeOn == true) {
    r.style.setProperty("--bg-color", "#ffffff");
    r.style.setProperty("--accent-color", "#f2f2f2");
    r.style.setProperty("--text-main", "#5f6368");
    logo.src = "images/google-logo-9834.png";
    darkModeOn = false;
  } else {
    r.style.setProperty("--bg-color", "#202124");
    r.style.setProperty("--accent-color", "#303134");
    r.style.setProperty("--text-main", "#e8eaed");
    logo.src = "images/google-white-logo-1.png";
    darkModeOn = true;
  }

  console.log(`Dark Mode: ${darkModeOn}`);
}
