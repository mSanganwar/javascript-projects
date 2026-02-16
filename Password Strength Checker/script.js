
const input = document.getElementById("input-box");
const infoMessage = document.getElementById('info-message')

function checkPasswordStrength(value) {

    // const regexExpression = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
    const missingInfo = [];
    // console.log(regexExpression.test(value));
    if (value.length < 8) {

        const minLength = 8 - value.length
        missingInfo.push(`Charachter length should be more or equal to the 8, enter ${minLength} charachters `)
    }

    if (!/[A-Z]/.test(value)) {
        missingInfo.push("There must be one capital Character")
    }

    if(!/[!@#$%^&*(),.?":{}|<>]/.test(value)){
        missingInfo.push("One special character required")
    }

    if(!missingInfo.length){
        return "Strong Password";
    }else{
        return missingInfo
    }

}

let isGoodStrength
if (input) {
    input.addEventListener("input", (event) => {
        const value = event?.target?.value;
        isGoodStrength = checkPasswordStrength(value);

    })


    input.addEventListener("blur", () => {
            console.log(isGoodStrength)
        infoMessage.style.color = isGoodStrength?.includes("Strong Password") ? "green" : "red"
        infoMessage.textContent = isGoodStrength
    });

}