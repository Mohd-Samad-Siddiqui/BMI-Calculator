const form = document.querySelector('form');
const result = document.querySelector('.result');
const para = document.querySelector('.para');
const wrongValue = document.querySelector('#wrongValue');
const li = document.querySelectorAll('.option');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.getElementById('heightField').value);
  const weight = parseInt(document.getElementById('weightField').value);

  if(height === '' || height <= 0 || isNaN(height)){
    wrongValue.innerHTML = `<span>${height} is invalid height</span>`
    wrongValue.style.display = 'block';
  }
  else if(weight === '' || weight <= 0 || isNaN(weight)){
    wrongValue.innerHTML = `<span>${weight} is invalid weight</span>`
    wrongValue.style.display = 'block';
  }
  else{
    let bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
    result.innerHTML = `<span>BMI: ${bmiValue}</span>`
    para.innerHTML = `<span><b>Note:</b> Reload the page to try again</span>`
    result.style.display = 'block';
    para.style.display = 'block';

    for(let i=0; i<li.length; i++){
      if(i == 0 && bmiValue < 18.5){
        li[i].style.fontWeight = '900';
      }
      else if(i == 1 && bmiValue >= 18.5 && bmiValue <24.9){
        li[i].style.fontWeight = '900';
      }
      else if(i == 2 && bmiValue >= 25 && bmiValue < 29.9){
        li[i].style.fontWeight = '900';
      }
      else if(i == 3 && bmiValue >= 30 && bmiValue < 34.9){
        li[i].style.fontWeight = '900';
      }
      else if(i == 4 && bmiValue >= 35 && bmiValue < 39.9){
        li[i].style.fontWeight = '900';
      }
      else if(i == 5 && bmiValue >= 40){
        li[i].style.fontWeight = '900';
      }
    }
      
  }
})

