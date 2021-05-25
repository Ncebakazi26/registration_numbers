var textarea = document.querySelector("#form")
var radiobtn = document.querySelector(".reg")
var addbtn = document.querySelector(".Addbtn")
var regNum = document.querySelector(".registrationNumbers")
var clearbtn = document.querySelector(".clear")
var displaybtn = document.querySelector(".display")
var displayMessage = document.querySelector (".message")
var specifTownbtn = document.querySelector(".town")

//var regex = /^(CA|CY|CL\s\d{3}\s\d{3})$/
var registrationList = JSON.parse(localStorage.getItem('registrations'))
//console.log(registrationList)
//var x = ''
// if (registrationList) {
//   console.log("There is data");
//   registrationList = JSON.parse(localStorage.getItem('registrations'))
//   for (var i = 0; i < registrationList.length; i++) {
//     x = registrationList[i] 
//     var element = document.createElement("li");
//     var textnode = document.createTextNode(x);
//    element.appendChild(textnode);
//    element.classList.add('reg_number');
  
//    }
// } else {
//   console.log("No There is data");
// }

//console.log(registrationList)
// if(registrationList.length > 0){
  // for (var i = 0; i < registrationList.length; i++) {
  //   x = registrationList[i] 
  //   var element = document.createElement("li");
  //   var textnode = document.createTextNode(x);
  //  element.appendChild(textnode);
  //  element.classList.add('reg_number');
  
  //  }
// }

//console.log(registrationList)

var registrationN = registration_numbers(registrationList)
//if(JSON.parse(localStorage.getItem('registrations')))
  var z = JSON.parse(localStorage.getItem('registrations'))

function registration(){
    // var regList = registrationN.getReg()
  registrationN.setReg(textarea.value)
console.log(registrationN.isReapted(registrationList))
  // for(var i =0; i< x.length ; i++){
   var  x = registrationN.getReglist()
    y=registrationN.singleReg()
    //console.log(x.includes(textarea.value))
 // console.log(registrationList == null)

  if(registrationList !== null) {
   // console.log(x.includes(textarea.value) ==false);
    if(registrationList.includes(textarea.value)==false) {

   // console.log("list")
    //       var element = document.createElement("li");
    //       var textnode = document.createTextNode(y);
    //       element.appendChild(textnode);
    //       element.classList.add('reg_number');
    //       document.getElementById("myList").appendChild(element);   
    //   } 
    
    //   else{
    //     displayMessage.innerHTML = "This registration number already exist"
    //     displayMessage.classList.add("error")
    //   }
    //   if(x ===""){
    //     displayMessage.innerHTML = "Please enter a registration number" 
     }
    //   localStorage.setItem('registrations', JSON.stringify(registrationN.getReglist()))

      
  }
  else{
    localStorage.setItem('registrations', JSON.stringify(registrationN.getReglist()))
    console.log("hey")
  }

  // if(!registrationList.includes(textarea.value)) {

  // //console.log(x.includes(textarea.value))
  //     var element = document.createElement("li");
  //     var textnode = document.createTextNode(y);
  //     element.appendChild(textnode);
  //     element.classList.add('reg_number');
  //     document.getElementById("myList").appendChild(element);   
  // } 

  // else{
  //   displayMessage.innerHTML = "This registration number already exist"
  //   displayMessage.classList.add("error")
  // }
  // if(x ===""){
  //   displayMessage.innerHTML = "Please enter a registration number" 
  // }
  // localStorage.setItem('registrations', JSON.stringify(registrationN.getReglist()))
  
}
addbtn.addEventListener('click', registration)

specifTownbtn.addEventListener('click',function() {
var radioBtn =radiobtn.value
if(!radioBtn){
  displayMessage.innerHTML= "Please choose a town"
}

});

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
