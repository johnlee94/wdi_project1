console.log("PROJECT ONE LEGGO")


$('#resetButton').on('click', reset);

function reset() {
    $('#pt').off("keydown", clearOnReturn)
    // $('#pt').off ("keydown", fakeLogin)
    // $('#pt').off ("keydown", loginAsAdmin)
    // $('#pt').off ("keydown", loginAsPassword)
    $('div#mgw').removeClass()
    $('div#mgw').addClass('homescreen')
    $('#log').text("Welcome to Beacon Mental Asylum! Congratulations on being hired to work in our night shift team! We have recently implemented state of the art technology so that you can control everything on this floor via the terminal! Please keep in mind that the technology is still in its experimental stages..but everything should be working properly. Have a wonderful evening! Use .login to login to continue as an employee. Else, type 'login as guest' and press enter to login as guest.")
    $('#mgw').text('')
    $('#pt').on("keydown", initialScreen)
    resetGlobalVariables()

    function resetGlobalVariables() {
        door = "closed";
        lock = 'on';
        user = 'guest';
        power = 100;
        cam1Count = 0;
        cam2Count = 0;
        cam3Count = 0;
        cam4Count = 0;
        cam5Count = 0;
        cam6Count = 0;
        cam7Count = 0;
        cam8Count = 0;
        warning10 = false;
        x = '';
        playMusic = 0;
        finalChecker = 0;
        labTracker = 0;
        electrifier = 0;
        cameraTracker;
        electrifierOn = 1;
        gameEndTracker = 'off'
    }
}


$('#log').text("Welcome to Beacon Mental Asylum! Congratulations on being hired to work in our night shift team! We have recently implemented state of the art technology so that you can control everything on this floor via the terminal! Please keep in mind that the technology is still in its experimental stages..but everything should be working properly. Have a wonderful evening! Use .login to login to continue as an employee. Else, type 'login as guest' and press enter to login as guest.")

$('#pt').on("keydown", initialScreen)

function initialScreen(event) {
    // if(event.keyCode === 13 && event.keyCode ===16) {
    if (event.keyCode === 13) {
        var x = ($('#pt').val())
        $('#pt').val('')
        console.log(x)
        event.preventDefault();
    }
    if (x === "login as guest") {
        $('#log').text("Welcome to Beacon Mental Asylum! You are in the main control room's accessing terminal. Have a wonderful evening!" + '\n' + "Type .help in the command line and hit enter at any time if you need guidance on using this terminal.")
        $('#pt').off('keydown', initialScreen)
        $('#pt').on('keydown', clearOnReturn)
    } else if (x === ".login") {
        $('#log').text("Username?")
        $('#pt').off('keydown', initialScreen)
        $('#pt').on('keydown', fakeLogin)

        function fakeLogin(event) {
            if (event.keyCode === 13) {
                var z = $('#pt').val()
                $('#pt').val('')
                event.preventDefault()
                if (z !== "Dr. Seuss") {
                    $('#log').text("Invalid username. Try again with command .login. Or, type 'login as guest' to continue as user guest.")
                    $('#pt').off('keydown', fakeLogin)
                    $('#pt').on('keydown', initialScreen)
                } else if (z === "Dr. Seuss") {
                    $('#log').text("You've already beaten this game. CONGRATS NERD. Adding features for post-game content in the future! For now, feel free to replay as guest.. 'login as guest'")
                    $('#pt').off('keydown', fakeLogin)
                    $('#pt').on('keydown', initialScreen)
                }
            }
        }
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
var finalChecker = 0;
var labTracker = 0;
var electrifier = 0;
var cameraTracker;
var electrifierOn = 1;
var gameEndTracker = 'off'

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
            cameraTracker = 'off';
            $('div#mgw').removeClass()
            $('#mgw').text('')
            $('div#mgw').addClass('homescreen')
            //view help menu
            $('#log').text('HELP COMMAND--' + "\n" + "use '.' + 'command', to initiate specific command; i.e. '.list' for a list of commands.. '.esc' will return you to the main terminal window.")
        } else if (x === '.list') {
            cameraTracker = 'off';
            $('div#mgw').removeClass()
            $('#mgw').text('')
            $('div#mgw').addClass('homescreen')
            //view list of commands
            $('#log').text("LIST OF COMMANDS-- .esc, .help, .map, .reboot, .devNotes, .cam, .cam1, .cam2, .cam3, .cam4, .cam5, .cam6, .cam7, .cam8, .lock, .unlock, .open, .close, .login, .music, .electrifier");
        } else if (x === '.map') {
            cameraTracker = 'off';
            $('#mgw').text('')
            //code to open map
            $('#log').text("CURRENT DIRECTORY: MAP");

            power -= .5;
        } else if (x === '.cam') {
            cameraTracker = 'off';
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            //code to show cam instructions
            $('#log').text("CAM CONTROL-- Bedroom 'Cheer' : Camera 1; Bedroom 'Chance' : Camera 3; Bedroom 'Change' : Camera 4; Bathroom 1 : Cam 2; Bathroom 2: Camera 5; Lab Room: Camera 6; Hallway 1: Camera 7; Hallway 2: Camera 8");

            power -= .5;
        } else if (x === '.cam1') {
            if (cameraTracker !== 1) {
                setTimeout(tracker1, 100)

                function tracker1() {
                    cameraTracker = 1;
                }
                cam1Count++
                power -= 1;
            }
            if (playMusic === 0 && cameraTracker !== 1) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('noSource')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHEER'");
            } else if (playMusic === 0) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('noSource')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 1'");
            } else if (playMusic === 1 && cameraTracker !== 1) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomCheer1')
                $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHEER' ALERT: Sensor triggered in the 'LAB ROOM'");
                $('#mgw').text("You give me what I want and I'll behave.. ")
                    .css({
                        "font-family": "'Gochi Hand', cursive",
                        "font-size": "100px",
                        "color": "red",
                        "text-align": "center",
                        "padding-top": "125px",
                        "height": "375px"
                    })
            } else if (playMusic === 1) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomCheer1')
                $('#mgw').text("You give me what I want and I'll behave..")
                $('#log').text("Already viewing 'CAM 1'");
            }

        } else if (x === '.cam2') {
            if (cameraTracker !== 2) {
                setTimeout(tracker2, 100)

                function tracker2() {
                    cameraTracker = 2;
                }
                cam2Count++
                power -= 1;
            }
            if (cameraTracker !== 2 && cam2Count !== 2 && cam2Count !== 4 && finalChecker === 0) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bathroom1')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BATHROOM 1");
            } else if (cam2Count !== 2 && cam2Count !== 4 && finalChecker === 0) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bathroom1')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 2'");
            } else if (finalChecker === 0 && (cam2Count === 2 || cam2Count === 4) && cameraTracker !== 2) {
                $('div#mgw').removeClass()
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BATHROOM 1");
                $('div#mgw').addClass('eye')
                setTimeout(resetCam2, 700);
                setTimeout(audioDoor, 700);

                function audioDoor() {

                    var audio = $('#audioMain')
                    var source = $('#audioSourceMain')
                    source.attr('src', 'audio/door.mp3')
                    audio[0].load()
                    audio[0].play()
                }
                // setTimeout(resetAudio2, 6000)
                //
                // function resetAudio2() {
                //     // source.attr('src', 'audio/audio.mp3')
                //     // audio[0].pause()
                //     // audio[0].load()
                //     // audio[0].play()
                // }

                // playDoor()
                //
                // function playDoor () {
                //   var audio = $('#audioMain')
                //   var source = $('audioSourceMain')
                //   source.attr('src', 'audio/door.mp3')
                //   audio[0].pause()
                //   audio[0].load()
                //   audio[0].play()
                //   setTimeout(resetAudio2, 6000)
                //   function resetAudio2() {
                //     source.attr('src', 'audio/audio.mp3')
                //     audio[0].pause()
                //     audio[0].load()
                //     audio[0].play()
                //   }
                //
                // }

                function resetCam2() {
                    $('div#mgw').removeClass()
                    $('#mgw').addClass('noSource')
                    $('#mgw').text('')
                    $('#log').text("CURRENT DIRECTORY: BATHROOM 1")
                    setTimeout(resetCam2_1, 7000)

                    function resetCam2_1() {
                        $('#mgw').addClass('bathroom1')
                    }
                }
            } else if (finalChecker === 0 && (cam2Count === 2 || cam2Count === 4)) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bathroom1')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 2'");
            } else if (finalChecker === 1 && cameraTracker !== 2) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bathroom1')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BATHROOM 1");
            } else if (finalChecker === 1) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bathroom1')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 2'");
            }


        } else if (x === '.cam3') {
            // $('#pt').off('keydown', clearOnReturn)
            if (cameraTracker !== 3) {
                setTimeout(tracker3, 100)

                function tracker3() {
                    cameraTracker = 3;
                }
                cam3Count++
                power -= 1;
            }
            if (cam3Count !== 2 && cam3Count !== 4 && cameraTracker !== 3) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChance1')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHANCE'");


                // $('#pt').off('keydown', clearOnReturn)
                //
                // $('#pt').on("keydown", message1)
            } else if (cam3Count !== 2 && cam3Count !== 4) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChance1')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 3'");
            } else if (cam3Count === 2 && cameraTracker !== 3) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChance1')
                $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHANCE'")
                $('#mgw').text("You are not alone..")
                    .css({
                        "font-family": "'Gochi Hand', cursive",
                        "font-size": "100px",
                        "color": "red",
                        "text-align": "center",
                        "padding-top": "125px",
                        "height": "375px"
                    })

            } else if (cam3Count === 2) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChance1')
                $('#log').text("Already viewing 'CAM 3'");
            } else if (cam3Count === 4 && cameraTracker !== 3) {
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
            } else if (cam3Count === 4) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChance1')
                $('#log').text("Already viewing 'CAM 3'");
            }


        } else if (x === '.cam4') {
            if (cameraTracker !== 4) {
                setTimeout(tracker4, 100)

                function tracker4() {
                    cameraTracker = 4;
                }
                cam4Count++
                power -= 1;
            }
            if (cam4Count === 1 && cameraTracker !== 4) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChange1')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHANGE'")
                // $('#pt').off('keydown', clearOnReturn)
                //
                // $('#pt').on("keydown", message2)

            } else if (cam4Count === 1) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChange1')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 4'")
            } else if (cam4Count > 1 && cameraTracker !== 4) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChange1')
                $('#log').text("CURRENT DIRECTORY: BEDROOM: 'CHANGE'")
                $('#mgw').text("The old man loved his daughter. So I took her from him..Her name was Delilah")
                    .css({
                        "font-family": "'Gochi Hand', cursive",
                        "font-size": "35px",
                        "color": "red",
                        "text-align": "center",
                        "padding-top": "125px",
                        "height": "375px"
                    });
            } else if (cam4Count > 1) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bedroomChange1')
                $('#log').text("Already viewing 'CAM 4'")
            }


        } else if (x === '.cam5') {
            if (cameraTracker !== 5) {
                setTimeout(tracker5, 500)

                function tracker5() {
                    cameraTracker = 5;
                }
                cam5Count++
                power -= 1;
            }
            if (finalChecker === 0 && cameraTracker !== 5) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('noSource')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BATHROOM 2");
            } else if (finalChecker === 0) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('noSource')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 5'");
            } else if (finalChecker === 1 && cameraTracker !== 5) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bathroom2')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: BATHROOM 2");
            } else if (finalChecker === 1) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('bathroom2')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 5'");
            }

        } else if (x === '.cam6') {
            if (cameraTracker !== 6) {
                setTimeout(tracker6, 500)

                function tracker6() {
                    cameraTracker = 6;
                }
                cam6Count++
                power -= 1;
            }
            if (playMusic === 0 && cam6Count === 1 && cameraTracker !== 6) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('lab1')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: LAB ROOM");
                setTimeout(audioKnock, 500)

                function audioKnock() {

                    var audio = $('#audioMain')
                    var source = $('#audioSourceMain')
                    source.attr('src', 'audio/knocking.mp3')
                    audio[0].load()
                    audio[0].play()
                }
            } else if (playMusic === 0 && cam6Count === 1) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('lab1')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 6'");
            } else if (playMusic === 0 && cameraTracker !== 6) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('lab1')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: LAB ROOM");
            } else if (playMusic === 0) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('lab1')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 6'");
            } else if (playMusic === 1 && cam6Count <= 2 && cameraTracker !== 6) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('lab1')
                $('#mgw').text('')
                $('#log').text("CURRENT DIRECTORY: LAB ROOM");
            } else if (playMusic === 1 && cam6Count <= 2) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('lab1')
                $('#mgw').text('')
                $('#log').text("Already viewing 'CAM 6'");
            } else if (playMusic === 1 && cam6Count > 2 && cameraTracker !== 6) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('lab1')
                $('#mgw').text("The doctor always knew how to make me feel better. He loved me very much. I miss him very much. Where is he? You're not him.")
                    .css({
                        "font-family": "'Gochi Hand', cursive",
                        "font-size": "35px",
                        "color": "red",
                        "text-align": "center",
                        "padding-top": "125px",
                        "height": "375px"
                    });
                $('#log').text("CURRENT DIRECTORY: LAB ROOM --ALERT: Camera 7 is now online..")
                labTracker = 1;
            } else if (playMusic === 1 && cam6Count > 2) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('lab1')
                $('#log').text("Already viewing 'CAM 6'")
            }
        } else if (x === '.cam7') {
            if (cameraTracker !== 7) {
                setTimeout(tracker7, 500)

                function tracker7() {
                    cameraTracker = 7;
                }
                cam7Count++
                power -= 1;
            }
            if (labTracker === 0 && cameraTracker !== 7) {
                $('div#mgw').removeClass()
                $('#mgw').text('')
                $('div#mgw').addClass('noSource')
                $('#log').text("CURRENT DIRECTORY: HALLWAY ONE");
            } else if (labTracker === 0) {
                $('div#mgw').removeClass()
                $('#mgw').text('')
                $('div#mgw').addClass('noSource')
                $('#log').text("Already viewing 'CAM 7'");
            } else if (labTracker === 1 && cameraTracker !== 7) {
                $('div#mgw').removeClass()
                $('#mgw').text('')
                $('div#mgw').addClass('hw1')
                $('#log').text("CURRENT DIRECTORY: HALLWAY ONE --SYSTEM UPDATE: Electrifier is now online and ready for action.");
                electrifier = 1;
            } else if (labTracker === 1) {
                $('div#mgw').removeClass()
                $('#mgw').text('')
                $('div#mgw').addClass('hw1')
                $('#log').text("Already viewing 'CAM 7'");
            }

        } else if (x === '.cam8') {
            if (cameraTracker !== 8) {
                setTimeout(tracker8, 500)

                function tracker8() {
                    cameraTracker = 8;
                }
                cam8Count++
                power -= 1;
            }
            if (finalChecker === 0 && cameraTracker !== 8) {
                $('div#mgw').removeClass()
                $('#mgw').text('')
                $('div#mgw').addClass('noSource')
                $('#log').text("CURRENT DIRECTORY: HALLWAY TWO");
            } else if (finalChecker === 0) {
                $('div#mgw').removeClass()
                $('#mgw').text('')
                $('div#mgw').addClass('noSource')
                $('#log').text("Already viewing 'CAM 8'");
            } else if (finalChecker === 1 && cameraTracker !== 8) {
                $('div#mgw').removeClass()
                $('#mgw').text('THANK YOU. I AM GOING TO HIM')
                    .css({
                        "font-family": "'Gochi Hand', cursive",
                        "font-size": "100px",
                        "color": "red",
                        "text-align": "center",
                        "padding-top": "125px",
                        "height": "375px"
                    });
                $('div#mgw').addClass('hw2')
                $('#log').text("CURRENT DIRECTORY: HALLWAY TWO")
            } else if (finalChecker === 1) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('hw2')
                $('#log').text("Already viewing 'CAM 8'");
            }

        } else if (x === '.close') {
            cameraTracker = 'off'
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            if (door === 'closed') {
                $('#log').text("Doors are already closed.");

            } else if (door === 'open') {
                $('#log').text("Closing Doors.");

            }
        } else if (x === '.open') {
            cameraTracker = 'off'
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            if (lock === 'on') {
                $('#log').text("Doors are locked. Unlock the doors first to open doors. Must be logged in as user admin in order to receive permission to unlock.");
            } else if (lock === 'off') {
                if (playMusic === 0) {
                    $('div#mgw').removeClass()
                    $('div#mgw').addClass('gameOver')
                    $('#mgw').text('')
                    $('#log').text("As you run out of the control room, an unknown woman grabs you from the dark and slits your throat.. The last words you hear are her shrills 'I ONLY WANTED TO BE FRIENDS'")
                    $('#pt').off('keydown', clearOnReturn)
                    gameEndTracker = 'on';


                } else if (playMusic === 1 && finalChecker === 0) {
                    $('div#mgw').removeClass()
                    $('div#mgw').addClass('gameOver')
                    $('#mgw').text('')
                    $('#log').text("As you slowly walk out of the control room, a woman from the dark appears smiling. 'I'll never let you leave!' She then grabs you by the throat and thrusts a knife into your brain. >_<")
                    $('#pt').off('keydown', clearOnReturn)
                    gameEndTracker = 'on';

                } else if (playMusic === 1 && finalChecker === 1) {
                    $('#mgw').text('')
                    $('#log').text("Doors are now open.")
                    alert("YOU ESCAPED!")
                    setTimeout(youWin, 1000)

                    function youWin() {
                        $('#mgw').removeClass()
                        $('#mgw').addClass('winScreen')
                        $('#mgw').text('')
                        $('#log').text('Congrats you won! Now run for your life and never speak of what has happened here tonight..')
                        $('#pt').off('keydown', clearOnReturn)
                        var audio = $('#audioMain')
                        var source = $('#audioSourceMain')
                        var audio2 = $('#audioOne')
                        source.attr('src', 'audio/win.mp3')
                        audio2[0].pause()
                        audio[0].load()
                        audio[0].play()
                        // setTimeout(stopPlay, 3000)
                        gameEndTracker = 'on';

                        // function stopPlay() {
                        //     audio[0].pause()
                        // }
                    }
                }
            }

        } else if (x === '.lock') {
            cameraTracker = 'off'
            if (lock === 'on') {
                $('div#mgw').removeClass()
                $('#mgw').text('')
                $('div#mgw').addClass('homescreen')
                $('#log').text("Doors are already locked.");
            } else if (lock === 'off') {
                $('div#mgw').removeClass()
                $('#mgw').text('')
                $('div#mgw').addClass('homescreen')
                $('#log').text("Locking the main control room doors..")
                lock = 'on'
            }

        } else if (x === '.unlock') {
            cameraTracker = 'off'
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            if (user === 'guest') {
                $('#log').text("Must be signed in as admin to unlock or lock doors. Use .login to sign in as user admin.")
            } else if (user === 'admin' && lock === 'on') {
                $('#log').text("Doors unlocked!");
                lock = 'off';
            } else if (user === 'admin' && lock === 'off') {
                $('#log').text("Doors are currently unlocked. Use .open to open the control room doors.")
            }
        } else if (x === '.music') {
            cameraTracker = 'off'
            if (user === 'admin') {
                power -= 10;
                playMusic = 1;
                var source = $('#audioSourceMain')
                var audio = $('#audioMain')
                var source2 = $('#audioMainFile')
                var audio2 = $('#audioOne')
                $('div#mgw').removeClass()
                $('div#mgw').addClass('homescreen')
                $('#mgw').text('')
                $('#log').text('Music turned on. This should calm her down.. ALERT: Camera 1 is now online..')
                audio2[0].pause()
                source.attr('src', 'audio/song.mp3')
                // audio.load()
                audio[0].load()
                audio[0].play()
                //need to add a timed function by which the original audio plays after the song is finished.
                setTimeout(restoreAudio, 36000)

                function restoreAudio() {
                    // source.attr('src', 'audio/audio.mp3')
                    // audio[0].pause()
                    // audio[0].load()
                    audio2[0].play()
                    source.attr('src', '')
                }
            } else if (user === 'guest') {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('homescreen')
                $('#mgw').text('')
                $('#log').text('Only admin user may access music!')
            }
        } else if (x === '.login') {
            cameraTracker = 'off'
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            if (user === 'guest') {

                $('#log').text("Currently logged in as GUEST. Type 'login as admin' and press the Enter key to login as admin");
                $('#pt').off('keydown', clearOnReturn)
                $('#pt').on('keydown', loginAsAdmin)
                // loginAsAdmin();

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
            cameraTracker = 'off'
            $('#mgw').text('')
            $('#mgw').removeClass()
            $('#mgw').addClass('homescreen')
            $('#log').text("Developer Notes (Last log: Saturday, July 9th, 2014): 1. Fix the locking system for bedrooms and lab. Remember to get soundproof walls for the lab room. The neighbors have started to become concerned with the constant screaming.. 2. Fix the command for the electrifier that can be controlled from the control room. The music is not enough to get Elaine to quiet down anymore..")

        } else if (x === '.electrifier') {
            cameraTracker = 'off'
            if (electrifier === 0) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('homescreen')
                $('#mgw').text('')
                $('#log').text('Electrifier is currently offline. Require certain sources to be plugged in before electrifier is up and running.')
            } else if (electrifier === 1 && power < 25) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('homescreen')
                $('#mgw').text('')
                $('#log').text('Not enough power to run the Electifier. System requires at least 25% of battery life to run the Electrifier.')
            } else if (electrifier === 1 && power > 25 && electrifierOn === 1) {
                power -= 15;
                $('#pt').off('keydown', clearOnReturn)
                $('div#mgw').removeClass()
                $('div#mgw').addClass('homescreen')
                $('#mgw').text('')
                $('#log').text('Preparing to run the Electrifier. Checking to see if main doors are closed... Please Standby...')
                setTimeout(nextMessage, 3000)
                setTimeout(finalMessage, 12000)
                //she dies
                function nextMessage() {
                    $('#log').text('Running the Electrifier.. All rooms and hallways except the control room are being zapped!')
                    var audio2 = $('#audioOne')
                    var source = $('#audioSourceMain')
                    var audio = $('#audioMain')
                    source.attr('src', 'audio/dies.mp3')
                    audio[0].load()
                    audio[0].play()
                    // setTimeout(resetSound, 6100)
                    //
                    // function resetSound() {
                    //     source.attr('src', 'audio/audio.mp3')
                    //     audio[0].pause()
                    // }
                }

                function finalMessage() {
                    $('#log').text("Electrifier now turned off. ALERT: Cameras 5 and 8 firing up.. All Cameras are now online.")
                    finalChecker = 1;
                    electrifierOn = 0;
                    $('#pt').on('keydown', clearOnReturn)
                }
            } else if (electrifierOn === 0) {
                $('div#mgw').removeClass()
                $('div#mgw').addClass('homescreen')
                $('#mgw').text('')
                $('#log').text('Need time to recharge system before electrifier is ready to be ran again.')
            }
        } else if (x === '.reboot') {
            cameraTracker = 'off'
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            $('#log').text("System shutting down...");
            setTimeout(systemShutDown, 5000)

            function systemShutDown() {
                $('div#mgw').removeClass()
                $('#mgw').text('')
                $('#log').text('')
                $('#log, #mgw').css("background-color", "black")
                setTimeout(powerToZero, 3000)

                function powerToZero() {
                    power = 0;
                }
            }
        } else if (x === '.esc') {
            cameraTracker = 'off'
            $('div#mgw').removeClass()
            $('div#mgw').addClass('homescreen')
            $('#mgw').text('')
            $('#log').text("Welcome to Beacon Mental Asylum! You are in the main control room's accessing terminal. Have a wonderful evening!" + '\n' + "Type .help in the command line if you need guidance on using the terminal.");

            return;
        }
        whiteNoise();
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
// var gameEndTracker = 'off'
function powerLessTen() {
    if (power < 10 && power > 0 && gameEndTracker === 'off') {
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
    if (power === 0 || power < 0 && gameEndTracker === 'off') {
        //end game, player lost
        power = 0;
        $('#log').text('You are out of battery.. Panicking, you try to force the doors open but the doors refuse to budge. You realize your doom when you pull out your phone and have 0 bars. Curses, Sprint! You are trapped to rot in the asylum indefinitely.. ')
        $('#power').text('')
        $('#mgw').text('')
        $('#mgw').removeClass()
        $('#mgw').addClass('gameOver')
        $('#log').css({
            "background-color": "black"
        })
        // $('#mgw').css({
        //     "background-color": "black"
        // })
        //turn all eventlisteners off(*HOW?*)
        $('#pt').off('keydown', clearOnReturn)
        gameEndTracker = 'on';
    }
}

function eyeCamera() {
    $('div#mgw').removeClass()
    $('#mgw').text('')
    $('#log').text("CURRENT DIRECTORY: BATHROOM 1");
    $('div#mgw').addClass('eye')
    setTimeout(resetCam2, 700)

    function resetCam2() {
        $('div#mgw').removeClass()
        $('#mgw').addClass('noSource')
        $('#mgw').text('')
        $('#log').text("CURRENT DIRECTORY: BATHROOM 1")
    }
    setTimeout(resetCam2_1, 500)

    function resetCam2_1(cameraNumber) {
        for (i = 0; i < cameraNumber.length; i++) {
            $('#mgw').addClass(cameraNumber[i])
        }
    }
}


var cameraNumber = [];

// function whiteNoise() {
//     var audio = $('#audioMain')
//     var source = $('#audioSourceMain')
//     if ($('#mgw').attr('class') === 'noSource' && source.attr('src') !== 'audio/song.mp3' && cameraTracker !== 2) {
//         source.attr('src', 'audio/whitenoise.mp3')
//         audio[0].pause()
//         audio[0].load()
//         audio[0].play()
//     } else if (source.attr('src') === 'audio/audio.mp3' && source.attr('src') !== 'audio/song.mp3') {
//         return;
//     } else if ($('#mgw').attr('class') !== 'noSource' && source.attr('src') !== 'audio/song.mp3') {
//         source.attr('src', 'audio/audio.mp3')
//         audio[0].pause()
//         audio[0].load()
//         audio[0].play();
//     } else {
//         return
//     }
// }

function whiteNoise() {
    var audio = $('#audioMain')
    var source = $('#audioSourceMain')
    if (($('#mgw').attr('class') === 'noSource' && source.attr('src') !== 'audio/song.mp3' && cameraTracker !== 2)) {
        source.attr('src', 'audio/whitenoise.mp3')
        audio[0].load()
        audio[0].play()
    }
    if ($('#mgw').attr('class') !== 'noSource' && source.attr('src') !== 'audio/song.mp3' && cameraTracker !== 2) {
        audio[0].pause()
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
//
// function loginAsAdmin(event) {
//     if (event.keyCode === 13) {
//         var y = ($('#pt').val())
//         $('#pt').val('')
//         event.preventDefault()
//         if (y === 'login as admin') {
//             $('#log').text("Password? Hit Enter after.")
//             $('#pt').off('keydown', loginAsAdmin)
//             $('#pt').on('keydown', loginPassword)
//             loginPassword();
//         }
//     }
// }
//
// function loginPassword(event) {
//     if (event.keyCode === 13) {
//         var z = ($('#pt').val())
//         $('#pt').val('')
//         event.preventDefault();
//         if (z === 'Delilah') {
//             $('#log').text("Logged in as admin. You now have admin priveleges to control the asylum! You can now execute additional commands such as unlocking doors.")
//             user = 'admin';
//             $('#pt').off('keydown', loginPassword)
//             $('#pt').on("keydown", clearOnReturn)
//         } else {
//             $('#log').text("Wrong password. (Hint: Her.) Press .esc to return to the main menu.")
//             $('#pt').off('keydown', loginPassword)
//             $('#pt').on("keydown", clearOnReturn)
//         }
//     }
// }








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
