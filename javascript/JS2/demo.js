const inputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

// console.dir(inputElement)

const maxAllowedChars = inputElement.maxLength;

function undateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingChar = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingChar;
}

inputElement.addEventListener("input", undateRemainingCharacters);