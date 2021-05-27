var textarea = document.querySelector("#form")
var radiobtn = document.querySelector(".reg")
var addbtn = document.querySelector(".Addbtn")
var regNum = document.querySelector(".registrationNumbers")
var clearbtn = document.querySelector(".clear")
var displaybtn = document.querySelector(".display")
var displayMessage = document.querySelector (".message")
var specifTownbtn = document.querySelector(".town")
var listElem = document.querySelector("#myList")
console.log(listElem)
//var regex = /^(CA|CY|CL\s\d{3}\s\d{3})$/

var registrationList = JSON.parse(localStorage.getItem('registrations'))
var registrationN = registration_numbers(registrationList)
// registrationN.setReg("hell")
// console.log(registrationN.getReglist())
 if (registrationList) {
  for (var i = 0; i < registrationList.length; i++) {
    var x = registrationList[i] 
  appendElement(x)
   }
}

function appendElement(newValue){
      var element = document.createElement("li");
      var textnode = document.createTextNode(newValue);
     element.appendChild(textnode);
     element.classList.add('reg_number');
     document.getElementById("myList").appendChild(element); 
}
function registration(){
  var value = document.querySelector("#form").value
  registrationList = JSON.parse(localStorage.getItem('registrations'))
  registrationN.setReg(value)
  if(value === ""){
    displayMessage.innerHTML = "Please enter registration number"
      displayMessage.classList.add("error")
      return false
  } 
  if(registrationList){
    if(registrationN.isReapted(registrationList)){
      displayMessage.innerHTML = "This registration number already exist"
      displayMessage.classList.add("error") 
    } else{
      localStorage.setItem('registrations', JSON.stringify(registrationN.getReglist()));
      appendElement(value)
    }
  } else{
    localStorage.setItem('registrations', JSON.stringify(registrationN.getReglist()));
    appendElement(value)
  }
  
  }
  

function forTown(){
  var radiobutton = document.querySelector(".reg:checked")
  var specificT = radiobutton.value
  for(var i =0; i<registrationList.length;i++){
    if(registrationList[i].startsWith(specificT)){
      document.getElementById("myList").innerHTML = ""
      appendElement(registrationList[i])
    }

  }

  
}
function displayAll(){
  if (registrationList) {
    for (var i = 0; i < registrationList.length; i++) {
      var x = registrationList[i] 
    appendElement(x)
     }
  } 
  }


addbtn.addEventListener('click', registration)
specifTownbtn.addEventListener('click',forTown)
displaybtn.addEventListener('click' , displayAll)

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
