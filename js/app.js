console.log("PROJECT ONE LEGGO")

$('#log').text("Welcome to Beacon Mental Asylum! Congratulations on being hired to work in our night shift team! We have recently implemented state of the art technology so that you can control everything on this floor via the terminal! Please keep in mind that the technology is still in its experimental stages..but everything should be working properly. Have a wonderful evening! Login to continue as employee. Else, type .continue and press shift to login as guest.")

function initialContinue() {
  $('#pt').on("keydown", function(event){
    // if(event.keyCode === 13 && event.keyCode ===16) {
    if(event.keyCode ===16) {
      var x = ($('#pt').val())
      $('#pt').val('')
      console.log(x)
      event.preventDefault();
    }
    if (x===".continue") {
      $('#log').text("Welcome to Beacon Mental Asylum! You are in the main control room's accessing terminal. Have a wonderful evening!"+ '\n' +"Type .help in the command line and hit enter at any time if you need guidance on using this terminal.")
    }
  })
  clearOnReturn();
}

initialContinue();

var power=100;
// function powerControl(){
//   if(function) {
//     power-= .5;
//   }
// }

$('#power').text("Power: " + power + "%");

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

function clearOnReturn() {
  $('#pt').on("keydown", function(event){
    if(event.keyCode === 13) {
      var x = ($('#pt').val())
      $('#pt').val('')
      console.log(x)
      event.preventDefault();
    }
    if (x === '.help') {
      $('div#mgw').removeClass()
      $('div#mgw').addClass('homescreen')
      //view help menu
      $('#log').text('HELP COMMAND--' + "\n" + "use '.' + 'command', to initiate specific command; i.e. '.list' for a list of commands.. '.esc' will return you to the main terminal window.")
      clearOnReturn();
    }

    else if (x==='.list') {
      $('div#mgw').removeClass()
      $('div#mgw').addClass('homescreen')
      //view list of commands
      $('#log').text("LIST OF COMMANDS-- .esc, .help, .map, .cam, .cam1, .cam2, .cam3, .cam4, .cam5, .cam6, .cam7, .cam8, .lock, .unlock, .open, .close, .login");
      clearOnReturn();
    }

    else if (x==='.map'){
      //code to open map
      $('#log').text("CURRENT DIRECTORY: MAP");
      clearOnReturn();
    }

    else if (x==='.cam'){
      $('div#mgw').removeClass()
      $('div#mgw').addClass('homescreen')
      //code to show cam instructions
      $('#log').text("CAM CONTROL-- Bedroom 'Cheer' : Camera 1; Bedroom 'Chance' : Camera 3; Bedroom 'Change' : Camera 4; Bathroom 1 : Cam 2; Bathroom 2: Camera 5; Lab Room: Camera 6; Cafeteria Stage 1: Camera 7; Cafeteria Stage 2: Camera 8");
      clearOnReturn();
    }

    // else if (x==='.cam1') {
    //   $('div#mgw').removeClass()
    //   $('div#mgw').addClass('noSource')      $('#log').text("CURRENT DIRECTORY: BEDROOM 'CHANGE'")
    //   clearOnReturn();
    // }

    else if (x==='.cam2'){
      $('div#mgw').removeClass()
      $('div#mgw').addClass('bathroom1')
      $('#log').text("CURRENT DIRECTORY: BATHROOM 1");
      clearOnReturn();
    }

    else if (x==='.cam3'){
      $('div#mgw').removeClass()
      $('div#mgw').addClass('bedroomChance1')
      $('#log').text("CURRENT DIRECTORY: BEDROOM 'CHANCE'");
      clearOnReturn();
    }

    else if (x==='.cam4'){
      $('div#mgw').removeClass()
      $('div#mgw').addClass('bedroomChange1')
      $('#log').text("CURRENT DIRECTORY: BEDROOM 'CHANGE'")
      clearOnReturn();
    }

    else if (x==='.cam5'){
      $('div#mgw').removeClass()
      $('div#mgw').addClass('noSource')
      $('#log').text("CURRENT DIRECTORY: BATHROOM 2");
      clearOnReturn();
    }

    else if (x==='.cam6'){
      $('div#mgw').removeClass()
      $('#log').text("CURRENT DIRECTORY: LAB ROOM");
      clearOnReturn();
    }

    else if (x==='.cam7'){
      $('div#mgw').removeClass()
      $('#log').text("CURRENT DIRECTORY: CAFETERIA STAGE ONE");
      clearOnReturn();
    }

    else if (x==='.cam8'){
      $('div#mgw').removeClass()
      $('#log').text("CURRENT DIRECTORY: CAFETERIA STAGE TWO");
      clearOnReturn();
    }

    else if (x==='.close'){
      $('div#mgw').removeClass()
      $('div#mgw').addClass('homescreen')
      if (door === 'closed') {
        $('#log').text("Doors are already closed.");
        clearOnReturn();
      } else if (door === 'open') {
        $('#log').text("Closing Doors.");
        clearOnReturn();
      }
    }

    else if (x==='.open'){
      $('div#mgw').removeClass()
      $('div#mgw').addClass('homescreen')
      if (lock === 'on') {
        $('#log').text("Doors are locked. Unlock the doors first to open doors. Must be logged in as user admin in order to receive permission to unlock.");
      } else if (lock === 'off') {
        $('#log').text("Doors are now open.")
        alert("YOU ESCAPED!")
      }
      clearOnReturn();
    }

    else if (x==='.lock'){
      $('div#mgw').removeClass()
      $('div#mgw').addClass('homescreen')
      $('#log').text("Doors are already locked.");
      clearOnReturn();
    }

    else if (x==='.unlock') {
      $('div#mgw').removeClass()
      $('div#mgw').addClass('homescreen')
      if (user === 'guest') {
        $('#log').text("Must be signed in as admin to unlock or lock doors. Use .login to sign in as user admin.")
      } else if (user === 'admin') {
        $('#log').text("Doors unlocked!");
        lock = 'off';
      }
      clearOnReturn();
    }

    else if (x==='.login') {
      $('div#mgw').removeClass()
      $('div#mgw').addClass('homescreen')
      $('#log').text("Currently logged in as GUEST. Type 'login as admin' and press the Home button to login as admin");
      $('#pt').on('keydown', function(event) {
        if (event.keyCode === 36) {
          var y = ($('#pt').val())
          $('#pt').val('')
          event.preventDefault()
          if (y === 'login as admin') {
            $('#log').text("Password? Hit End        after.")
            $('#pt').on('keydown', function(event) {
              if (event.keyCode === 35) {
                var z = ($('#pt').val())
                $('#pt').val('')
                event.preventDefault();
                if (z='password') {
                  $('#log').text("Logged in as admin. You now have admin priveleges to control the asylum! You can now execute additional commands such as unlocking doors.")
                  user = 'admin';
                }
              }
            })
          }
        }
      })
      clearOnReturn()
    }

    else if (x=== '.esc') {
      $('div#mgw').removeClass()
      $('div#mgw').addClass('homescreen')
      $('#log').text("Welcome to Beacon Mental Asylum! You are in the main control room's accessing terminal. Have a wonderful evening!"+ '\n' +"Type .help in the command line if you need guidance on using the terminal.");
      clearOnReturn();
      return;
    }
    //code for "command not recognized"
    // } else {
    //   $('#pt').on("keydown", function(event){
    //     if(event.keyCode === 13) { $('#log').text('Command not recognized. Try .help for help or .list for a list of commands.')}
    //   })
    // }
  })
}

// tv = terminal value
// var tv = $('#pt').val()

clearOnReturn();

// if($('#pt').val() === 'help') {
//   $('#log').text('help')
// }

// $('#pt').val('');
