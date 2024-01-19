const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text"),
       inputBox = optionMenu.querySelector(".input-box"),
       textInput = optionMenu.querySelector("#textInput"),
       confirmBtn = optionMenu.querySelector(".confirm-btn"),
       clearBtn = optionMenu.querySelector(".clear-btn");

function closeMenu() {
    optionMenu.classList.remove("active");
}

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
});

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        textInput.value = "";
        inputBox.style.display = "block";
        textInput.placeholder = `Enter your ${selectedOption.toLowerCase()}`;
        closeMenu();
    });
});

confirmBtn.addEventListener("click", () => {
    const inputValue = textInput.value;

    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(inputValue)) {
        alert(`Valid email: ${inputValue}`);
    } else {
        alert("Invalid email. Please enter a valid email address.");
    }

    textInput.value = "";
    inputBox.style.display = "none";
    closeMenu();
});

clearBtn.addEventListener("click", () => {
    textInput.value = "";
    textInput.style.border = "1px solid #ccc"; // Reset border
});
