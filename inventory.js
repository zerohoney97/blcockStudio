function atkcount(type) {
    const resultElement = document.getElementById('atkresult');
    let number = resultElement.innerText;
    if(type === 'plus') {
      number = parseInt(number) + 10;
    }
    resultElement.innerText = number;
  }
  
function defcount(type) {
    const resultElement = document.getElementById('defresult');
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = parseInt(number) + 20;
    }
    resultElement.innerText = number;
  }

function hpcount(type) {
    const resultElement = document.getElementById('hpfresult');
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = parseInt(number) + 15;
    }
    resultElement.innerText = number;
  }