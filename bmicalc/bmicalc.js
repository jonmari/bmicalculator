
function calculateTotal() {
    const inputElementFeet= document.querySelector('.feet-input');
    const inputFeettoInches = Number(inputElementFeet.value * 12);

    const inputElementInches = document.querySelector('.inches-input');
    const inputInches = Number(inputElementInches.value);

    const totalInches = Number(inputElementInches.value) + Number(inputElementFeet.value * 12);

    const inputElementWeight = document.querySelector('.weight-input');
    const inputWeight = Number(inputElementWeight.value);

    const BMI = (inputWeight * 703)/(totalInches)/(totalInches);
    const roundedBMI = Math.floor(BMI)

        if (roundedBMI < 18.5) {
         document.querySelector('.js-result').innerHTML = `Your BMI is ${roundedBMI}. You are underweight!`
        } else if (18.5 < roundedBMI && roundedBMI < 24.9) {
            document.querySelector('.js-result').innerHTML = `Your BMI is ${roundedBMI}. You are normal weight!`
        } else if (25 < roundedBMI && roundedBMI < 29.9) {
            document.querySelector('.js-result').innerHTML = `Your BMI is ${roundedBMI}. You are overweight!`
        } else if (30 < roundedBMI) {
            document.querySelector('.js-result').innerHTML = `Your BMI is ${roundedBMI}.  You are obese!`
}
}