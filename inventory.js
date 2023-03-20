let selectIndex = 0;
let selectAtkItem = null;
function atkcount1(type) {
    const resultElement = document.getElementById('atkresult');
    if(selectAtkItem != null) // 괄호 없으면 바로 밑에 한줄만 영역
    document.querySelectorAll(".atk-item")[selectIndex].innerHTML = selectAtkItem;
    selectAtkItem = document.querySelectorAll(".atk-item")[0].innerHTML;
    selectIndex = 0;
    let number = resultElement.innerText;
    if(type === 'plus') {
      number = 10;
    }
    document.querySelector('#atkInput1').remove()// remove 함수 중요! 많이 사용함
    resultElement.innerText = number;
  }
  
function atkcount2(type) {
    const resultElement = document.getElementById('atkresult');
    document.querySelectorAll(".atk-item")[selectIndex].innerHTML = selectAtkItem;
    if(selectAtkItem != null)
    selectAtkItem = document.querySelectorAll(".atk-item")[1].innerHTML;
    selectIndex = 1;

    let number = resultElement.innerText;
    if(type === 'plus') {
      number = 15;
    }
    document.querySelector('#atkInput2').remove() // remove 함수 중요! 많이 사용함
    resultElement.innerText = number;
  }
  
function atkcount3(type) {
    const resultElement = document.getElementById('atkresult');
    if(selectAtkItem != null)
    document.querySelectorAll(".atk-item")[selectIndex].innerHTML = selectAtkItem;
    selectAtkItem = document.querySelectorAll(".atk-item")[2].innerHTML;
    selectIndex = 2;

    let number = resultElement.innerText;
    if(type === 'plus') {
      number = 20;
    }
    document.querySelector('#atkInput3').remove() // remove 함수 중요! 많이 사용함
    resultElement.innerText = number;
  }
  
function atkcount4(type) {
    const resultElement = document.getElementById('atkresult');
    if(selectAtkItem != null)
    document.querySelectorAll(".atk-item")[selectIndex].innerHTML = selectAtkItem;

    selectAtkItem = document.querySelectorAll(".atk-item")[3].innerHTML;
    selectIndex = 3;

    let number = resultElement.innerText;
    if(type === 'plus') {
      number = 25;
    }
    document.querySelector('#atkInput4').remove() // remove 함수 중요! 많이 사용함
    resultElement.innerText = number;
  }
  
  //---------def--------------------------------------------------------------------
  let selectIndex1 =0
  let selectDefItem =null; 

function defcount1(type) {
    const resultElement = document.getElementById('defresult');
    if(selectDefItem != null)
    document.querySelectorAll(".def-item")[selectIndex1].innerHTML = selectDefItem;
    selectDefItem = document.querySelectorAll(".def-item")[0].innerHTML;
    selectIndex1 = 0;
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = 15;
    }
    document.querySelector('#defInput1').remove()
    resultElement.innerText = number;
  }
function defcount2(type) {
    const resultElement = document.getElementById('defresult');
    if(selectDefItem != null)
    document.querySelectorAll(".def-item")[selectIndex1].innerHTML = selectDefItem;
    selectDefItem = document.querySelectorAll(".def-item")[1].innerHTML;
    selectIndex1 = 1;
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = 20;
    }
    document.querySelector('#defInput2').remove()
    resultElement.innerText = number;
  }
function defcount3(type) {
    const resultElement = document.getElementById('defresult');
    if(selectDefItem != null)
    document.querySelectorAll(".def-item")[selectIndex1].innerHTML = selectDefItem;
    selectDefItem = document.querySelectorAll(".def-item")[2].innerHTML;
    selectIndex1 = 2;
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = 25;
    }
    document.querySelector('#defInput3').remove()
    resultElement.innerText = number;
  }
function defcount4(type) {
    const resultElement = document.getElementById('defresult');
    if(selectDefItem != null)
    document.querySelectorAll(".def-item")[selectIndex1].innerHTML = selectDefItem;
    selectDefItem = document.querySelectorAll(".def-item")[3].innerHTML;
    selectIndex1 = 3;
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = 30;
    }
    document.querySelector('#defInput4').remove()
    resultElement.innerText = number;
  }
//------------hp-------------------------------------------------------------------------------------------
let selectIndex2 =0
let selectHpItem =null; 

function hpcount1(type) {
    const resultElement = document.getElementById('hpfresult');
    if(selectHpItem != null)
    document.querySelectorAll(".hp-item")[selectIndex2].innerHTML = selectHpItem;
    selectHpItem = document.querySelectorAll(".hp-item")[0].innerHTML;
    selectIndex2 = 0;
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = 15;
    }
    document.querySelector('#hpInput1').remove()
    resultElement.innerText = number;
  }
function hpcount2(type) {
    const resultElement = document.getElementById('hpfresult');
    if(selectHpItem != null)
    document.querySelectorAll(".hp-item")[selectIndex2].innerHTML = selectHpItem;
    selectHpItem = document.querySelectorAll(".hp-item")[1].innerHTML;
    selectIndex2 = 1;
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = 20;
    }
    document.querySelector('#hpInput2').remove()
    resultElement.innerText = number;
  }
function hpcount3(type) {
    const resultElement = document.getElementById('hpfresult');
    if(selectHpItem != null)
    document.querySelectorAll(".hp-item")[selectIndex2].innerHTML = selectHpItem;
    selectHpItem = document.querySelectorAll(".hp-item")[2].innerHTML;
    selectIndex2 = 2;
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = 25;
    }
    document.querySelector('#hpInput3').remove()
    resultElement.innerText = number;
  }
function hpcount4(type) {
    const resultElement = document.getElementById('hpfresult');
    if(selectHpItem != null)
    document.querySelectorAll(".hp-item")[selectIndex2].innerHTML = selectHpItem;
    selectHpItem = document.querySelectorAll(".hp-item")[3].innerHTML;
    selectIndex2 = 3;
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = 30;
    }
    document.querySelector('#hpInput4').remove()
    resultElement.innerText = number;
  }