function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
    // document.querySelector() is used to select an element from the document using its ID
    let captchaText = document.querySelector('#captcha');
    var ctx = captchaText.getContext("2d");
    ctx.font = "30px Roboto";
    ctx.fillStyle = "#08e5ff";

    let userText = document.querySelector('#textBox');
    let output = document.querySelector('#output');
    let refreshButton = document.querySelector('#refreshButton');

    // alphaNums contains the characters with which you want to create the CAPTCHA
    let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let emptyArr = [];
    // This loop generates a random string of 7 characters using alphaNums
    // Further this string is displayed as a CAPTCHA
    for (let i = 1; i <= 7; i++) {
     emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    var c = emptyArr.join('');
    ctx.fillText(emptyArr.join(''),captchaText.width/4, captchaText.height/2);

    // This event listener is stimulated whenever the user press the "Enter" button
    // "Correct!" or "Incorrect, please try again" message is
    // displayed after validating the input text with CAPTCHA
    userText.addEventListener('keyup', function(e) {
     // Key Code Value of "Enter" Button is 13
     if (e.keyCode === 13) {
     if (userText.value === c) {
     output.classList.add("correctCaptcha");
     output.innerHTML = "Correct!";
     } else {
     output.classList.add("incorrectCaptcha");
     output.innerHTML = "Incorrect, please try again";
     }
     }
    });
    // This event listener is stimulated whenever the user clicks the "Submit" button
    // "Correct!" or "Incorrect, please try again" message is
    // displayed after validating the input text with CAPTCHA
    contino.addEventListener('click', function() {
     if (userText.value === c) {
     output.classList.add("correctCaptcha");
     output.innerHTML = "Correct!";
     } else {
     output.classList.add("incorrectCaptcha");
     output.innerHTML = "Incorrect, please try again";
     }
    });
    // This event listener is stimulated whenever the user press the "Refresh" button
    // A new random CAPTCHA is generated and displayed after the user clicks the "Refresh" button
    refreshButton.addEventListener('click', function() {
     userText.value = "";
     let refreshArr = [];
     for (let j = 1; j <= 7; j++) {
     refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
     }
     ctx.clearRect(0, 0, captchaText.width, captchaText.height);
     c = refreshArr.join('');
     ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2);
     output.innerHTML = "";
    });

});
