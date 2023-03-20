// 상점에서의 아이템 정보

function Item(ATK,DEF,HP,MP) {
    this.ATK = ATK;
    this.DEF = DEF;
    this.HP = HP;
    this.MP = MP;
}

let sword = new Item(100,0,0,0);
let shield = new Item(0,80,20,0);
let drink = new Item(0,0,120,70);

let weapon = document.querySelector('.normal .item_info');
let armor = document.querySelector('.rare .item_info');
let life = document.querySelector('.legend .item_info');




weapon.innerHTML = 'ATK : ' +sword.ATK+ '&nbsp&nbsp'+ 'DEF : ' +sword.DEF+'\n'+'<br>HP : ' +sword.HP+'&nbsp&nbsp&nbsp'+ 'MP : ' +sword.MP;
armor.innerHTML = 'ATK : ' +shield.ATK+ '&nbsp&nbsp'+ 'DEF : ' +shield.DEF+'\n'+'<br>HP : ' +shield.HP+'&nbsp&nbsp&nbsp'+ 'MP : ' +shield.MP;
life.innerHTML = 'ATK : ' +drink.ATK+ '&nbsp&nbsp'+ 'DEF : ' +drink.DEF+'\n'+'<br>HP : ' +drink.HP+'&nbsp&nbsp&nbsp'+ 'MP : ' +drink.MP;


// 아이템 구매 클릭 시 발생하는 event

function buy() {
    let popup = document.querySelector('.popup_background');

    if (popup.classList.contains('is_active')) {
        popup.classList.remove('is_active');
    } else {
        popup.classList.add('is_active');
    }
}
// 돈이 부족할 때 발생하는 event

let my_money = 1500;
let item1 = 1000;
let item2 = 500;
let item3 = 400;

document.querySelector('.game_money').innerHTML=`<img src="./etherium.png"> ${my_money}`;
document.querySelector('#item1').innerHTML = `<img src="./etherium.png">${item1}`;
document.querySelector('#item2').innerHTML = `<img src="./etherium.png">${item2}`;
document.querySelector('#item3').innerHTML = `<img src="./etherium.png">${item3}`;


// yes버튼 눌렀을 때 함수

    function onclickYes() {
        let popup = document.querySelector('.popup_background');
        if (my_money - item1 >= 0) {
            popup.classList.remove('is_active');
            my_money = my_money - item1;
           
        } else if(my_money - item2 >= 0){
            popup.classList.remove('is_active');
            my_money = my_money - item2;
           
        } else if(my_money - item3 >= 0){
            popup.classList.remove('is_active');
            my_money = my_money - item3;
            
        } else{
            let want = document.querySelector('.wanna_buy') 
            want.innerHTML = "you don't have enough money!!<button class='ok2'>Okay..</button>"
            let btn = document.querySelector('.ok2');
            btn.onclick = function(){
                popup.classList.remove('is_active');
            }
        }
    }




console.log(my_money);





// function noMoney() {
//     let noPopup = document.querySelector('.noMoney_background');
//     let my_money = parseInt(document.querySelector('.game_money'));
//     let items = parseInt(document.querySelectorAll('.item_price'));
 
//     console.log(noPopup.className);
//     console.log(noPopup.classList);

//     if (noPopup.classList.contains('is_active') || my_money < items) {  // 팝업 비활성화
//         noPopup.classList.remove('is_active');  // 팝업 활성화
//     } else {
//         noPopup.classList.add('is_active'); // 팝업 비활성화
//     }
// }





// let my_money = document.querySelector('.game_money');
// let items = document.querySelectorAll('.item_price');

// function buy() {
//     if (confirm('구매하시겠습니까?')) {
//         if (my_money >= items) {
//             alert('감사합니다.');
//             my_money = my_money - items;
//         } else {
//             alert('돈이 부족합니다.');
//         }
//     } else {
       
//     }
// }





