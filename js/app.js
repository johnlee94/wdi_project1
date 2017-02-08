console.log("PROJECT ONE LEGGO")
$('#audioMain').autoplay;

$('#log').text("Welcome to Beacon Mental Asylum! Congratulations on being hired to work in our night shift team! We have recently implemented state of the art technology so that you can control everything on this floor via the terminal! Please keep in mind that the technology is still in its experimental stages..but everything should be working properly. Have a wonderful evening! Login to continue as employee. Else, type .continue and press enter to login as guest.")

$('#pt').on("keydown", initialScreen)

function initialScreen(event) {
    // if(event.keyCode === 13 && event.keyCode ===16) {
    if (event.keyCode === 13) {
        var x = ($('#pt').val())
        $('#pt').val('')
        console.log(x)
        event.preventDefault();
    }
    if (x === ".continue") {
        $('#log').text("Welcome to Beacon Mental Asylum! You are in the main control room's accessing terminal. Have a wonderful evening!" + '\n' + "Type .help in the command line and hit enter at any time if you need guidance on using this terminal.")
        $('#pt').off('keydown', initialScreen)
        $('#pt').on('keydown', clearOnReturn)
    }
}





$('div#mgw').removeClass()
$('div#mgw').addClass('homescreen')
//
// $('#pt').on("keydown", function(event){
//   if(event.keyCode === 13) {
//     replaceSelection(textarea, '');
//     event.preventDeafult()
//   }
// })
//
// function replaceSelection(field, word) {
//    var from = field.selectionStart, to = field.selectionEnd;
//    field.value = field.value.slice(0, from) + word +
//                  field.value.slice(to);
//    // Put the cursor after the word
//    field.selectionStart = field.selectionEnd =
//      from + word.length;
//  }


var door = "closed";
var lock = 'on';
var user = 'guest';
var power = 100;
var cam1Count = 0;
var cam2Count = 0;
var cam3Count = 0;
var cam4Count = 0;
var cam5Count = 0;
var cam6Count = 0;
var cam7Count = 0;
var cam8Count = 0;
var warning10 = false;
var x;
var playMusic = 0;

$('#power').text("Power: " + Math.round(power) + "%")


//need to turn off the event listener for initialContinue
// $('pt').off();
// $('#pt').on("keydown", secondScreen)
function clearOnReturn(event) {
    //keyCode for enter is 13
    if (event.keyCode === 13) {
        x = ($('#pt').val())
        $('#pt').val('')
        console.log(x)

        //makes cursor in textarea return to start
        event.preventDefault();
        //a checker for every time this function is called?
        //clearOnReturn.called = true;
        // powerTimer();
        $('#power').text("Power: " + Math.round(power) + "%")
        // powerTenChecker = 0;
        // if (!warning10) {
        //     powerLessTen();
        //     // powerTenChecker = 1;
        // }
        //is there a way I dont have to call these functions every time?...
        powerZero();
        //another glitch, at end of game, when power is supposed to be zero, it can be negative, because it is zero when powerZero is called but then it loses a couple more percentage points.. ie Power = -2%.
        if (x === '.help') {
            $('div#mgw').removeClass()
            $('#mgw').text('')
            $('div#mgw').addClass('homescreen')
            //view help menu
            $('#log').text('HELP COMMAND--' + "\n" + "use '.' + 'command', to initiate specific command; i.e. '.list' for a list of commands.. '.esc' will return you to the main terminal window.")
        } else if (x === '.list') {
            $('div#mgw').removeClass()
            $('#mgw').text('')
            $('div#mgw').addClass('homescreen')
            //view list of commands
            $('#log').text("LIST OF COMMANDS-- .esc, .help, .map, .cam, .devNotes, .cam1, .cam2, .cam3, .cam4, .cam5, .cam6, .cam7, .cam8, .lock, .unlock, .open, .close, .login, .music");
        } else if (x === '.map') {
            $('#mgw').text('')
            //code to open map
            $('#log').text("CURRENT DIRECTORY: MAP");

            power -= .5;
        } else if (x === '.cam') {
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            //code to show cam instructions
            $('#log').text("CAM CONTROL-- Bedroom 'Cheer' : Camera 1; Bedroom 'Chance' : Camera 3; Bedroom 'Change' : Camera 4; Bathroom 1 : Cam 2; Bathroom 2: Camera 5; Lab Room: Camera 6; Hallway 1: Camera 7; Hallway 2: Camera 8");

            power -= .5;
        } else if (x === '.cam1') {
            cam1Count++
            power -= 1;
            if (playMusic === 0) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('noSource')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHEER'");
            } else if (playMusic === 1 && cam1Count <= 5) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomCheer1')
                $('#mgw').text("You give me what I want and I'll behave..")
                    .css({
                        "font-family": "'Gochi Hand', cursive",
                        "font-size": "100px",
                        "color": "red",
                        "text-align": "center",
                        "padding-top": "125px",
                        "height": "375px"
                    })
            } else if (playMusic === 1 && cam1Count > 5) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomCheer1')
                $('#mgw').text("This is my room! Isn't it pretty?")
                    .css({
                        "font-family": "'Gochi Hand', cursive",
                        "font-size": "80px",
                        "color": "red",
                        "text-align": "center",
                        "padding-top": "125px",
                        "height": "375px"
                    })
            }

        } else if (x === '.cam2') {
            cam2Count++
            power -= 1;
            $('div#mgw').removeClass()
            $('div#mgw').addClass('bathroom1')
            $('#mgw').text('')
            $('#log').text("CURRENT DIRECTORY: BATHROOM 1");

        } else if (x === '.cam3') {
            // $('#pt').off('keydown', clearOnReturn)
            cam3Count++
            power -= 1;
            if (cam3Count !== 2 && cam3Count !== 4) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChance1')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHANCE'");


                // $('#pt').off('keydown', clearOnReturn)
                //
                // $('#pt').on("keydown", message1)
            } else if (cam3Count === 2) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChance1')
                $('#mgw').text("You are not alone..")
                $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHANCE'")
                    .css({
                        "font-family": "'Gochi Hand', cursive",
                        "font-size": "100px",
                        "color": "red",
                        "text-align": "center",
                        "padding-top": "125px",
                        "height": "375px"
                    })

            } else if (cam3Count === 4) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChance1')
                $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHANCE'")
                $('#mgw').text("The doctor always played me music when I was good. I'll behave if you play me my music.")
                    .css({
                        "font-family": "'Gochi Hand', cursive",
                        "font-size": "80px",
                        "color": "red",
                        "text-align": "center",
                        "padding-top": "75px",
                        "height": "425px"
                    })


            } else if (x === '.cam4') {
                cam4Count++
                power -= 1;
                if (cam4Count === 1) {
                    $('div#mgw').removeClass()
                    $('div#mgw').addClass('bedroomChange1')
                    $('#mgw').text('')
                    $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHANGE'")
                    // $('#pt').off('keydown', clearOnReturn)
                    //
                    // $('#pt').on("keydown", message2)

                } else {
                    $('div#mgw').removeClass()
                    $('div#mgw').addClass('bedroomChange1')
                    $('#mgw').text("The old man loved his daughter. So I took her from him..Her name was Delilah")
                        .css({
                            "font-family": "'Gochi Hand', cursive",
                            "font-size": "35px",
                            "color": "red",
                            "text-align": "center",
                            "padding-top": "125px",
                            "height": "375px"
                        });
                }


            } else if (x === '.cam5') {
                cam5Count++
                power -= 1;
                $('div#mgw').removeClass()
                $('div#mgw').addClass('noSource')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BATHROOM 2");

            } else if (x === '.cam6') {
                cam6Count++
                power -= 1;
                if (playMusic === 0) {
                    $('div#mgw').removeClass()
                    $('div#mgw').addClass('lab1')
                    $('#mgw').text('')
                    $('#log').text("CURRENT DIRECTORY: LAB ROOM");
                }
            } else if (playMusic === 1 && cam6Count >= 4) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('lab1')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: LAB ROOM")
            }

        } else if (x === '.cam7') {
            cam7Count++
            power -= 1;
            $('div#mgw').removeClass()
            $('#mgw').text('')
            $('div#mgw').addClass('noSource')
            $('#log').text("CURRENT DIRECTORY: HALLWAY ONE");

        } else if (x === '.cam8') {
            cam8Count++;
            power -= 1;
            $('div#mgw').removeClass()
            $('#mgw').text('')
            $('div#mgw').addClass('noSource')
            $('#log').text("CURRENT DIRECTORY: HALLWAY TWO");

        } else if (x === '.close') {
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            if (door === 'closed') {
                $('#log').text("Doors are already closed.");

            } else if (door === 'open') {
                $('#log').text("Closing Doors.");

            }
        } else if (x === '.open') {
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            if (lock === 'on') {
                $('#log').text("Doors are locked. Unlock the doors first to open doors. Must be logged in as user admin in order to receive permission to unlock.");
            } else if (lock === 'off') {
                if (playMusic === 0) {
                    $('div#mgw').removeClass()
                    $('div#mgw').addClass('gameOver')
                    $('#log').text("As you run out of the control room, an unknown woman grabs you from the dark and slits your throat.. The last words you hear are her shrills 'I ONLY WANTED TO BE FRIENDS'")

                } else if (playMusic === 1) {
                    $('#log').text("Doors are now open.")
                    alert("YOU ESCAPED!")
                }
            }

        } else if (x === '.lock') {
            $('div#mgw').removeClass()
            $('#mgw').text('')
            $('div#mgw').addClass('homescreen')
            $('#log').text("Doors are already locked.");

        } else if (x === '.unlock') {
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            if (user === 'guest') {
                $('#log').text("Must be signed in as admin to unlock or lock doors. Use .login to sign in as user admin.")
            } else if (user === 'admin') {
                $('#log').text("Doors unlocked!");
                lock = 'off';
            }
        } else if (x === '.music') {
            if (user === 'admin') {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('homescreen')
                $('#mgw').text('')
                $('#log').text('Music turned on. This should calm her down..')
                $('source').src = 'song.mp3'
                $('audio').play
                //need to add a timed function by which the original audio plays after the song is finished.
                setTimeout(restoreAudio, 20000)

                function restoreAudio() {
                    $('source').src = 'audio.mp3'
                    $('audio').play
                }
                power -= 10;
                playMusic = 1;
            } else if (user === 'guest') {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('homescreen')
                $('#mgw').text('')
                $('#log').text('Only admin user may access music!')
            }
        } else if (x === '.login') {
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            if (user === 'guest') {

                $('#log').text("Currently logged in as GUEST. Type 'login as admin' and press the Enter key to login as admin");
                $('#pt').off('keydown', clearOnReturn)
                $('#pt').on('keydown', loginAsAdmin)

                function loginAsAdmin(event) {
                    if (event.keyCode === 13) {
                        var y = ($('#pt').val())
                        $('#pt').val('')
                        event.preventDefault()
                        if (y === 'login as admin') {
                            $('#log').text("Password? Hit Enter after.")
                            $('#pt').off('keydown', loginAsAdmin)
                            $('#pt').on('keydown', loginPassword)

                            function loginPassword(event) {
                                if (event.keyCode === 13) {
                                    var z = ($('#pt').val())
                                    $('#pt').val('')
                                    event.preventDefault();
                                    if (z === 'Delilah') {
                                        $('#log').text("Logged in as admin. You now have admin priveleges to control the asylum! You can now execute additional commands such as unlocking doors.")
                                        user = 'admin';
                                        $('#pt').off('keydown', loginPassword)
                                        $('#pt').on("keydown", clearOnReturn)
                                    } else {
                                        $('#log').text("Wrong password. (Hint: Her.) Press .esc to return to the main menu.")
                                        $('#pt').off('keydown', loginPassword)
                                        $('#pt').on("keydown", clearOnReturn)
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (user === 'admin') {
                $('#log').text("Currently logged in as admin.")
                $('#pt').off('keydown', loginAsAdmin)
                $('#pt').on('keydown', clearOnReturn)
            }
            //code for "command not recognized"
            // } else {
            //   $('#pt').on("keydown", function(event){
            //     if(event.keyCode === 13) { $('#log').text('Command not recognized. Try .help for help or .list for a list of commands.')}
            //   })
            // }
        } else if (x === '.devNotes') {
            $('#mgw').text('')
            $('#mgw').removeClass()
            $('#mgw').addClass('homescreen')
            $('#log').text("Developer Notes (Last log: Saturday, July 9th, 2014): 1. Fix the locking system for bedrooms and lab. Remember to get soundproof walls for the lab room. The neighbors have started to become concerned with the constant screaming.. 2. Add a command for the electrifier that can be controlled from the control room. The music is not enough to get Elaine to quiet down anymore..")

        } else if (x === '.esc') {
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#log').text("Welcome to Beacon Mental Asylum! You are in the main control room's accessing terminal. Have a wonderful evening!" + '\n' + "Type .help in the command line if you need guidance on using the terminal.");

            return;
        }
    }
}




// tv = terminal value
// var tv = $('#pt').val()


// if($('#pt').val() === 'help') {
//   $('#log').text('help')
// }

// $('#pt').val('');

// var power=100;
var timer;

function powerTimer() {
    timer = window.setInterval(function() {
        power -= .1;
        if (!warning10) {
            powerLessTen();
            // powerTenChecker = 1;
        }
        $('#power').text("Power: " + Math.round(power) + "%")
        powerZero();
    }, 1000)

}
powerTimer();

// function powerControl() {
//     // if(clearOnReturn.called)
//     //how to check if a function was called/executed?
//     $('#power').text("Power: " + Math.round(power) + "%");
// }

//**not working, maybe I need to turn off the timer somehow.
function powerLessTen() {
    if (power < 10 && power > 0) {
        // var done = false;
        //this part is not working,
        // function anon() {
        //   if(!done) {
        //i want this part to be run only one time..
        $('#log').text("WARNING: Less than 10% Power remaining. Going into low-power mode..")
        window.clearInterval(timer)
        //tried to recall main function

        // powerLessTen = 1;
        warning10 = true;
    }
}


// anon();
// }
// }

function powerZero() {
    if (power === 0 || power < 0) {
        //end game, player lost
        power = 0;
        $('#log').text('You are out of battery.. Panicking, you try to force the doors open but the doors refuse to budge. You realize your doom when you pull out your phone and have 0 bars. Curses, Sprint! You are trapped to rot in the asylum indefinitely.. ')
        $('#power').text('')
        $('#mgw').removeClass()
        $('#mgw').addClass('gameOver')
        $('#log').css({
            "background-color": "black"
        })
        // $('#mgw').css({
        //     "background-color": "black"
        // })
        //turn all eventlisteners off(*HOW?*)
    }
}





// function message1(event) {
//     if (event.keycode === 13) {
//         if (cam3Count === 1 && x === '.cam3') {
//             //  $('#mgw').css({"background-image" : "url(images/blank_note.jpg)"}
//
//             $('div#mgw').removeClass()
//             $('div#mgw').addClass('bedroomChance1')
//             cam3Count++;
//             $('#mgw').text("You are not alone..")
//                 .css({
//                     "font-family": "'Gochi Hand', cursive",
//                     "font-size": "100px",
//                     "color": "red",
//                     "text-align": "center",
//                     "padding-top": "125px",
//                     "height": "375px"
//                 });
//         } else if (cam3Count === 3 && x === '.cam3') {
//             $('div#mgw').removeClass()
//             $('div#mgw').addClass('bedroomChance1')
//             cam3Count++
//             $('#mgw').text("The doctor always played me music when I was good. I'll behave if you play me my music.")
//                 .css({
//                     "font-family": "'Gochi Hand', cursive",
//                     "font-size": "80px",
//                     "color": "red",
//                     "text-align": "center",
//                     "padding-top": "75px",
//                     "height": "425px"
//                 })
//
//         }
//
//     }
//     $('#pt').off("keydown", message1)
//     $('#pt').on("keydown", clearOnReturn)
// }
// // } else if (cam)
//
// function message2(event) {
//     if (event.keycode === 13) {
//
//         if (cam4Count >= 1 && x === '.cam4') {
//             $('div#mgw').removeClass()
//             $('div#mgw').addClass('bedroomChange1')
//             cam4Count++;
//             $('#mgw').text("The old man loved his daughter. So I took her from him..Her name was Delilah")
//                 .css({
//                     "font-family": "'Gochi Hand', cursive",
//                     "font-size": "35px",
//                     "color": "red",
//                     "text-align": "center",
//                     "padding-top": "125px",
//                     "height": "375px"});
//         }
//     }
//     $('#pt').off("keydown", message2)
//     $('#pt').on("keydown", clearOnReturn)
// }

// powerZero();








//////////////////////////SCRATCH///////////////////////
// function controls() {
//   open
//   music
//   lock
//   unlock
//
// }
//
// function openToWin() {
//   if ($('#log').text() === "Doors are now open.") {
//     if ()
//   }
// }
//

function whenMusic() {
    audio.addEventListener('ended', unlockCameras);

    function unlockCameras() {

    }
}
