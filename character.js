function hero(atk, def, hp) {
  this.atk = atk;
  this.def = def;
  this.hp = hp;
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

function calculateDmg(villan, hero, villanInfo, whoAttack) {
  // 히어로가 공격할 때
  if (whoAttack === "hero") {
    if (villan === "electro") {
      villanInfo.hp -= hero.atk;
      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 100})`;
      validateGameOver(hero.hp, villanInfo.hp);
    } else if (villan === "venom") {
      villanInfo.hp -= hero.atk;
      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 150})`;
      validateGameOver(hero.hp, villanInfo.hp);
    } else {
      villanInfo.hp -= hero.atk;
      document.querySelector(
        "#zerohoney-in-hpbar-right-id"
      ).style.transform = `scaleX(${villanInfo.hp / 300})`;
      validateGameOver(hero.hp, villanInfo.hp);
    }
    // 빌런이 공격할 때
  } else if (whoAttack === "villan") {
    hero.hp -= villanInfo.atk;
    document.querySelector(
      "#zerohoney-in-hpbar-left-id"
    ).style.transform = `scaleX(${hero.hp / 150})`;
    validateGameOver(hero.hp, villanInfo.hp);
  }
}
