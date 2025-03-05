document.addEventListener("DOMContentLoaded", function () {
    // Check if user is already logged in
    if (localStorage.getItem("loggedIn") === "true") {
        showMainContent();
    }

    // Smooth scrolling for navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust offset if needed
                    behavior: "smooth"
                });
            }
        });
    });

   // Reveal sections on scroll
    window.addEventListener("scroll", function () {
        document.querySelectorAll(".section").forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    });
});

function showMainContent() {
    document.getElementById("auth-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}
/*
// Toggle between login and signup
function toggleAuth(mode) {
    document.getElementById("signup-box").style.display = mode === "signup" ? "block" : "none";
    document.getElementById("login-box").style.display = mode === "login" ? "block" : "none";
}


     function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    if (!username || !password) {
        alert("Please fill in both fields.");
        return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Signup successful! Please login.");
    toggleAuth('login');
}

// Login Function
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", "true");
        showMainContent();
    } else {
        alert("Invalid credentials! Please try again.");
    }
}*/






document.addEventListener("DOMContentLoaded", function () {
    // Ensure authentication container is visible on load
    document.getElementById("auth-container").style.display = "block";
    document.getElementById("main-content").style.display = "none";


 // Add event listener for Enter key on Signup and Login fields
 document.getElementById("signup-username").addEventListener("keypress", handleKeyPress);
 document.getElementById("signup-password").addEventListener("keypress", handleKeyPress);
 document.getElementById("login-username").addEventListener("keypress", handleKeyPress);
 document.getElementById("login-password").addEventListener("keypress", handleKeyPress);
});

function handleKeyPress(event) {
 if (event.key === "Enter") {
     if (document.getElementById("signup-box").style.display !== "none") {
         signup(); // Call signup if on the signup page
     } else {
         login(); // Call login if on the login page
     }
 }
}


function signup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;
    
    if (username && password) {
        // Simulate user registration
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Signup successful! Please log in.");
        toggleAuth('login');
    } else {
        alert("Please fill in all fields.");
    }
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        document.getElementById("auth-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        alert("Invalid username or password.");
    }
}

function toggleAuth(type) {
    if (type === "login") {
        document.getElementById("signup-box").style.display = "none";
        document.getElementById("login-box").style.display = "block";
    } else {
        document.getElementById("signup-box").style.display = "block";
        document.getElementById("login-box").style.display = "none";
    }
}














document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-output", {
        strings: [
            "Initializing terminal...", 
            " Loading projects...", 
            " Connecting to server...", 
            " Welcome to my portfolio!", 
            " Explore my work below.",
            "Name: AKANSHA SHARMA\n",
            "Skills: HTML, CSS, JavaScript, React, Node.js\n",
            "Projects: Fast Food Ordering System, Stock Prediction, Amazon Clone, \n",
            "Status: Ready to showcase! 🚀"
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});



