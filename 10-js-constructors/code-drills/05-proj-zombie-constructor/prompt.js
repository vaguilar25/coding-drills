// ====================== STEP 4 ======================
//Require Inquirer, the Weapon constructor, and the Zombie Constructor
var inquirer = require("inquirer")
var Weapon = require("./weapon")
var Zombie = require("./zombie")

// ====================================================


// OUR HERO'S STATS
var hero = {
  health: 100,
}


// ====================== STEP 4 ======================
//CREATE 6 WEAPONS
var bearHands = new Weapon("Bear Hands", 1, [5, 5], 95, 90, 100000000000000);
var machete = new Weapon("Machete", 1, [40, 60], 80, 90, 5);
var shotgun = new Weapon("Shotgun", 2, [30, 50], 65, 80, 5);
var machineGun = new Weapon("Machine Gun", 3, [15, 30], 30, 65, 5);
var pistol = new Weapon("Pistol", 1, [25, 40], 50, 75, 5)
var sniper = new Weapon("Sniper", 1, [40, 60], 30, 20, 100, 5);
var rpg = new Weapon("RPG", 4, [20, 35], 95, 40, 5);


// ====================================================




// ====================== STEP 5 ======================
//CREATE 5 ZOMBIES
var zombie1 = new Zombie("zombie1", 100, [0, 5], 15, false);
var zombie2 = new Zombie("zombie2", 90, [1, 6], 18, false);
var zombie3 = new Zombie("zombie3", 85, [2, 4], 20, false);
var zombie4 = new Zombie("zombie4", 80, [2, 5], 22, false);
var zombie5 = new Zombie("zombie5", 60, [7, 10], 10, false);


// ====================================================


//Used for the inquire prompt. When a zombie is defeated, it is removed from this array so that the user can no longer choose to attack it. If you have not chosen the strings below as the names for your zombies, change the values in this array to the names you chose for your zombies.
var zombieChoices = ["zombie1", "zombie2", "zombie3", "zombie4", "zombie5"]

//For Gameplay. If you have not chosen the variable names below as the names for your zombies, change the values in this array to the names you chose for your zombies.
var zombieFighters = [zombie1, zombie2, zombie3, zombie4, zombie5]

// For inquirer prompt. When a gun has no more uses, it is removed from this array.
var guns = ["Bear hands", "Machete", "Shotgun", "Pistol", "Machine Gun", "Sniper", "RPG", "View Weapon Stats"]


// Starts the game!
console.log("\nWELCOME TO ZOMBIE FIGHTER PRO. USE STRATEGY AND GRIT TO ELIMINATE THE HORDE OF ONCOMING ZOMBIES. HERE ARE THE WEAPONS YOU CAN CHOOSE. YOU WILL PICK ONE FOR EACH FIGHT!")

console.log("\n===========================================\n")

console.log("Bear hands: Zombies don't feel punches the same way humans do. Only use these as a last resort \n uses: ∞ \n\n",

  "Machete: Go up close and personal for critical damage to a single zombie. \n uses: " + machete.uses + " \n\n",

  "Shotgun: A reliable, close-range weapon. Can hit two zombies at once. \n uses: " + shotgun.uses + " \n\n",

  "Pistol: A solid mid-range weapon. Can hit two zombies at once \n uses: " + pistol.uses + " \n\n",

  "Machine Gun: An erratic weapon. Can hit three zombies at a time though. \n uses: " + machineGun.uses + " \n\n",

  "Sniper: A low-risk, high-reward weapon that can damage a single zombie. It's tough to hit shots with it though. \n uses: " + sniper.uses + " \n\n",

  "RPG: An incredibly difficult weapon to use. If you can manage to get it to work, it will deal damage to up to 4 zombies. \n uses: " + rpg.uses + " \n\n")

var fightZombies = new Game();

fightZombies.playRound();


// ====================== STEP 6: CHALLENGE ======================
//CREATE A CONSTRUCTOR FOR THE GAME

function Game() {
  // This function holds the game logic
  this.playRound = function () {

    //===================================================

    // STEP 6.1: Display the health of the zombies and hero.



    // Loop through the zombieFighters array, and display their health. Outside of the loop, display the hero's health.
    console.log("\n=============================\n")

    for (var i = 0; i < zombieFighters.length; i++) {

      if (zombieFighters[i].health > 0) {

        console.log(zombieFighters[i].name + " Health: ", zombieFighters[i].health)

      }
    }

    console.log(hero.health);

    console.log("\n=============================\n")
    //===================================================

    //===================================================

    // STEP 6.2: Keep track of this.

    // Remember, the keyword "this" refers to the function that invoked it. When we use anonymous functions within constructors, we run the risk of losing track of this. 


    //Given our current scope, this is a great place to create a variable that points to "this". We can use this variable later down the line



    //===================================================
    var temp = this;


    inquirer.prompt([
      {
        type: "list",
        name: "gun",
        message: "Choose your Weapon",
        choices: guns
      }

    ]).then(function (game) {
      console.log("You chose a " + game.gun + "!")

      //===================================================

      // STEP 6.3: Picking a gun.

      // For each of the following cases (aside from the last--"View Weapon Stats")


      switch (game.gun) {

        case "Bear hands":
          //6.3.1:
          //set the damage of the gun for the current round using the calcDamage function in Weapon
          bearHands.calcDamage(bearHands.attack[0], bearHands.attack[1])

          //6.3.2:
          //set the didDam boolean using the damageBool function in Weapon
          bearHands.didDam = bearHands.damageBool(bearHands.reliability)

          //6.3.3:
          //decrement the amount of uses of the gun
          bearHands.used()

          //6.3.4:
          //invoke the pickZombie function, passing in the corresponding instance of the Weapon constructor as an argument 
          play.pickZombie(bearHands)
          break;

        case "Machete":

          break;

        case "Shotgun":

          break;

        case "Pistol":


          break;

        case "Machine Gun":

          break;

        case "Sniper":

          break;

        case "RPG":

          break;

        //===================================================

        case "View Weapon Stats":
          //===================================================
          //6.4 Display the weapon stats
          //6.4.1
          // In between the "+"s below, insert the corresponding gun's remaining uses
          console.log("Bear Hands:\n reach: 1\n attack: 5 \n risk:95\n reliability: 90 \n uses: ∞\n\n Machete: \n reach: 1\n attack: min(40), max(60)\n risk: 80\n reliability: 90\n uses: " + + "\n\nShotgun: \n reach: 2\n attack: min(30), max(50)\n risk: 65\n reliability: 80\n uses: " + + "\n\nPistol: \n reach: 2\n attack: min(25) max(40)\n risk: 50\n reliability: 75\n uses: " + + "\n\nMachine Gun:\n reach: 3\n attack: min(15), max(30)\n risk: 30\n reliability: 65\n uses: " + + "\n\nSniper:\n reach: 1\n attack: min(40) max(60)\n risk: 30\n reliability: 20\n uses: " + + "\n\nRPG:\n reach: 4\n attack: min(20), max(35)\n risk: 95\n reliability: 40\n uses: " + + "\n\n")
          //6.4.2
          //Invoke the next round function

          //===================================================
          break;
      }


    });
  }



  this.pickZombie = function (weapon) {

    inquirer.prompt([
      {
        type: "list",
        name: "zombie",
        message: "Pick a zombie to attack",
        choices: zombieChoices
      }

    ]).then(function (zombie) {
      // ======================================
      //6.5 
      // For each of the following cases:
      // invoke the fight function, passing in the corresponding zombie, and the weapon (which has already been passed to this function) as arguments.
      // Hint: You may lose track of "this". If you do, please reference step 6.2

      switch (zombie.zombie) {
        case "zombie1":

          break;
        case "zombie2":

          break;
        case "zombie3":

          break;
        case "zombie4":

          break;
        case "zombie5":

          break;
        // ======================================
      }

    })
  }


  this.fight = function (zombie, weapon) {
    // ======================================
    //6.6: Determine zombies affected by weapon's reach
    //  6.6.1 Create a variable called zombieVictims and set it to an empty array
    // 6.6.2 push the zombie chosen by the user into the array you created in 6.6.1

    //6.6.3 Looping through zombieFighters, push all the zombies within to zombieVictims, but only under the following conditions:
    // - The length of zombieVictims is less than the reach of the gun
    // - The name of the chosen zombie does not match the one in zombieFighters




    // ======================================


    // ======================================
    // 6.7 Determine whether your shot was on target, and how many zombies were able to dodge the shot if it was on target.
    //6.7.1 If the didDam property of the chosen weapon evaluates to true: console.log("\nShot on target"). Otherwise, console.log("\nOooooh, tough miss. Your shot was not on target.")

    //6.7.2 If the condition created in 6.7.1 is met, Loop through zombieVictims.
    //6.7.3 In each iteration of the loop, determine whether a given zombie received damage. Use the zombies agility and the damageBool function 
    //6.7.4 If a zombie did receive damage, congratulate the user, inform them how much damage they did and to which zombie. 
    //6.7.5 within the same condition as 6.7.4, subtract the roundDamage of the chosen weapon from the zombie's health
    //6.7.6 If a zombie did not receive damage, inform the user which zombie dodged their attack





    // ======================================




    // ======================================
    //6.8 Take care of the fallen zombies

    //6.8.1 Loop through zombieVictims
    //6.8.2 If a given zombies health is less than or equal to 0,inform the user that they've defeated that zombie
    //6.8.3 Set the zombie's min and max attack to 0
    //6.8.4 Using the zombie's name, remove the fallen zombie from the zombieChoices array



    // ======================================



    // ======================================
    //6.9 Determine the damage the hero takes.

    //6.9.1 If a player takes damage (determined by weapon risk and the calcDamage function):
    //6.9.2 set the roundDamage for each zombie (they all attack every round)
    //6.9.3 create a variable called zombieDamSum set to the sum of the roundDamage from all the zombies. 
    //6.9.4 Subtract zombieDamSum from the hero's health
    //6.9.5 Inform the user how much damage they've been dealt
    //6.9.6 Inform the user how much health they have left
    //6.9.7 If the player does not take damage, console.log("\nPhew, that was a close one. You avoided all damage")





    // ======================================

    // ======================================
    //6.10 If a weapon does not have any uses left, remove it from the guns array


    // ======================================

    // ======================================
    //6.11 Invoke the nextRound function


    // ======================================
  }

  // ======================================
  //6.12 Invoke the checkRound function after the user has hit enter
  // Hint: You may lose track of "this". If you do, please reference step 6.2
  this.nextRound = function () {

    inquirer.prompt([
      {
        type: "input",
        name: "continue",
        message: "Press ENTER to continue"
      }
    ]).then(function (res) {

    })
  }

  // ======================================


  // Created a generic function that checks if the user won or lost.
  this.checkRound = function () {


    console.log("");
    console.log("");

    // If the user has less than 0 health.... then the user lost.
    if (hero.health <= 0) {

      console.log("###############################################");
      console.log("");
      console.log("Game over dude. It looks like you're dead.");
      console.log("");
      console.log("###############################################");

      // Exit the game
      process.exit();
    }



    // If the zombie has less than 0 health.... then the user won.
    if (zombieChoices.length === 0) {

      console.log("###############################################");
      console.log("");
      console.log("Victory! You defeated the zombies and survived!");
      console.log("");
      console.log("###############################################");

      // Exit the game
      process.exit();
    }

    // After performing the "check", the next round is initiated.
    this.playRound();

  }
}

// =============================================

//If you've made it all the way down here, you might be finished!!! Be sure to play your game and check for errors. Take time to make sure the game is behaving how you expect it to.

// ====================================================