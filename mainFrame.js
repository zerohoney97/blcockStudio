// 스파이더맨
let spiderManNormal =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_normal.png" alt="" />';
let spiderManDamaged =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_damaged.png" alt="" />';
let spiderManDefense =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_defense.png" alt="" />';
let spiderManAttack =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_attack.png" alt="" />';
let spiderManAttack2 =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_attack2.png" alt="" />';
let spiderManSkill =
  '<img class="zerohoney-hero-image" src="./resource/image/spiderman_skill.png" alt="" />';

// 일렉트로
let electroNormal =
  '<img class="zerohoney-villan-image" src="./resource/image/electro_normal.png" alt="" />';
let electroDamaged =
  '<img class="zerohoney-villan-image" src="./resource/image/electro_damaged.png" alt="" />';
let electroDefense =
  '<img class="zerohoney-villan-image" src="./resource/image/electro_defense.png" alt="" />';
let electroAttack =
  '<img class="zerohoney-villan-image" src="./resource/image/electro_attack.png" alt="" />';
let electroSkill =
  '<img class="zerohoney-villan-image" src="./resource/image/electro_skill.png" alt="" />';
// 베놈
let venomNormal =
  '<img class="zerohoney-villan-image" src="./resource/image/venom_normal.png" alt="" />';
let venomDamaged =
  '<img class="zerohoney-villan-image" src="./resource/image/venom_damaged.png" alt="" />';
let venomDefense =
  '<img class="zerohoney-villan-image" src="./resource/image/venom_defense.png" alt="" />';
let venomAttack =
  '<img class="zerohoney-villan-image" src="./resource/image/venom_attack.png" alt="" />';
let venomSkill =
  '<img class="zerohoney-villan-image" src="./resource/image/venom_skill.png" alt="" />';
// 타노스
let thanosNormal =
  '<img class="zerohoney-villan-image" src="./resource/image/thanos_normal.png" alt="" />';
let thanosDamaged =
  '<img class="zerohoney-villan-image" src="./resource/image/thanos_dameged.png" alt="" />';
let thanosDefense =
  '<img class="zerohoney-villan-image" src="./resource/image/thanos_defense.png" alt="" />';
let thanosAttack =
  '<img class="zerohoney-villan-image" src="./resource/image/thanos_attack.png" alt="" />';
let thanosSkill =
  '<img class="zerohoney-villan-image" src="./resource/image/thanos_skill.png" alt="" />';

//   전역변수
let zerohoneyTurn = "hero";
// 히어로의 현재 위치
let zerohoneyBeforeHeroTile = "";
// 빌런의 현재 위치
let zerohoneyBeforeVillanTile = "";
let isAuto = true;
// 빌런을 담고 있는 오브젝트
let villans = {
  electro: {
    who: "electro",
    info: electro,
    normal: electroNormal,
    defense: electroDefense,
    damaged: electroDamaged,
    attack: electroAttack,
    skill: electroSkill,
  },
  venom: {
    who: "venom",
    info: venom,
    normal: venomNormal,
    defense: venomDefense,
    damaged: venomDamaged,
    attack: venomAttack,
    skill: venomSkill,
  },
  thanos: {
    who: "thanos",
    info: thanos,
    normal: thanosNormal,
    defense: thanosDefense,
    damaged: thanosDamaged,
    attack: thanosAttack,
    skill: thanosSkill,
  },
};
// 현재 빌런
let mainVillan = {
  who: villans.electro.who,
  info: villans.electro.info,
  normal: villans.electro.normal,
  defense: villans.electro.defense,
  damaged: villans.electro.damaged,
  attack: villans.electro.attack,
  skill: villans.electro.skill,
};
let stage = 1;
let zerohoneyChangeStringNumberToInteger = {
  first: 1,
  second: 2,
  third: 3,
  forth: 4,
};
let zerohoneyChangeStringIntegerToNumber = {
  1: "first",
  2: "second",
  3: "third",
  4: "forth",
};
// 로드시 빌런생성
window.onload = () => {
  document.querySelector("#zerohoney-main-stage-third-row-forth").innerHTML =
    mainVillan.normal;
};
// 이동하기
document
  .querySelector(".zerohoney-main-stage")
  .addEventListener("click", (a) => {
    heroAction(a);
  });

// 공격키
document.querySelector("#zerohoney-attack-id").addEventListener("click", () => {
  heroAttack();
});
// 스킬키
document.querySelector("#zerohoney-skill-id").addEventListener("click", () => {
  heroSkill();
});

function changeIdToHeroLocation() {
  let heroLocation = [
    zerohoneyChangeStringNumberToInteger[
      zerohoneyBeforeHeroTile.id.toString().split("-")[3]
    ],
    zerohoneyChangeStringNumberToInteger[
      zerohoneyBeforeHeroTile.id.toString().split("-")[5]
    ],
  ];
  return heroLocation;
}

function changeIdToVillanLocation() {
  let villanLocation = [
    zerohoneyChangeStringNumberToInteger[
      zerohoneyBeforeVillanTile.id.toString().split("-")[3]
    ],
    zerohoneyChangeStringNumberToInteger[
      zerohoneyBeforeVillanTile.id.toString().split("-")[5]
    ],
  ];
  return villanLocation;
}

// 빌런의 행동을 결정하는 함수(자동이기 때문에 재귀로 돌려도 상관 없음)
function validationVillanMovement(beforeTile) {
  let ran = parseInt(Math.random() * 6 + 1);
  let beforeTileId = beforeTile.id.toString();
  let beforeTileArray = beforeTileId.split("-");
  let row = zerohoneyChangeStringNumberToInteger[beforeTileArray[3]];
  let column = zerohoneyChangeStringNumberToInteger[beforeTileArray[5]];
  if (ran === 1) {
    if (row === 1) {
      row += 2; //2
    }
    return `zerohoney-main-stage-${
      zerohoneyChangeStringIntegerToNumber[row - 1]
    }-row-${zerohoneyChangeStringIntegerToNumber[column]}`;
  } else if (ran === 2) {
    if (row === 3) {
      row -= 2;
    }
    return `zerohoney-main-stage-${
      zerohoneyChangeStringIntegerToNumber[row + 1]
    }-row-${zerohoneyChangeStringIntegerToNumber[column]}`;
  } else if (ran === 3) {
    if (column === 1) {
      column += 2;
    }
    return `zerohoney-main-stage-${
      zerohoneyChangeStringIntegerToNumber[row]
    }-row-${zerohoneyChangeStringIntegerToNumber[column - 1]}`;
  } else if (ran === 4) {
    if (column === 4) {
      column -= 2;
    }
    return `zerohoney-main-stage-${
      zerohoneyChangeStringIntegerToNumber[row]
    }-row-${zerohoneyChangeStringIntegerToNumber[column + 1]}`;
  } else {
    return "villanAttack";
  }
}

// 히어로의 이동 방향을 결정해주는 함수(수동이기 때문에 한번에 끝내야함)
function validationHeroMovement(clickedTile) {
  // 맨처음에는 전 타일이 없으므로
  let beforeTileId = zerohoneyBeforeHeroTile.id.toString();
  let beforeTileArray = beforeTileId.split("-");
  let row = zerohoneyChangeStringNumberToInteger[beforeTileArray[3]];
  let column = zerohoneyChangeStringNumberToInteger[beforeTileArray[5]];

  let clickedTileId = clickedTile.id.toString();
  let clickedTileArray = clickedTileId.split("-");
  let newRow = zerohoneyChangeStringNumberToInteger[clickedTileArray[3]];
  let newColumn = zerohoneyChangeStringNumberToInteger[clickedTileArray[5]];
  // 같은 행의 1칸 앞뒤 확인
  if (row === newRow && Math.abs(newColumn - column) <= 1) {
    return true;
  } else if (Math.abs(newRow - row) <= 1 && newColumn === column) {
    // 다른 행의 같은 열인지 확인
    return true;
  } else {
    return false;
  }
}

// 히어로의 행동을 시작하는 함수(클릭했을 때)
function heroAction(clickedTile) {
  // 본 코드는 다음과 같은 규칙을 따른다.
  let selectedTile = document.querySelector(`#${clickedTile.target.id}`);
  let heroImg = document.querySelector("div .zerohoney-hero-image");
  let villanImg = document.querySelector("div .zerohoney-villan-image");
  // 만약 선택한 타일의 아이디에 히어로가 없다면,빌런의 타일과 겹쳐지는걸 방지
  if (selectedTile.tagName !== "IMG") {
    if (zerohoneyBeforeHeroTile === "") {
      zerohoneyBeforeHeroTile = document.querySelector(
        "#zerohoney-main-stage-first-row-first"
      );
    }
    if (
      // 맨 처음 시작이거나 이동방향을 만족 했을 때
      validationHeroMovement(selectedTile)
    ) {
      // 히어로 이미지 제거
      heroImg.remove();
      selectedTile.innerHTML = spiderManNormal;
      zerohoneyBeforeHeroTile = selectedTile;
      villanAction(villanImg);
    }
  }
}

// 히어로 일반공격
function heroAttack() {
  if (zerohoneyBeforeHeroTile !== "" && zerohoneyBeforeVillanTile !== "") {
    let heroLocation = changeIdToHeroLocation(zerohoneyBeforeHeroTile);
    let villanLocation = changeIdToVillanLocation(zerohoneyBeforeVillanTile);
    if (
      Math.abs(villanLocation[0] - heroLocation[0]) <= 1 &&
      Math.abs(villanLocation[1] - heroLocation[1]) <= 1
    ) {
      calculateDmg(mainVillan.who, spiderMan, mainVillan.info, "hero", false);
    }
    //   스파이더맨이 공격했다면 빌런이 다음행동을 해야함
    let villanImg = document.querySelector("div .zerohoney-villan-image");
    villanAction(villanImg);
  }
}

function heroSkill() {
  if (zerohoneyBeforeHeroTile !== "" && zerohoneyBeforeVillanTile !== "") {
    let heroLocation = changeIdToHeroLocation(zerohoneyBeforeHeroTile);
    let villanLocation = changeIdToVillanLocation(zerohoneyBeforeVillanTile);
    if (
      (villanLocation[1] - heroLocation[1] === 1 ||
        villanLocation[1] - heroLocation[1] === 0) &&
      (villanLocation[0] - heroLocation[0] === 1 ||
        villanLocation[0] - heroLocation[0] === 0)
    ) {
      calculateDmg(mainVillan.who, spiderMan, mainVillan.info, "hero", true);
    }

    let villanImg = document.querySelector("div .zerohoney-villan-image");
    villanAction(villanImg);
  }
}

// 빌런의 모든행동이 시작되는 함수
function villanAction(villanImg) {
  // 맨 처음 시작할 때를 위한 조건문
  if (zerohoneyBeforeVillanTile === "") {
    zerohoneyBeforeVillanTile = document.querySelector(
      "#zerohoney-main-stage-third-row-forth"
    );
  }
  let villanOnGoingTileId = validationVillanMovement(zerohoneyBeforeVillanTile);
  // 빌런이 이동했다면 else,아니라면 if
  if (villanOnGoingTileId === "villanAttack") {
    villanAttack(zerohoneyBeforeHeroTile, zerohoneyBeforeVillanTile);
  } else {
    let villanOnGoingTile = document.querySelector(`#${villanOnGoingTileId}`);
    // 만약 빌런이 가야 할 곳에 히어로가 있다면, 이 함수를 다시 실행시킨다(재귀)
    if (villanOnGoingTile.innerHTML !== "") {
      villanAction(villanImg);
    } else {
      let villanImg = document.querySelector("div .zerohoney-villan-image");
      villanImg.remove();
      villanOnGoingTile.innerHTML = mainVillan.normal;

      zerohoneyBeforeVillanTile = villanOnGoingTile;
    }
  }
}

function villanAttack(zerohoneyBeforeHeroTile, zerohoneyBeforeVillanTile) {
  if (zerohoneyBeforeHeroTile !== "" && zerohoneyBeforeVillanTile !== "") {
    let heroLocation = [
      zerohoneyChangeStringNumberToInteger[
        zerohoneyBeforeHeroTile.id.toString().split("-")[3]
      ],
      zerohoneyChangeStringNumberToInteger[
        zerohoneyBeforeHeroTile.id.toString().split("-")[5]
      ],
    ];
    let villanLocation = [
      zerohoneyChangeStringNumberToInteger[
        zerohoneyBeforeVillanTile.id.toString().split("-")[3]
      ],
      zerohoneyChangeStringNumberToInteger[
        zerohoneyBeforeVillanTile.id.toString().split("-")[5]
      ],
    ];
    if (
      Math.abs(villanLocation[0] - heroLocation[0]) <= 1 &&
      Math.abs(villanLocation[1] - heroLocation[1]) <= 1
    ) {
      // 스파이더맨 객체 불러와서 처리하자
      let tempVillanIsSkill = parseInt(Math.random() * 3 + 1);
      if (tempVillanIsSkill === 1 || tempVillanIsSkill === 2) {
        calculateDmg(
          mainVillan.who,
          spiderMan,
          mainVillan.info,
          "villan",
          false
        );
      } else {
        calculateDmg(
          mainVillan.who,
          spiderMan,
          mainVillan.info,
          "villan",
          true
        );
      }
    }
  }
}

