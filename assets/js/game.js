var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  window.alert("Welcome to Robot Gladiators!")

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"
  ); if (enemyHealth <= 0) {
    window.alert(enemyName + " has died! ");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  }
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

};

fight()





































// var playerName = window.prompt("What is your robot's name?");
// var playerHealth = 100;
// var playerAttack = 10;
// var playerMoney = 10;

// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = 50;
// var enemyAttack = 12;
// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]
// console.log(enemyNames.length);

// // function to start a new game
// var startGame = function() {
//   for (var i = 0; i < enemyNames.length; i++) {
//     if (playerHealth > 0) {
//       window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

//       var pickedEnemyName = enemyNames[i];

//       enemyHealth = 50;

//       fight(pickedEnemyName);
//     }
//     else {
//       window.alert("You have lost your robot in battle! Game Over!");
//       break;
//     }
//   };
//   var pickedEnemyName = enemyNames[i];
//   enemyHealth = 50;
//   fight(pickedEnemyName);
// }


// function fight(enemyName) {
//   // code to be executed {
//   while (playerHealth > 0 && enemyHealth > 0) {


//     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
//     if (promptFight === "skip" || promptFight === "SKIP") {
//       // confirm player wants to skip
//       var confirmSkip = window.confirm("Are you sure you'd like to quit?");
//       // if yes (true), leave fight
//       if (confirmSkip) {
//         window.alert(playerName + " has decided to skip this fight. Goodbye!");
//         // subtract money from playerMoney for skipping
//         playerMoney = playerMoney - 10;
//         console.log("playerMoney", playerMoney);
//         break;
//       }
//     }
//     if (promptFight === "fight" || promptFight === "FIGHT") {

//       // remove enemy's health by subtracting the amount set in the playerAttack variable
//       enemyHealth = enemyHealth - playerAttack;
//       console.log(
//         playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
//       );

//       // check enemy's health
//       if (enemyHealth <= 0) {
//         window.alert(enemyName + " has died!");
//         break;
//       } else {
//         window.alert(enemyName + " still has " + enemyHealth + " health left.");
//       }

//       // remove player's health by subtracting the amount set in the enemyAttack variable
//       playerHealth = playerHealth - enemyAttack;
//       console.log(
//         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
//       );

//       // check player's health
//       if (playerHealth <= 0) {
//         window.alert(playerName + " has died!");
//         break;
//       } else {
//         window.alert(playerName + " still has " + playerHealth + " health left.");
//       }
      // if player choses to skip
      // }
      // if no (false), ask question again by running fight() again
      // else {
      //   fight();
      // }
    //  window.alert(playerName + " has chosen to skip the fight!");
    // }
    //else {
     // window.alert("You need to choose a valid option. Try again!");
    // }

  // }
// start the game when the page loads
// startGame();
// }
//fight()