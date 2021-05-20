function registraion_numbers() {
    // var objC = {}
    // var objB = {}
    // var objP = {}
    var objreg = {}
    function setReg(regs) {
        if (objreg[regs] === undefined) {
            objreg[regs] = 0;

        }


    }
    function getReg() {
        return objreg;
    }
    // function registration(){
    //     var regex = "^(CA|CY|CL\s\d{3}\s\d{3})$"
    // }

    //    function regAndtown(reg,){
    //        if(reg.startsWith("CA")){
    //        reg = objC
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