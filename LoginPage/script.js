document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        console.log('Logging in with username:', username, 'and password:', password);
    });

    const createAccountButton = document.getElementById("createAccountButton");
    createAccountButton.addEventListener("click", function () {

    });
});
