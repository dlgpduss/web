let paragraphElement = document.querySelector("p");

function changeParagraphElement() {
    paragraphElement.textContent = "Cliked!";
}

paragraphElement.addEventListener("click", changeParagraphElement);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
    // let enterdText = inputElement.value;
    let enterdText = event.target.value;
    // let enterdText = event.data; => This is different!
    console.log(enterdText);
    // console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);