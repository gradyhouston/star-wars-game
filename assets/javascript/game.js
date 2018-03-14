// Global variables //

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
    healthPoints: 120,
    baseAttackPower: 12,
    counterAttackPower: 16
  };

  var darthVader = {
    name: "Darth Vader",
    healthPoints: 180,
    baseAttackPower: 15,
    counterAttackPower: 25
  };

  var bobaFett = {
    name: "Boba Fett",
    healthPoints: 120,
    baseAttackPower: 10,
    counterAttackPower: 16
  };

  var lukeSkywalker = {
    name: "Luke Skywalker",
    healthPoints: 160,
    baseAttackPower: 12,
    counterAttackPower: 20
  };

  var yoda = {
    name: "Yoda",
    healthPoints: 130,
    baseAttackPower: 15,
    counterAttackPower: 30
  };

  var kyloRen = {
    name: "Kylo Ren",
    healthPoints: 150,
    baseAttackPower: 14,
    counterAttackPower: 24
  };

  // create an array of battle sounds
	var battleSoundsArray = [
  'assets/audio/attackAudio/saberclash.mp3',
  'assets/audio/attackAudio/saberclash1.mp3',
  'assets/audio/attackAudio/saberclash2.mp3',
  'assets/audio/attackAudio/saberclash3.mp3',
  'assets/audio/attackAudio/saberclash4.mp3',
  'assets/audio/attackAudio/saberclash5.mp3',
  'assets/audio/attackAudio/saberclash6.mp3',
  'assets/audio/attackAudio/spin1.mp3',
  'assets/audio/attackAudio/spin2.mp3',
  'assets/audio/attackAudio/spin3.mp3',
  'assets/audio/attackAudio/spin4.mp3',
  'assets/audio/attackAudio/spin5.mp3',
  'assets/audio/attackAudio/spin6.mp3',
  'assets/audio/attackAudio/swing1.mp3',
  'assets/audio/attackAudio/swing2.mp3'
];
	// characterSelectSound: 'assets/audio/saberon.mp3',

  var battleSoundsPick = [];

  // Background array
  // var bgArray = [
  //     "../images/backgrounds/starwars_bg1.jpg",
  //     "../images/backgrounds/starwars_bg2.jpg",
  //     "../images/backgrounds/starwars_bg3.jpg",
  //     "../images/backgrounds/starwars_bg4.jpg",
  //     "../images/backgrounds/starwars_bg5.jpg",
  //     "../images/backgrounds/starwars_bg6.jpg",
  //     "../images/backgrounds/starwars_bg7.jpg",
  //     "../images/backgrounds/starwars_bg8.jpg",
  //     "../images/backgrounds/starwars_bg9.jpg",
  //     "../images/backgrounds/starwars_bg10.jpg"
  //   ];
  //
  //
  // var bg = [];





// ----- Functions ----- //

// This function will initialize the character value from the global object variables defined above
  function initializeCharacter(chosenCharacter) {
    character.name = chosenCharacter.name;
    character.healthPoints = chosenCharacter.healthPoints;
    character.baseAttackPower = chosenCharacter.baseAttackPower;
    character.counterAttackPower = chosenCharacter.counterAttackPower;
  }

// This function will initialize the enemy's value from the global object variables defined above
  function initializeDefender(chosenDefender) {
    defender.name = chosenDefender.name;
    defender.healthPoints = chosenDefender.healthPoints;
    defender.baseAttackPower = chosenDefender.baseAttackPower;
    defender.counterAttackPower = chosenDefender.counterAttackPower;
  }

// This function will move the remaining characters to the enemies section
  function moveToEnemies() {
    $(".available-character").removeClass("available-character").addClass("enemy-character");
    $("#enemies-available").append($(".enemy-character"));
  }

// This function will reset the state of the game
  function resetGame() {
    // Reset all the health values to the original
    $("#qui-gon-jinn-character").children(".health").html(quiGonJinn.healthPoints);
    $("#luke-skywalker-character").children(".health").html(lukeSkywalker.healthPoints);
    $("#darth-vader-character").children(".health").html(darthVader.healthPoints);
    $("#boba-fett-character").children(".health").html(bobaFett.healthPoints);
    $("#yoda-character").children(".health").html(yoda.healthPoints);
    $("#kylo-ren-character").children(".health").html(kyloRen.healthPoints);

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

  // Get a random audio file to play when attack is clicked
  var battleSoundsPick = battleSoundsArray[Math.floor(Math.random() * battleSoundsArray.length)];

  // Get a random background image
  // var bg = bgArray[Math.floor(Math.random() * bgArray.length)];

// TODO -
//   randomnize wallpaper - WIP
//   get random battle sounds working
//  1 fix math in the console.log when attacking
//   make "toggle music" look better - DONE
//   maybe look at colorizing the character tiles
//  2 fix the joined attack message - make it display on a new line - DONE
//   maybe add line break in the middle?
//  3 make "choose your hero or villian" go away after choice




// ----- Main Routine ----- //

  // Run Javascript when the HTML has finished loading
$(document).ready(function() {

    // gets the link for the theme song to be played in the background
  	// var audioElement = document.createElement('audio');
  	// audioElement.autoplay = true;
  	// audioElement.loop = true;
    // audioElement.setAttribute('src', 'assets/audio/starwars.m4a');

    var audioMute = document.getElementById('background_audio');

    var muteCtrlSrcs = {
      unmuted: './assets/images/audio/audio_on.png',
      muted: './assets/images/audio/audio_off.png'
    };

    $('#mute').click(function() {

      if (audioMute.muted) {
        $(this).attr('src', muteCtrlSrcs.unmuted);
      } else {
        $(this).attr('src', muteCtrlSrcs.muted);
      }

      audioMute.muted = !audioMute.muted;
    });

    //   document.getElementById('mute').addEventListener('click', function (e) {
    //     e = e || window.event;
    //     audioMute.muted = !audioMute.muted;
    //     e.preventDefault();
    //     $("#unmute").empty();
    //
    // }, false);

        //  EXPERIMENTAL CODE BELOW HERE //

        // Background audio toggle code attemps //
//     $(document).ready(function(){
//     var audio = document.getElementById("audio");
//     audio.autoplay = true;
//
//     $("#mute-toggle").click(function(){ // on toggle click
//         if($(this).hasClass("toggled")){ // if toggle has class "toggled"
//             audio.muted = false; // unmute audio
//         } else { // vice versa
//             audio.muted = true;
//         }
//
        // Another audio toggle code attempt //
//         $(this).toggleClass("toggled"); // toggle class "toggled"
//     });
// });

      // Another audio toggle code attempt //
//     $(function() {
//     $("#mute").click(function(e) {
//         e.preventDefault();
//
//         var song = $('background_audio')[0]
//         if (song.paused){
//             song.play();
//             document.getElementById("mute").src = "assets/images/audio_off.png";
//         }else{
//             song.pause();
//             document.getElementById("mute").src = "assets/images/audio_on.png";
//         }
//         });
// });

//         // Attempts are random background cycles //
// $(document).ready(function() {
//
//     $('body').css('background-image', bg);
//     // then you can put it right before the variable 'bg'
//     $('body').css('background-image', "../images/backgrounds/", bg);
//
// });
//
//         Attempts are random background cycles //
    // $('body').css({'background-image': '(../images/backgrounds/' + bg[Math.floor(Math.random() * bg.length)] + ')'
  // });
//
//         Attempts are random background cycles //
  // bg = bgArray[Math.floor(Math.random() * bgArray.length)];
  // $("body").css("background-image", '../images/backgrounds/(' + bg + ')');
//
  // $('<img class="fadeIn" src="../images/backgrounds' + bgArray[Math.floor(Math.random() * bgArray.length)] + '">');

//   $(document).ready(function() {
//
//   var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
//   // var path = '../images/backgrounds';
//   var imageUrl = bg;
//   console.log(bg);
//     $('body').css('background-image', 'url(' + imageUrl + ')');
// });


// function randomBackground() {
//
//     $('body').css({
//         'background' : 'url('+ bgArray[Math.floor(Math.random() * bgArray.length)] + ') no-repeat',
//         'background-attachment' : 'scroll',
//         'background-position' : '50% 50%',
//         'background-size' : 'cover'
//     });
// }

// Show Random Image on Page Load
// randomBackground();

// Simulate a page refresh
// $('button').on('click', randomHero);


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


    $("#attackBtn").on("click", function() {
      var audio = document.getElementById("audio")
      audio.src = (battleSoundsPick);
      audio.play();




      // User is ready to attack the defender
      if (characterSelected && defenderSelected && !gameOver) {
        // User attacks the defender and decreases the defender's health points
        defender.healthPoints = defender.healthPoints - character.baseAttackPower;
        $(".defender-character").children(".health").html(defender.healthPoints);
        $("#game-message").html("You attacked " + defender.name + " for " + character.baseAttackPower + " damage. ");

        // User's attack power increases
        character.counterAttackPower = character.counterAttackPower + character.baseAttackPower;

        // If defender is still alive, they counter attack the user
        if (defender.healthPoints > 0) {
          character.healthPoints = character.healthPoints - defender.counterAttackPower;
          $(".chosen-character").children(".health").html(character.healthPoints);

          // Check if the user survives the attack
          if (character.healthPoints > 0) {
            $("#game-message").append(defender.name + " attacked you back for " + defender.counterAttackPower + " damage.");
          } else {
            gameOver = true;
            $("#game-message").html("<p>You were defeated...</p>");
            $("#restart").show();
          }
          console.log("Your health: " + character.healthPoints);
          console.log("Defender's health: " + defender.healthPoints);
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

}); // Main routine
