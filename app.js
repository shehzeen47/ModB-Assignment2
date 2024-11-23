const totmarkspersub = 100;
const numofsub = 4;

let english = 87;
let urdu = 67;
let math = 75;
let computer = 91;

let totmarksobt = english + urdu + math + computer;
// console.log(totmarksobt);

let maxTotmarks = totmarkspersub * numofsub;
// console.log(maxTotmarks);

let percentage = (totmarksobt / maxTotmarks) * 100;
// console.log(percentage);

let grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}

document.write(`<h1> Mark Sheet </h1>
                <b>English:</b> ${english} <br><br>
                <b>Urdu:</b> ${urdu} <br><br>
                <b>Math:</b> ${math} <br><br>
                <b>Computer:</b> ${computer} <br><br>
                <b>Total Marks Obtain:</b> ${maxTotmarks} / ${totmarksobt} <br><br>
                <b>Percentage:</b> ${percentage}% <br><br>
                <b>Grade:</b> ${grade} <br><br>`);

// Q2

const mobiles = {
    "Iphone": ["iPhone 15", "iPhone 14", "iPhone SE"],
    "Xiaomi": ["Mi 11", "Redmi Note 12", "Poco X5"],
    "Realme": ["realmiNote50" ,"realmiC67", "realmiC53"],
    "Samsung": ["Galaxy S23", "Galaxy A54", "Galaxy Note 20"],
};

function updateModels() {
    const brand = document.getElementById("brand");
    const modelDropdown = document.getElementById("model");
    const selectedBrand = brand.value;
    modelDropdown.innerHTML = '<option value="">Select Model</option>';

    if (selectedBrand && mobiles[selectedBrand]) {
        const models = mobiles[selectedBrand];
        for(let i = 0; i < models.length; i++) {
            const option = document.createElement('option');
            option.value = models[i];
            option.textContent = models[i];
            modelDropdown.appendChild(option);
        }
    }
}

function searchMobile() {
    const Brandres = document.getElementById('brand').value;
    const Modelres = document.getElementById('model').value;
    const output = document.getElementById('output');

    if(Brandres && Modelres) {
        output.textContent = `You selected ${Brandres} - ${Modelres}`;
    } else {
        output.textContent = `Please select both`;
    }
}