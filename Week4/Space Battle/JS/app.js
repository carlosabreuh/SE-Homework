console.log("Carnage is loaded");
var hero = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  isAlive: true,
  
  
  attack: (alien) => {
    // console.log(`Accuracy threshold is ${ranNum}`);
    console.log("Attack!!");
    let ranNum = Math.random();
    let damageToBeMade = Math.random();
    let firepower = hero.firepower;
    let accuracy = hero.accuracy;
    console.log("my attack");
    console.log("Hit");

    if (ranNum < hero.accuracy) {
      console.log(`It's a direct hit!! Well done Carlos!!`);
      alien.hull = alien.hull - firepower;
      console.log(`alien has ${alien.hull} hull points left.`);
      if (alien.hull <= 0) {
        alien.isAlive = false;
        console.log(`Alien ship is destroyed...!  You've saved the galaxy!`);
      }
    } else {
      console.log(`you missed!`);
    }
  },
};

    attack: function alien () {
    var hull = Math.round(Math.random() * (6 - 3) + 3);
    var firepower = Math.round(Math.random() * (4 - 2) + 2);
    var accuracy = Math.random() * (0.8 - 0.6) + 0.6;
    var isAlive = true
    
    attack(hero) {
        let damageToBeMade = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < hero.accuracy) {
            console.log(`You've been hit!!`);

            hero.hull = hero.hull - alien.firepower;
            console.log(`hero has ${hero.hull} hull points left.`);
            if (hero.hull <= 0) {
                hero.isAlive = false;
                console.log(`You have died :(`);
            }
        } else {
            console.log(`You dodged the attack!`);
        }
    }
    };

const battle = (player, computer) => {
  while (player.isAlive && computer.isAlive) {
    player.attack(computer);
    if (computer.isAlive) {
      computer.attack(player);
    }
  }
};
