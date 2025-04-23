// Login
function Login(event) {
    event.preventDefault();

    const loginInputs = document.querySelectorAll('input');
    const loginUser = {};

    loginInputs.forEach(logins => {
        loginUser[logins.id] = logins.value;
    });

    console.log("Email: " + loginUser.emailLogs + "\nPassword: " + loginUser.passwordLogs);

    let dataLocal = JSON.parse(localStorage.getItem('users')) || [];

    const findUser = dataLocal.find(user => user.email === loginUser.emailLogs && user.password === loginUser.passwordLogs);

    if (findUser) {
        alert("Successful Login!");

        const sessionUser = {
            userId: findUser.userId,
            email: findUser.email,
            name: findUser.username, // or whatever you stored as the name
            role: findUser.role // Add role to session
        };

        localStorage.setItem('loggedUsers', JSON.stringify(sessionUser));
        localStorage.setItem('currentUserId', findUser.userId);

        console.log("User ID:", findUser.userId);
        console.log("Role:", findUser.role); // Display role
        if (findUser.role === "admin") {
            window.location.href = './admin.html';
        } else {
            window.location.href = './homepage.html';
            
        }
    } else {
        alert('Incorrect password or email. Please try again.');
    }
}

// Sign up
function SignUp() {
    const signupInputs = document.querySelectorAll('input');
    const userSignup = {};

    signupInputs.forEach(signupUser => {
        userSignup[signupUser.id] = signupUser.value;
    });

    let randomMoney = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;

    userSignup.address = null;
    userSignup.contact = null;
    userSignup.fullname = null
    userSignup.money = randomMoney;
    userSignup.userId = Date.now();
    userSignup.role = 'user'; // Assign default role as 'user'

    alert('Sign Up Successfully!');

    let dataUser = JSON.parse(localStorage.getItem('users')) || [];
    dataUser.push(userSignup);

    localStorage.setItem('users', JSON.stringify(dataUser));
}

// default user with roles
function DefaultUser() {
    if (!localStorage.getItem('users')) {
        const defaultUsers = [
            {
                username: "user",
                email: "user@gmail.com",
                password: "user123",
                address: null,
                contact: null,
                fullName: null,
                money: 1000,
                userId: 1678901000000,
                role: 'user', // User role
            },
            {
                username: "john",
                email: "john@gmail.com",
                password: "john123",
                address: null,
                contact: null,
                fullName: null,
                money: 1500,
                userId: 1678902000000,
                role: 'admin', // Admin role
            },
            {
                username: "camile",
                email: "camile@gmail.com",
                password: "camile123",
                address: null,
                contact: null,
                fullName: null,
                money: 1200,
                userId: 1678903000000,
                role: 'user', // User role
            },
            {
                username: "marco",
                email: "marco@gmail.com",
                password: "marco123",
                address: null,
                contact: null,
                fullName: null,
                money: 1300,
                userId: 1678904000000,
                role: 'user', // User role
            },
            {
                username: "jordan",
                email: "jordan@gmail.com",
                password: "jordan123",
                address: null,
                contact: null,
                fullName: null,
                money: 1100,
                userId: 1678905000000,
                role: 'user', // User role
            },
            {
                username: "louise",
                email: "louise@gmail.com",
                password: "louise123",
                address: null,
                contact: null,
                fullName: null,
                money: 1400,
                userId: 1678906000000,
                role: 'user', // User role
            }
        ];
          localStorage.setItem('users', JSON.stringify(defaultUsers));
          console.log('Default users with roles added');
    } 
}

window.onload = function () {
    DefaultUser();
};

// Logging out or checking session
function checkSession() {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUsers'));

    if (loggedUser) {
        console.log("Logged In as:", loggedUser.name);
        console.log("Role:", loggedUser.role);
    } else {
        console.log("No user logged in.");
    }
}

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
  }

// change ui
const signupDiv = document.querySelector('.signup');
const loginDiv = document.querySelector('.login');

const signupBut = document.getElementById('signup');
const loginBut = document.getElementById('login');

signupBut.addEventListener('click', () => {
    signupDiv.style.display = 'flex';
    signupDiv.style.flexDirection = 'column';
    loginDiv.style.display = 'none';
});
loginBut.addEventListener('click', () => {
    loginDiv.style.display = 'flex';
    signupDiv.style.display = 'none';
});

// Modal logic
const googleLoginBtn = document.querySelectorAll("#google-login-btn"); 
const modal = document.getElementById("google-modal");
const closeModal = document.getElementById("close-modal");

googleLoginBtn.forEach(googleLoginBtn => {
    googleLoginBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });
});
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye');
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";  // Show password
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    } else {
      passwordInput.type = "password";  // Hide password
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    }
  }
  
function togglePasswordVisibilitys() {
    const passwordInput = document.getElementById('passwordLogs');
    const eyeIcon = document.getElementById('eyes');
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";  // Show password
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    } else {
      passwordInput.type = "password";  // Hide password
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    }
  }