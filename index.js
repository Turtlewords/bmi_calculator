// Elements

const metricRadio = document.querySelector("#metric");
const imperialRadio = document.querySelector("#imperial");

const metricMeasurements = document.querySelector("#metric-measurements")
const heightMetric = document.querySelector("#height-metric");
const weightMetric = document.querySelector("#weight-metric");

const metricInputs = document.querySelectorAll(".metric-input");

const imperialMeasurements = document.querySelector("#imperial-measurements")
const ftImperial = document.querySelector("#ft-imperial");
const inImperial = document.querySelector("#in-imperial");
const stImperial = document.querySelector("#st-imperial");
const lbsImperial = document.querySelector("#lbs-imperial");

const imperialInputs = document.querySelectorAll(".imperial-input");

const welcome = document.querySelector("#welcome");
const output = document.querySelector("#output");
const bmiResult = document.querySelector("#bmi-result");
const classification = document.querySelector("#classification");
const range = document.querySelector("#range");


// Variables

let isMetric = true;
let isImperial = false;


// Event Listeners


metricRadio.addEventListener("change", showMetricForm);
imperialRadio.addEventListener("change", showImperialForm);

metricInputs.forEach((input) => {
    input.addEventListener("change", () => {
        let count = 0;
        for (let x of metricInputs) {
            if (x.value != "") {
                count++;
            } 
            if (count == metricInputs.length) {
                calculateMetricBMI(heightMetric.value, weightMetric.value);
            }
        }
    })
})




// Functions

function showImperialForm() {
    imperialMeasurements.style.height = "initial";
    imperialMeasurements.style.width = "initial";
    imperialMeasurements.style.overflow = "";
    // heightMetric.value = ""
    // weightMetric.value = ""
    metricMeasurements.style.height = "0";
    metricMeasurements.style.height = "0";
    metricMeasurements.style.overflow = "hidden";
}

function showMetricForm() {
    metricMeasurements.style.height = "initial";
    metricMeasurements.style.width = "initial";
    metricMeasurements.style.overflow = "";
    // ftImperial.value = "";
    // inImperial.value = "";
    // stImperial.value = "";
    // lbsImperial.value = "";

    imperialMeasurements.style.height = "0";
    imperialMeasurements.style.height = "0";
    imperialMeasurements.style.overflow = "hidden";
}

function calculateMetricBMI(height, weight) {
        let bmi = weight / Math.sqrt(height / 100)
        
        welcome.style.display = "none";
        output.style.display = "block";
        bmiResult.textContent = bmi.toFixed(2);

        classification.textContent = checkBMIRange(bmi);
        
}

function checkBMIRange(num) {
    switch(true) {
        case (num < 18.5):
            return "underweight";
            break;
        case (num < 25):
            return "a healthy weight";
            break;
        case (num < 30):
            return "overweight";
            break;
        case (num >= 30):
            return "obese";
    }
}