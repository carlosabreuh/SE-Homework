console.log('Carnage is loaded');


// Objects

const hero = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true, 
    attack(target) {
        let ranNum = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`It's a direct hit!! Well done Carlos!!`);
            target.hull = target.hull - this.firepower;
            console.log(`alien has ${target.hull} hull points left.`);
            if (taget.hull <= 0) {
                target.isAlive = false;
                console.log(`Alien ship is destroyed...!  You've saved the galaxy!`);
                   
            }
        } else {
            console.log(`you missed!`);
        }
        }
    }

    const alien = {
        hull: Math.round((Math.random() * (6 - 3)) + 3),
        firepower: Math.round((Math.random() * (4-2)) + 2),
        accuracy: (Math.random() * (.8 - .6)) + .6,
        isAlive: true,
        attack(target) {
            let ranNum = Math.random();
            console.log(`Accuracy threshold is ${ranNum}`);
            if (ranNum < this.accuracy) {
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`You've been hit!!`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                target.hull = target.hull - this.firepower;
                console.log(`hero has ${target.hull} hull points left.`);
                if (target.hull <= 0) {
                    target.isAlive = false;
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`You have died :(`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                console.log(`:::::::::::::::::::`);
                    
                }
            } else {
                console.log(`You dodged the attack!`);
            }
        }

    }

    const battle = (player, computer) => {
        while (player.isAlive && computer.isAlive) {
            player.attack(computer); 
            if (computer.isAlive) {
                computer.attack(player);
                
            }
        }
    }