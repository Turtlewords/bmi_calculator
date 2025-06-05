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
        range.textContent = idealWeightRange(bmi, "metric");
        
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

function idealWeightRange(height, unit) {
        
    switch (true) {
        case (unit == "metric"):
            switch(true) {
            case (height < 140):
                return "28.5kg - 34.9kg";
                break;
            case(height < 142):
                return "30.8kg - 38.1kg";
                break;
            case(height < 145):
                return "33.5kg - 40.8kg";
                break;
            case(height < 147):
                return "35.8kg - 43.9kg";
                break;
            case(height < 150):
                return "38.5kg - 46.7kg";
                break;
            case(height < 152):
                return "40.8kg - 49.9kg";
                break;
            case(height < 155):
                return "43.1kg - 53kg";
                break;
            case(height < 157):
                return "45.8kg - 55.8kg";
                break;
            case(height < 160):
                return "48.1kg - 58.9kg";
                break;
            case(height < 163):
                return "50.8kg - 61.6kg";
                break;
            case(height < 165):
                return "53kg - 64.8kg";
                break;
            case(height < 168):
                return "55.3kg - 68kg";
                break;
            case(height < 170):
                return "58kg - 70.7kg";
                break;
            case(height < 173):
                return "60.3kg - 73.9kg";
                break;
            case(height < 175):
                return "63kg - 76.6kg";
                break;
            case(height < 178):
                return "65.3kg - 79.8kg";
                break;
            case(height < 180):
                return "67.6kg - 83kg";
                break;
        }
        break;

        case (unit = "imperial"):
            case(height < 140):
                return "4st 7lbs - 5st 7lbs ";
                break;
            case(height < 142):
                return "";
                break;
    }
        
}