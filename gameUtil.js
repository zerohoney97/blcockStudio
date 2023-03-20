function validateGameOver(heroHp, villanHp) {
  console.log(heroHp, "----", villanHp);
  if (heroHp <= 0) {
    alert("스파이더맨이 주겄서");
  } else if (villanHp <= 0) {
    let villanImg = document.querySelector("div .zerohoney-villan-image");
    let heroImg = document.querySelector("div .zerohoney-hero-image");
    villanImg.remove();
    heroImg.remove();
    stage++;
    alert("당신은 세계를 구했습니다.");
    switch (stage) {
      case 1:
        mainVillan.who = villans.electro.who;
        mainVillan.info = villans.electro.info;
        document.querySelector(
          "#zerohoney-main-stage-third-row-forth"
        ).innerHTML = venomNormal;
        document.querySelector(
          "#zerohoney-main-stage-first-row-first"
        ).innerHTML = spiderManNormal;
        zerohoneyBeforeVillanTile = "";
        break;
      case 2:
        mainVillan.who = villans.venom.who;
        mainVillan.info = villans.venom.info;
        mainVillan.normal = villans.venom.normal;
        mainVillan.damaged = villans.venom.damaged;
        mainVillan.attack = villans.venom.attack;
        mainVillan.defense = villans.venom.defense;
        mainVillan.skill = villans.venom.skill;
        document.querySelector(
          "#zerohoney-main-stage-third-row-forth"
        ).innerHTML = thanosNormal;
        document.querySelector(
          "#zerohoney-main-stage-first-row-first"
        ).innerHTML = spiderManNormal;
        zerohoneyBeforeVillanTile = "";
        break;
      case 3:
        mainVillan.who = villans.thanos.who;
        mainVillan.info = villans.thanos.info;
        mainVillan.normal = villans.thanos.normal;
        mainVillan.damaged = villans.thanos.damaged;
        mainVillan.attack = villans.thanos.attack;
        mainVillan.defense = villans.thanos.defense;
        mainVillan.skill = villans.thanos.skill;
        break;
    }
  }
}
