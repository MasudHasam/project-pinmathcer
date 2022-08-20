// connect to the pin generate button

function fourDijitPin() {
    const originalPin = randomPin();
    const makePinFourDijit = Math.round(originalPin);
    const makePinString = makePinFourDijit + "";

    if (makePinString.length == 4) {
        return makePinString;
    } else {
        return fourDijitPin();
    }
}

function randomPin() {
    const pin = Math.random() * 10000;
    return pin;
};


document.getElementById("pinGenerateBtn").addEventListener("click", function () {
    const getPin = fourDijitPin();
    const showPinDisplay = document.getElementById("showPin");
    showPinDisplay.value = getPin;
});


document.getElementById("allButton").addEventListener("click", function (event) {
    const getNumber = event.target.innerText;
    const setValueDisplay = document.getElementById("pinMatchInput");
    if (isNaN(getNumber)) {
        if (getNumber === "C") {
            setValueDisplay.value = "";
        } else if (getNumber === "<") {
            const makeArray = setValueDisplay.value.split('');
            makeArray.pop();
            const joinIt = makeArray.join('');
            setValueDisplay.value = joinIt;
        }
    } else {

        const previousDisplayValue = setValueDisplay.value;
        setValueDisplay.value = previousDisplayValue + getNumber;;

    }
});



//verify pin
document.getElementById("submitBtn").addEventListener("click", function () {
    const getGeneratedPin = document.getElementById("showPin").value;
    const getInputPin = document.getElementById("pinMatchInput").value;
    const pinMatch = document.getElementById("pinMatch");
    const pinError = document.getElementById("pinError");
    if (getGeneratedPin === getInputPin) {
        pinMatch.style.display = "block";
        pinError.style.display = "none"

    } else {
        pinMatch.style.display = "none";
        pinError.style.display = "block"
    }
});