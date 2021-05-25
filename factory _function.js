function registration_numbers(existingReg) {
    var objC = {}
    // var objB = {}
    // var objP = {}
    // var regex = /^(CA|CY|CL\s\d{3}\s\d{3})$/
    var objreg = existingReg || []
    var reg = ""
    function isReapted(regs){
        var  repeated = false;
        console.log(regs + "regs")

    if(regs !== null) {
        for(var i=0; i<regs.length;i++){
            var elem = regs[i];
            
            if (objC[elem] === undefined) {
                objC[elem] = 0;
            } 
        }
    }
       

        console.log(objC)
        
        var newRegNumber = singleReg();

        for(let key in objC){

            if(newRegNumber in objC){
                alert("something");
                repeated = true
                break;
            }
        }

        return repeated

    }
    function setReg(regs) {
        reg = regs
        // if(regs.match(regex)){
        if (!objreg.includes(regs)) {
            objreg.push(regs)
            // return
            // return true
            // console.log(objreg)
        }

        // }
        // else {
        //     return "Please follow the format CA-123-123/CA 123 123"
        // }

    }
    function singleReg() {

        return reg
    }

    function getReglist() {
        return objreg;
    }
    // function registration(){
    //    
    // }

    //    function regAndtown(reg,){
    //        if(reg.startsWith("CA")){
    //        return true
    //        }
    //        if(reg.startsWith("CY")){
    //            reg = objB
    //     }
    //     if(reg.startsWith("CJ")){
    //         reg = objP
    //     }

    //    }
    return {
        //regAndtown,
        setReg,
        getReglist,
        singleReg,
        isReapted
    }

}