var textarea = document.querySelector("#form")
var radiobtn = document.querySelector(".reg")
var addbtn = document.querySelector(".Addbtn")
var regNum = document.querySelectorAll(".registrationNumbers")

var registrationN = registraion_numbers()

function submitReg(){
    // var radiobutton = document.querySelector(".reg:checked")
    var registration = textarea.value
    // if( radiobutton){
    //     var town = radiobutton.value
    // }
    regNum.innerHtml = registrationN.getReg(registration)
}
addbtn.addEventListener('click',submitReg)
