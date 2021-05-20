var textarea = document.querySelector("#form")
var radiobtn = document.querySelector(".reg")
var addbtn = document.querySelector(".Addbtn")
var regNum = document.querySelector(".registrationNumbers")

var registrationN = registraion_numbers()

function registration(reg){
  var element = document.createElement("li");                
  var textnode = document.createTextNode(reg);     
  element.appendChild(textnode);
  element.classList.add('reg_number');
                                
  document.getElementById("myList").appendChild(element); 
  

}
function addReg(){
  registration(textarea.value)
}

addbtn.addEventListener('click',addReg)

//function submitReg(){
  // var registration = textarea.value
  //  var h4= document.getElementById("reg")
  //  var button = document.getElementById("btn")
  //  var input =document.getElementById("form")

  //  var element = document.createElement("h4");
  // // var makeText  = document.createTextNode(registration);
  //  element.innerHTML = registration

  // add the text node to the newly created div
  
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

//addbtn.addEventListener('click', submitReg)