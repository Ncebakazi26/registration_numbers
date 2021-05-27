function registration_numbers(existingReg) {
   var objC = {}
   // 
    var objreg = existingReg || []
    var reg = ""
    function isReapted(regs){
        //egs)
        var repeated = false;
        for(var i=0; i<regs.length;i++){
            var elem = regs[i];

            if(objC[elem] === undefined){
                objC[elem]=0;
            }
        }

        var registration = singleReg();

        if(objC.hasOwnProperty(registration)){
            repeated=true
        }
       return repeated
       
    }
    
    function setReg(regs) {
        regs = regs.toUpperCase()
        var regex = /^((CA|CY|CL)\s\d{3}\s\d{3})$|^((CA|CY|CL)\s\d{3}\-\d{3})$/
        var regexTest = regex.test(regs)
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
      return regexTest;
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