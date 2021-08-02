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
    console.log("Addition Succesfull");
  });

  mulCal.mousePressed(() => {
    console.log("Addition Succesfull");
  });

  divCal.mousePressed(() => {
    console.log("Addition Succesfull");
  });
}
