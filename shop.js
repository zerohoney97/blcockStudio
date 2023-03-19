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

let weapon = document.querySelector('.weapon .item_info');
let armor = document.querySelector('.armor .item_info');
let life = document.querySelector('.life .item_info');

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

function noMoney() {
    let noPopup = document.querySelector('.noMoney_background');
    let my_money = parseInt(document.querySelector('.game_money'));
    let items = parseInt(document.querySelectorAll('.item_price'));
 
    console.log(noPopup.className);
    console.log(noPopup.classList);

    if (noPopup.classList.contains('is_active') || my_money < items) {  // 팝업 비활성화
        noPopup.classList.remove('is_active');  // 팝업 활성화
    } else {
        noPopup.classList.add('is_active'); // 팝업 비활성화
    }
}





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





