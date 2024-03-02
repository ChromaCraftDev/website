document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("Email").value;
        const username = document.getElementById("Username").value;
        const password = document.getElementById("Username").value;
        const confirmpassword = document.getElementById("Confirm Password").value;
        console.log('Enter the Email:', email, 'Username:', username, 'Password:', password, 'Confirm Password:', confirmpassword);
    });

    const createAccountButton = document.getElementById("createAccountButton");
    createAccountButton.addEventListener("click", function () {

    });
});
