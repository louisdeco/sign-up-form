const submitButton = document.querySelector("button");
const passwordInput = document.querySelector(".form-row:nth-child(3)");
const passwordAlert = document.createElement("p");

submitButton.addEventListener("click", (event) => {
    const password = document.querySelector("#password");
    const comfirmPassword = document.querySelector("#comfirm-password");
    
    if (password.value !== comfirmPassword.value) {
        event.preventDefault();

        passwordAlert.setAttribute("style", "color: red; font-size: 0.8rem;")
        passwordAlert.textContent = "* Passwords do not match"

       password.setAttribute("style", "border: solid 1px red;")
       comfirmPassword.setAttribute("style", "border: solid 1px red;")
        
        passwordInput.appendChild(passwordAlert)
    }

})