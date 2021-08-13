/* .js files add interaction to your website */

// quotes
var factList = [
  "'To be actively anti-racist we must fight against anti-Blackness in AAPI communities and society as a whole.'   -stopasianhate.info",/*0*/
  "'Darkness cannot drive darkness; Light can do that. Hate cannot drive out hate; Love can do that.'     -Martin Luther King",/*1*/
  "'We must understand, as Asian Americans, we just need to reach out our hand to our sisters and brothers and say, 'Help me and I'm here'    -Sandra Oh",/*2*/
  "'We need to stop the dehumanization of Asians. We need to stop the scapegoating of Asians for COVID. We need to unite against all forms of hate...Please spread awareness, check in on your Asian friends because we are not ok.. educate yourself and others on the model minority myth and the long history of anti-Asian racism...Please don’t be silent.'     -Gemma Chan"];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if(myButton){
myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


// SCRIPT
var displayScript = document.getElementById("scriptReturned");
var scriptButton = document.getElementById("scriptButton");

if (scriptButton) {
  scriptButton.addEventListener("click", generateScript);
}


// creating the script
function generateScript() {
  if (document.getElementById("role1").checked) {
    var name = document.getElementById("name").value; 
    var location = document.getElementById("location").value;
    var date = document.getElementById("date").value;
    var concern = document.getElementById("concern").value;
    var perpetrator = document.getElementById("perpetrator").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    displayScript.innerHTML = "Hello, my name is " + name + ". I am calling as a witness of a hate crime. The incident happened at " + location + " on " + date + ". " + concern + " Here is what I remember about the perpetrator: " + perpetrator + " Please contact me at " + phoneNumber + " if you need more information. Thank you." ;

  } else {
    var name = document.getElementById("name").value; 
    var location = document.getElementById("location").value;
    var date = document.getElementById("date").value;
    var concern = document.getElementById("concern").value;
    var perpetrator = document.getElementById("perpetrator").value;
    var phoneNumber = document.getElementById("phoneNumber").value;  

    displayScript.innerHTML = "Hello, my name is " + name + ". I am calling as a victim of a hate crime. The incident happened at " + location + " on " + date + ". " + concern + " Here is what I remember about the perpetrator: " + perpetrator + " Please contact me at " + phoneNumber + " if you need more information. Thank you." ;
  }
}


  // SCRIPT CHECKBOX ATTEMPTS 

  // } else {
  //   document.getElementById('role2').checked = true && scriptButton.addEventListener("click", generateScript2)
  // }

  // if (role1) {
  //   scriptButton.addEventListener("click", generateScript1);
  // }

  // if (role2) {
  //   scriptButton.addEventListener("click", generateScript2)
  // }

  // if (role1) {
  //   role1.addEventListener("click", replaceRole)
  // }

  // function replaceRole() {
  //   var role1 = document.getElementById("role1").value;
  // }

  // var role1 = document.getElementById('role1').onclick = function() {
  //   if (document.getElementById('role1').checked) {
  //       alert(document.getElementById('role1').value);
  //   }
  //   else if (document.getElementById('role2').checked) {
  //       alert(document.getElementById('role2').value);
  //   }
  // } 

  // if (role2) {
  //   role2.addEventListener("click", replaceRole)
  // }

  // function replaceRole2() {
  //   var role = document.getElementById("role2").value;
  // }


//   displayScript.innerHTML = "Hello, my name is " + name + ". I am calling as a witness of a hate crime. The incident happened at " + location + " on " + date + ". " + concern + " Here is what I remember about the perpetrator: " + perpetrator + " Please contact me at " + phoneNumber + " if you need more information. Thank you." ;
// }

// function generateScript1() {
//   var name = document.getElementById("name").value; 
//   var location = document.getElementById("location").value;
//   var date = document.getElementById("date").value;
//   var concern = document.getElementById("concern").value;
//   var perpetrator = document.getElementById("perpetrator").value;
//   var phoneNumber = document.getElementById("phoneNumber").value;

//   displayScript.innerHTML = "Hello, my name is " + name + ". I am calling as a victim of a hate crime. The incident happened at " + location + " on " + date + ". " + concern + " Here is what I remember about the perpetrator: " + perpetrator + " Please contact me at " + phoneNumber + " if you need more information. Thank you." ;

// }
//  displayScript.innerHTML = "Hello, my name is " + name + ". I am calling as a witness/victim of a hate crime. The incident happened at " + location + " on " + date + ". " + concern + " Here is what I remember about the perpetrator: " + perpetrator + " Please contact me at " + phoneNumber + " if you need more information. Thank you." ;
