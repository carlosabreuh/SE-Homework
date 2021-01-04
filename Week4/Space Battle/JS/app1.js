console.log("%c Welcome... TIme to Battle!");

//Object 1
const hero = {
  hull: 25,
  firepower: 5,
  accuracy: 0.7,
};

var enemy = [];
for (let alienShip = 1; alienShip <= 6; alienShip++) {
  const alienShip = {
    hull: Math.floor(Math.random() * (8 - 3) + 3),
    firepower: Math.floor(Math.random() * (4 - 2) + 2),
    accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
  };
  enemy.push(alienShip);
}

console.log(enemy);

for (let i = 0; i < enemy.length; i++) {
  while (hero.hull > 0 && enemy[i].hull > 0) {
    var damageToBeMade = Math.random();
    if (damageToBeMade <= hero.accuracy) {
      console.log(
        "%c Attack is Successful!!!",
        "font-weight: bold; color: brown"
      );

      enemy[i].hull -= hero.firepower;
      console.log(enemy[i].hull);
      if (enemy[i].hull <= 0) {
        console.log(
          "%c Alien ship is destroyed !!!",
          "font-weight: bold; color: Green"
        );
        console.log(
          "%c You won this round..",
          "font-weight: bold; font-variant: small-caps; font-size: 15px; font-variant: small-caps; color: blue"
        );
        break;
      }
      if (enemy[i].hull > 0) {
        if (Math.random() <= enemy[i].accuracy) {
          console.log("%c I am hit!!!", "font-weight: bold; color: red");

          hero.hull = hero.hull - enemy[i].firepower;
          console.log(hero.hull);
        } else {
          console.log("Alien Missed");
        }
      }
    }
  }
  if (hero.hull <= 0) {
    console.log("Hero is dead!!");

    break;
  }

  var cont = prompt("Continue: Yes/No?").toLowerCase();
  console.log(cont);

  if (cont === "no") {
    console.log(
      "%c Don't go! The carnage is not over!!!",
      "font-weight: bold; font-size: 15px; font-variant: small-caps; color: red"
    );
    break;
  }
};

// if (hero.hull > 0) {
//   console.log("You Won the Game!!!!");
// }
