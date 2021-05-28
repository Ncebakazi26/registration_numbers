var textarea = document.querySelector("#form")
var radiobtn = document.querySelector(".reg")
var addbtn = document.querySelector(".Addbtn")
var regNum = document.querySelector(".registrationNumbers")
var clearbtn = document.querySelector(".clear")
var displaybtn = document.querySelector(".display")
var displayMessage = document.querySelector(".message")
var specifTownbtn = document.querySelector(".town")
var listElem = document.querySelector("#myList")
console.log(listElem)
//var regex = /^((CA|CY|)CL\s\d{3}\s\d{3})$/
function textclear() {
  textarea.value = ""
  document.getElementById('Cape').checked = false
  document.getElementById('Bellville').checked = false
  document.getElementById('Paarl').checked = false

}
var registrationList = JSON.parse(localStorage.getItem('registrations'))
var registrationN = registration_numbers(registrationList)
if (registrationList) {
  for (var i = 0; i < registrationList.length; i++) {
    var x = registrationList[i]
    appendElement(x)
  }
}

function appendElement(newValue) {
  newValue = newValue.toUpperCase()
  var element = document.createElement("li");
  var textnode = document.createTextNode(newValue);
  element.appendChild(textnode);
  element.classList.add('reg_number');
  document.getElementById("myList").appendChild(element);
}
function registration() {
  var value = document.querySelector("#form").value
  registrationList = JSON.parse(localStorage.getItem('registrations'))
  registrationN.setReg(value)
  if (value === "") {
    setTimeout(function () {
      displayMessage.innerHTML = "Please enter registration number"
      displayMessage.classList.add("error")
    }, 0);
    setTimeout(function () {
      displayMessage.innerHTML = ""
    }, 2000);
    return false
  }
  if(registrationN.setReg(value)) {
 
    if (registrationList) {
      if (registrationN.isReapted(registrationList)) {
        setTimeout(function () {
          displayMessage.innerHTML = "This registration number already exist"
          displayMessage.classList.add("error")
        }, 0);
        setTimeout(function () {
          displayMessage.innerHTML = ""
        }, 2000);

      } else {
        localStorage.setItem('registrations', JSON.stringify(registrationN.getReglist()));
        appendElement(value)
      }
    } else {
      localStorage.setItem('registrations', JSON.stringify(registrationN.getReglist()));
      appendElement(value)
    }
    textclear()
  }
  else{
      setTimeout(function(){
      displayMessage.innerHTML = "Please follow this format CA 123-123/ CA 123 123"
      displayMessage.classList.add("error")
     
    },0);
    setTimeout(function(){
      displayMessage.innerHTML = ""
    }, 2000); 
  }
}

function forTown() {
  var radiobutton = document.querySelector(".reg:checked")
  var specificT = radiobutton.value
  document.getElementById("myList").innerHTML = ""

  for (var i = 0; i < registrationList.length; i++){
    if (registrationList[i].startsWith(specificT)) {
      appendElement(registrationList[i])
    }

    else {
      setTimeout(function () {
        displayMessage.innerHTML = "There is no registration number for this town"
        displayMessage.classList.add("error")
      }, 0);
      setTimeout(function () {
        displayMessage.innerHTML = ""
      }, 2000);
      
    }
    
  }
  textclear()
}
function displayAll() {
   document.getElementById("myList").innerHTML = ""
  if (registrationList) {
    for (var i = 0; i < registrationList.length; i++) {
      var x = registrationList[i]
      appendElement(x)
    }
  }
  else {
    setTimeout(function () {
      displayMessage.innerHTML = "Currently there are no existing registration numbers"
      displayMessage.classList.add("error")
    }, 0);
    setTimeout(function () {
      displayMessage.innerHTML = ""

    }, 2000);
  }
}


addbtn.addEventListener('click', registration)
specifTownbtn.addEventListener('click', forTown)
displaybtn.addEventListener('click', displayAll)

clearbtn.addEventListener('click', function () {
  localStorage.clear()
  location.reload()
});





