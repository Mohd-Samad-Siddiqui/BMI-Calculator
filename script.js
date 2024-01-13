const heightElement = document.querySelector('#heightField');
const weightElement = document.querySelector('#weightField');
const submitBtn = document.querySelector("#submit");
let bmiValue = 0;
const height = heightElement.value;
const weight = weightElement.value;

submitBtn.addEventListener(onclick, ()=>{
  bmiValue = weight/((height/100)**2);
  console.log(bmiValue);
  console.log(height);
  console.log(weight);
})

