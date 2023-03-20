function hero(atk, def, hp, weapon, armor, hpItem) {
  this.atk = atk;
  this.def = def;
  this.hp = hp;
  this.weapon = weapon;
  this.armor = armor;
  this.hpItem = hpItem;
}

function villan(atk, def, hp) {
  this.atk = atk;
  this.def = def;
  this.hp = hp;
}

let spiderMan = new hero(15, 15, 150);

let electro = new villan(10, 10, 100);
let venom = new villan(20, 20, 150);
let thanos = new villan(30, 30, 300);
function reward(params) {
  let getMoney = parseInt(Math.random() * 20);
  let uniqueReward = parseInt(Math.random() * 30);

  if (uniqueReward <= 2) {
    return "unique";
  }

  return 100 * getMoney;
}

function calculateDmg(villan, hero, villanInfo, whoAttack, isSkill) {
  isSkill
    ? skillAttaack(villan, hero, villanInfo, whoAttack)
    : normalAttack(villan, hero, villanInfo, whoAttack);
}

function normalAttack(villan, hero, villanInfo, whoAttack) {
  // 치명타
  let critical = parseInt(Math.random() * 10 + 1);
  if (whoAttack === "hero") {
    if (villan === "electro") {
      critical <= 2
        ? (villanInfo.hp -= hero.atk * 2)
        : (villanInfo.hp -= hero.atk * 2);

      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 100})`;
      validateGameOver(hero.hp, villanInfo.hp);
    } else if (villan === "venom") {
      critical <= 2
        ? (villanInfo.hp -= hero.atk * 2)
        : (villanInfo.hp -= hero.atk * 2);

      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 150})`;

      validateGameOver(hero.hp, villanInfo.hp);
    } else {
      critical <= 2
        ? (villanInfo.hp -= hero.atk * 2)
        : (villanInfo.hp -= hero.atk * 2);

      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 300})`;
      validateGameOver(hero.hp, villanInfo.hp);
    }
    // 스파이더맨의 데미지 로그
    critical <= 2
      ? (document.querySelector(
          ".dmg-log-hero"
        ).innerHTML = `스파이더맨이(가) ${villan}에게 ${villanInfo.atk}만큼 <span style='color:red'>치명타!!</span>데미지를 입혔습니다!`)
      : (document.querySelector(
          ".dmg-log-hero"
        ).innerHTML = `스파이더맨이(가) ${villan}에게 ${villanInfo.atk}만큼 데미지를 입혔습니다!`);
    // 빌런이 공격할 때
  } else if (whoAttack === "villan") {
    hero.hp -= villanInfo.atk * ((100 - hero.def) / 100);
    document.querySelector(
      "#zerohoney-in-hpbar-left-id"
    ).style.transform = `scaleX(${hero.hp / 150})`;
    // 빌런의 데미지 로그
    document.querySelector(
      ".dmg-log-villan"
    ).innerHTML = `${villan}이(가) 스파이더맨에게 ${villanInfo.atk}만큼 데미지를 입혔습니다!`;
    validateGameOver(hero.hp, villanInfo.hp);
  }
}

function skillAttaack(villan, hero, villanInfo, whoAttack) {
  if (whoAttack === "hero") {
    if (villan === "electro") {
      villanInfo.hp -= hero.atk * 1.5;
      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 100})`;
      validateGameOver(hero.hp, villanInfo.hp);
    } else if (villan === "venom") {
      villanInfo.hp -= hero.atk * 1.5;
      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 150})`;
      validateGameOver(hero.hp, villanInfo.hp);
    } else {
      villanInfo.hp -= hero.atk * 1.5;
      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 300})`;
      validateGameOver(hero.hp, villanInfo.hp);
    }
    document.querySelector(
      ".dmg-log-hero"
    ).innerHTML = `스파이더맨이(가) ${villan}에게 ${
      villanInfo.atk * 1.5
    }만큼 데미지를 입혔습니다!`;
    // 빌런이 공격할 때
  } else if (whoAttack === "villan") {
    hero.hp -= villanInfo.atk * 1.5 * ((100 - hero.def) / 100);

    document.querySelector(
      "#zerohoney-in-hpbar-left-id"
    ).style.transform = `scaleX(${hero.hp / 150})`;
    document.querySelector(
      ".dmg-log-villan"
    ).innerHTML = `${villan}이(가) 스파이더맨에게 ${
      villanInfo.atk * 1.5
    }만큼 데미지를 입혔습니다!`;
    validateGameOver(hero.hp, villanInfo.hp);
  }
}
