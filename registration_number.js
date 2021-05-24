var textarea = document.querySelector("#form")
var radiobtn = document.querySelector(".reg")
var addbtn = document.querySelector(".Addbtn")
var regNum = document.querySelector(".registrationNumbers")
var clearbtn = document.querySelector(".clear")
var displaybtn = document.querySelector(".display")

//var regex = /^(CA|CY|CL\s\d{3}\s\d{3})$/
var registrationList;

// if (localStorage['registrations']) {
//   registrationList = JSON.parse(localStorage.getItem('registrations'))
// }
var registrationN = registration_numbers()
function registration(){
   //if(reg.match(regex)){
    
  var regList = registrationN.getReg()
  var element = document.createElement("li");
  var textnode = document.createTextNode(textarea.value);
  element.appendChild(textnode);
  element.classList.add('reg_number');

  document.getElementById("myList").appendChild(element);
  for (var i = 0; i <= regList.length; i++) {
    registrationN.setReg(textarea.value)
    localStorage.setItem('registrations', JSON.stringify(registrationN.getReg()))

  }
}


// function DisplayingReg() {
//   var element = document.createElement("li");
//   var textnode = document.createTextNode(textarea.value);
//   element.appendChild(textnode);
//   element.classList.add('reg_number');

//   document.getElementById("myList").appendChild(element);

//   registrationN.setReg(textarea.value)
//   localStorage.setItem('registrations', JSON.stringify(registrationN.getReg()))

// }

addbtn.addEventListener('click', registration)

// else {
//   return "Please enter a registration number"
// }



clearbtn.addEventListener('click', function () {
  localStorage.clear()
  location.reload()
});



// function setlocalstorage(key, value) {
//   window.setItem(key, JSON.stringify(value));
// }

// function getlocalstorage(key) {
//   var value = window.localStorage.getItem(key);
//   if (value == null) {
//     return null
//   }
//   return JSON.parse(value)
// }

    // var radiobutton = document.querySelector(".reg:checked")
    // var registration = textarea.value
    // registrationN.setReg(registration)
    // console.log(registration)
    // if( radiobutton){
    //     var town = radiobutton.value
    // }

   // regNum.innerHTML = registrationN.getReg()

//  button.addEventListener('click', function(){
//    h4.appendChild(element)
//   } , false);
