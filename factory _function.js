function registration_numbers(existingReg) {
    // var objC = {}
    // var objB = {}
    // var objP = {}
    // var regex = /^(CA|CY|CL\s\d{3}\s\d{3})$/
    var objreg = existingReg || [] 

    function setReg(regs) {
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

    function getReg() {
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
        getReg,
        //registration
    }

}