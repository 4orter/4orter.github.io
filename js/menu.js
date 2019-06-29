// Global Variables
var menuBar = document.getElementsByClassName("menu-icon")[0];
var menu = document.getElementsByClassName("menu")[0];
var topBar = document.getElementsByClassName("top-bar")[0];
var bottomBar = document.getElementsByClassName("bottom-bar")[0];

// Function: adds event listeners
function addEventListeners(){
    menuBar.addEventListener("click", showMenu);
}

// Function: unhides menu from screen
function showMenu(event){
    if (menu.classList.contains("menu-inactive")){
        menu.classList.remove("menu-inactive");
        topBar.classList.add("close");
        bottomBar.classList.add("close");
    } else {
        menu.classList.add("menu-inactive");
        topBar.classList.remove("close");
        bottomBar.classList.remove("close");
    }
}


addEventListeners();
