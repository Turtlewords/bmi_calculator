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

                if (parseInt(heightMetric.value) < 140) {
                    alert("Please enter a height greater than 140cm");
                    return;
                }
                if (parseInt(heightMetric.value) > 200) {
                    alert("Please enter a height less than 200cm");
                    return;
                }
                calculateBMI(heightMetric.value, weightMetric.value, "metric");
            }
        }
    })
})

imperialInputs.forEach((input) => {
    input.addEventListener("change", () => {
        let count = 0;
        for (let x of imperialInputs) {
            if (x.value != "") {
                count++;
            } 
            
            
            
            if (count == imperialInputs.length) {
                let inches = (parseInt(ftImperial.value) * 12) + parseInt(inImperial.value);
                let inchesToCm = Math.floor(inches * 2.54);
                let lbs = (parseInt(stImperial.value) * 14) + parseInt(lbsImperial.value)
                let lbsToKg = Math.floor(lbs * 0.4535);

                console.log("Feet: " + ftImperial.value)
                console.log("Inches: " + inches)
                console.log("InchesToCm: " + inchesToCm);
                console.log("lbs: " + lbs)
                console.log("lbsToKG: " + lbsToKg)
                if (inchesToCm < 140) {
                    alert("Please enter a height greater than 4ft 7in");
                    return;
                }
                if (inchesToCm > 200) {
                    alert("Please enter a height less than 6ft 6in");
                    return;
                }

                calculateBMI(inchesToCm, lbsToKg, "imperial");
            }
        }
    })
})




// Functions

function showImperialForm() {
    imperialMeasurements.style.height = "initial";
    imperialMeasurements.style.width = "initial";
    imperialMeasurements.style.overflow = "";
    heightMetric.value = ""
    weightMetric.value = ""
    metricMeasurements.style.height = "0";
    metricMeasurements.style.height = "0";
    metricMeasurements.style.overflow = "hidden";
}

function showMetricForm() {
    metricMeasurements.style.height = "initial";
    metricMeasurements.style.width = "initial";
    metricMeasurements.style.overflow = "";
    ftImperial.value = "";
    inImperial.value = "";
    stImperial.value = "";
    lbsImperial.value = "";

    imperialMeasurements.style.height = "0";
    imperialMeasurements.style.height = "0";
    imperialMeasurements.style.overflow = "hidden";
}

function calculateBMI(height, weight, unit) {
        let bmi = weight / Math.pow(height / 100, 2)
        
        welcome.style.display = "none";
        output.style.display = "flex";
        bmiResult.textContent = bmi.toFixed(1);

        classification.textContent = checkBMIRange(bmi);
        range.textContent = idealWeightRange(bmi, unit);
        
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
            case(height < 183):
                return "70.3kg - 85.7kg";
                break;
            case(height < 185):
                return "72.6kg - 88.9kg";
                break;
            case(height < 188):
                return "75.3kg - 91.6kg";
                break;
            case(height < 191):
                return "77.5kg - 94.8kg";
                break;
            case(height < 193):
                return "79.8kg - 98kg";
                break;
            case(height < 195):
                return "82.5kg - 100.6kg";
                break;
            case(height < 198):
                return "84.8kg - 103.8kg";
                break;
            case(height < 201):
                return "87.5kg - 106.5kg";
                break;
            
            
        }
        break;

        case (unit = "imperial"):
            case(height < 140):
                return "4st 7lbs - 5st 7lbs ";
                break;
            case(height < 142):
                return "4st 12lbs - 6st";
                break;
            case(height < 145):
                return "5.4st - 6st 6lbs";
                break;
            case(height < 147):
                return "5st 9lbs - 6st 13lbs";
                break;
            case(height < 150):
                return "6st 1lb - 7st 5lb";
                break;
            case(height < 152):
                return "6st 6lbs - 7st 12lbs";
                break;
            case(height < 155):
                return "6st 11lbs - 8st 5lbs";
                break;
            case(height < 157):
                return "7st 3lbs - 8st 11lbs";
                break;
            case(height < 160):
                return "7st 8lbs - 9st 4lbs";
                break;
            case(height < 163):
                return "7st 8lbs - 9st 1lbs";
                break;
            case(height < 165):
                return "8st 5lbs - 10st 3lbs";
                break;
            case(height < 168):
                return "8st 10lbs - 10st 10lbs";
                break;
            case(height < 170):
                return "9st 2lbs - 11st 2lbs";
                break;
            case(height < 173):
                return "9st 7lbs - 11st 9lbs";
                break;
            case(height < 175):
                return "9st 13lbs - 12st 1lb";
                break;
            case(height < 178):
                return "10st 4lbs - 12st 8lbs";
                break;
            case(height < 180):
                return "10st 9lbs - 13st 1lb";
                break;
            case(height < 183):
                return "11st lb - 13st 7lbs";
                break;
            case(height < 185):
                return "11st 6lbs - 14st";
                break;
            case(height < 188):
                return "11st 12lbs - 14st 6lbs";
                break;
            case(height < 191):
                return "12st 3lbs - 14st 13lbs";
                break;
            case(height < 193):
                return "12st 8lbs - 15st 6lbs";
                break;
            case(height < 195):
                return "13st - 15st 12lbs";
                break;
            case(height < 198):
                return "13st 5lbs - 16st 5lbs";
                break;
            case(height < 201):
                return "13st 11lbs - 16st 11lbs";
                break;
    }
        
}