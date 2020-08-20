
var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");
var helpSpan = document.getElementById("form-help");

function editSpan(regex, input, helpMessage) {
    if (!regex.test(input)) {
        while (helpSpan.childNodes[0]) {
            // Clear child nodes
            helpSpan.removeChild(helpSpan.childNodes[0]);
        }
        // Add new warning
        helpSpan.appendChild(document.createTextNode(helpMessage));
    } else {
        // If the right info was enetered
        // Remove any warning that may exist
        while (helpSpan.childNodes[0]) {
            // Clear child nodes
            helpSpan.removeChild(helpSpan.childNodes[0]);
        }
    }
}


function emailCheck() {
    return editSpan(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, emailInput.value, "* Enter an email address (Ex. tyeporter@outlook.com)");
}

function passCheck(){
    return editSpan(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, passInput.value, "* Password must be a minimum eight characters, have at least one letter and one number");
}

emailInput.addEventListener("blur", emailCheck);
passInput.addEventListener("blur", passCheck);
