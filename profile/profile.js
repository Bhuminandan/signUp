// DOM elements
const nameEle = document.querySelector(".full-name");
const emailEle = document.querySelector(".email");
const passwordEle = document.querySelector(".password");
const logOutBtn = document.querySelector(".log-out");
const signUpHeader = document.querySelector(".signup")
const profileHeader = document.querySelector(".profile")

// Getting info from local storage
let nam;
let email;
let password;

// Getting the elements from the local storage with additional check
if (localStorage.getItem("accessToken")) {
    nam = localStorage.getItem("nam");
    email = localStorage.getItem("email");
    password = localStorage.getItem("password");
    updateInfo();
} else {
    window.location.href = "../index.html";
}


// Updating information on UI
function updateInfo() {
    nameEle.innerHTML = `Full Name: ${nam}`;
    emailEle.innerHTML = `email: ${email}`;
    passwordEle.innerHTML = `Password: ${password}`;
}

// Adding funcionality to the LOGOUT btn
logOutBtn.addEventListener("click", () => {
    localStorage.setItem("nam", null);
    localStorage.setItem("email", null);
    localStorage.setItem("password", null);
    localStorage.removeItem("accessToken");
    window.location.href = "../index.html";


    // Removing unnessasary event listerners
    logOutBtn.removeEventListener("click", _listener, true);
    profileHeader.removeEventListener("click", _listener, true);
    signUpHeader.removeEventListener("click", _listener, true);
})



profileHeader.addEventListener("click", () => {
    location.reload();
});

signUpHeader.addEventListener("click", () => {
    window.location.href = "../index.html"
});
