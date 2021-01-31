function getPin() {
  const random = Math.random() * 10000;
  const pin = (random + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    console.log("shorter pin", pin);
    return getPin(); //! recursive function
  }
}

// display generated pin
function generatePin() {
  const pinInput = document.getElementById("pin");
  pinInput.value = getPin();
  document.getElementById("attempt").style.display = "block";
}

// handle calculator button event
const buttonContainer = document.getElementById("digits-container");
buttonContainer.addEventListener("click", function (event) {
  const digit = event.target.innerText;

  if (isNaN(digit)) {
    // handle backspace
    // handle clear
    if (digit === "C") {
      document.getElementById("typed-pin").value = "";
    }
    if (digit === "<") {
      const typedValue = document.getElementById("typed-pin").value;
      document.getElementById("typed-pin").value = typedValue.substr(
        0,
        typedValue.length - 1
      );
    }
  } else {
    const typedInput = document.getElementById("typed-pin");
    typedInput.value = typedInput.value + digit;
  }
});

function verifyPin() {
  const pin = document.getElementById("pin").value;
  const typedPin = document.getElementById("typed-pin").value;

  if (pin === typedPin) {
    // document.getElementById("correct-pin").style.display = "block";
    // document.getElementById("incorrect-pin").style.display = "none";

    displayMatchResult("block", "none");
  } else {
    // document.getElementById("correct-pin").style.display = "none";
    // document.getElementById("incorrect-pin").style.display = "block";

    displayMatchResult("none", "block");
    document.getElementById("attempt").style.display = "block";

    const attempt = document.getElementById("number").innerText;
    if (attempt > 1) {
      document.getElementById("number").innerText = parseInt(attempt) - 1;
    } else {
      document.getElementById("attempt").innerText = "TRY AGAIN PLEASE";
      const btn = document.getElementsByClassName("submit-btn");
      btn[0].disabled = true;
      btn[0].style.background = "gray";
      console.log(btn);
    }

    console.log(attempt);
  }
}

function displayMatchResult(correctStatus, incorrectStatus) {
  const correct = document.getElementById("correct-pin");
  correct.style.display = correctStatus;
  const incorrect = document.getElementById("incorrect-pin");
  incorrect.style.display = incorrectStatus;
}
