/* COUNTER */
const minusButton = document.querySelector(".minus-button")
const plusButton = document.querySelector(".plus-button")
const counterValue = document.querySelector(".value")

counterButtonHandler = operation => {
    let currentValue = +counterValue.innerHTML

    switch (operation) {
        case "+":
            currentValue++
            counterValue.innerHTML = currentValue
            break;
        case "-":
            currentValue--
            if (currentValue >= 1) {
                counterValue.innerHTML = currentValue
            }
            break;
        default:
            break;
    }
}

minusButton.addEventListener('click', () => counterButtonHandler("-"))
plusButton.addEventListener('click', () => counterButtonHandler("+"))