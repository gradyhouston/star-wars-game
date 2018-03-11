// Global variables //
  $(document).ready(function() {

// Has the user selected their character
  var characterSelected = false;

// Has the user selected the defender
  var defenderSelected = false;

// Variable to store the user's chosen character
  var character = {};

// Variable to store the chosen enemy
  var defender = {};

// Number of enemies defeated
  var enemiesDefeated = 0;

// Boolean to indicate whether or not the game is over
  gameOver = false;

// Character objects

  var quiGonJinn = {
    name: "Qui-Gon Jinn",
    healthPoints: 140,
    attackPower: 12,
    counterAttackPower: 12
  };

  var darthVader = {
    name: "Darth Vader",
    healthPoints: 100,
    attackPower: 20,
    counterAttackPower: 14
  };

  var bobaFett = {
    name: "Boba Fett",
    healthPoints: 120,
    attackPower: 10,
    counterAttackPower: 10
  };

  var lukeSkywalker = {
    name: "Luke Skywalker",
    healthPoints: 180,
    attackPower: 16,
    counterAttackPower: 16
  };

  var yoda = {
    name: "Yoda",
    healthPoints: 160,
    attackPower: 14,
    counterAttackPower: 18
  };

  var kyloRen = {
    name: "Kylo Ren",
    healthPoints: 150,
    attackPower: 16,
    counterAttackPower: 14
  };

// ----- Helper Functions ----- //

// This function will initialize the character value from the global object variables defined above
  function initializeCharacter(chosenCharacter) {
    character.name = chosenCharacter.name;
    character.health = chosenCharacter.health;
    character.baseAttack = chosenCharacter.baseAttack;
    character.attack = chosenCharacter.attack;
  }

// This function will initialize the enemy's value from the global object variables defined above
  function initializeDefender(chosenDefender) {
    defender.name = chosenDefender.name;
    defender.health = chosenDefender.health;
    defender.baseAttack = chosenDefender.baseAttack;
    defender.attack = chosenDefender.attack;
  }

// This function will move the remaining characters to the enemies section
  function moveToEnemies() {
    $(".available-character").removeClass("available-character").addClass("enemy-character");
    $("#enemies-available").append($(".enemy-character"));
  }

// This function will reset the state of the game
  function resetGame() {
    // Reset all the health values to the original
    $("#qui-gon-jinn-character").children(".health").html(quiGonJinn.health);
    $("#luke-skywalker-character").children(".health").html(lukeSkywalker.health);
    $("#darth-vader-character").children(".health").html(darthVader.health);
    $("#boba-fett-character").children(".health").html(bobaFett.health);
    $("#yoda-character").children(".health").html(yoda.health);
    $("#kylo-ren-character").children(".health").html(kyloRen.health);

    $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-available").html(available);

    $("#game-message").empty();
    $("#restart").hide();

    characterSelected = false;
    defenderSelected = false;
    enemiesDefeated = 0;
    gameOver = false;

    character = {};
    defender = {};
  }

// ----- Main Routine ----- //

  // Run Javascript when the HTML has finished loading
  $(document).ready(function() {

    // Hide the "Restart" button on document load
    $("#restart").hide();

    // Determine which character the user has clicked
    $("#qui-gon-jinn-character").on("click", function () {
      console.log("Qui-Gon Jinn is selected");

      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();

        // Set the user's character
        initializeCharacter(quiGonJinn);
        characterSelected = true;

        // Display the chosen character
        $("#qui-gon-jinn-character").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);

        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#qui-gon-jinn-character").hasClass("enemy-character")) {
          $("#game-message").empty();

          // Set the user's enemy
          initializeDefender(quiGonJinn);
          defenderSelected = true;

          // Add the character to the defender section
          $("#qui-gon-jinn-character").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });

    $("#luke-skywalker-character").on("click", function () {
      console.log("Luke Skywalker is selected");

      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();

        // Set the user's character
        initializeCharacter(lukeSkywalker);
        characterSelected = true;

        // Display the chosen character
        $("#luke-skywalker-character").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);

        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#luke-skywalker-character").hasClass("enemy-character")) {
          $("#game-message").empty();

          // Set the user's enemy
          initializeDefender(lukeSkywalker);
          defenderSelected = true;

          // Add the character to the defender section
          $("#luke-skywalker-character").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });

    $("#darth-vader-character").on("click", function () {
      console.log("Darth Vader is selected");

      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();

        // Set the user's character
        initializeCharacter(darthVader);
        characterSelected = true;

        // Display the chosen character
        $("#darth-vader-character").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);

        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#darth-vader-character").hasClass("enemy-character")) {
          $("#game-message").empty();

          // Set the user's enemy
          initializeDefender(darthVader);
          defenderSelected = true;

          // Add the character to the defender section
          $("#darth-vader-character").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });

    $("#boba-fett-character").on("click", function () {
      console.log("Boba Fett is selected");

      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();

        // Set the user's character
        initializeCharacter(bobaFett);
        characterSelected = true;

        // Display the chosen character
        $("#boba-fett-character").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);

        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#boba-fett-character").hasClass("enemy-character")) {
          $("#game-message").empty();

          // Set the user's enemy
          initializeDefender(bobaFett);
          defenderSelected = true;

          // Add the character to the defender section
          $("#boba-fett-character").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });

    $("#yoda-character").on("click", function () {
      console.log("Yoda is selected");

      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();

        // Set the user's character
        initializeCharacter(yoda);
        characterSelected = true;

        // Display the chosen character
        $("#yoda-character").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);

        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#yoda-character").hasClass("enemy-character")) {
          $("#game-message").empty();

          // Set the user's enemy
          initializeDefender(yoda);
          defenderSelected = true;

          // Add the character to the defender section
          $("#yoda-character").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });

    $("#kylo-ren-character").on("click", function () {
      console.log("Kylo Ren is selected");

      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();

        // Set the user's character
        initializeCharacter(kyloRen);
        characterSelected = true;

        // Display the chosen character
        $("#kylo-ren-character").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);

        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#kylo-ren-character").hasClass("enemy-character")) {
          $("#game-message").empty();

          // Set the user's enemy
          initializeDefender(kyloRen);
          defenderSelected = true;

          // Add the character to the defender section
          $("#kylo-ren-character").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });

    $("#attack").on("click", function() {
      console.log("Attack selected");
      

      // User is ready to attack the defender
      if (characterSelected && defenderSelected && !gameOver) {
        // User attacks the defender and decreases the defender's health points
        defender.health = defender.health - character.attack;
        $(".defender-character").children(".health").html(defender.health);
        $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");

        // User's attack power increases
        character.attack = character.attack + character.baseAttack;

        // If defender is still alive, they counter attack the user
        if (defender.health > 0) {
          character.health = character.health - defender.baseAttack;
          $(".chosen-character").children(".health").html(character.health);

          // Check if the user survives the attack
          if (character.health > 0) {
            $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
          } else {
            gameOver = true;
            $("#game-message").html("<p>You were defeated...</p><p>Play again?</p>");
            $("#restart").show();
          }
        } else {
          // Defender is defeated
          enemiesDefeated++;
          defenderSelected = false;
          $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
          $(".defender-character").hide();

          // Check if the user has won the game
          if (enemiesDefeated === 5) {
            gameOver = true;
            $("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
            $("#restart").show();
          }
        }
      } else if (!characterSelected && !gameOver) {
        $("#game-message").html("<p>You must first select your game character.</p>");
      } else if (!defenderSelected && !gameOver) {
        $("#game-message").html("<p>You must choose an enemy to fight.</p>");
      }

    });

    $("#restart").on("click", function() {
      console.log("Restart selected");

      resetGame();
    });

});
});
