// Variables.
let addCal, subCal, mulCal, divCal;
let ans1, ans2, ans3, ans4;

let xAdd, yAdd;
let xSub, ySub;
let xMul, yMul;
let xDiv, yDiv;

function setup(params) {
  xAdd = select("#xAdd");
  xSub = select("#xSub");
  xMul = select("#xMul");
  xDiv = select("#xDiv");

  yAdd = select("#yAdd");
  ySub = select("#ySub");
  yMul = select("#yMul");
  yDiv = select("#yDiv");

  addCal = select("#addCal");
  subCal = select("#subCal");
  mulCal = select("#mulCal");
  divCal = select("#divCal");
}

function draw(params) {
  addCal.mousePressed(() => {
    console.log("Addition Succesfull");
    ans1 = xAdd.value() + yAdd.value();
    console.log(ans1);
  });

  subCal.mousePressed(() => {
    console.log("Subtraction Succesfull");
    ans2 = xSub.value() - ySub.value();
    console.log(ans2);
  });

  mulCal.mousePressed(() => {
    console.log("Multiplication Succesfull");
    ans3 = xMul.value() * yMul.value();
    console.log(ans3);
  });

  divCal.mousePressed(() => {
    console.log("Division Succesfull");
    ans4 = xDiv.value() / yDiv.value();
    console.log(ans4);
  });
}
