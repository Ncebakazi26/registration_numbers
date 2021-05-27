describe("The registration_numbers factory function", function () {
    it("should show the registration under CapeTown if it starts with CA ", function () {
      let reg = registration_numbers();
   
    assert.equal(reg.setReg("CA 123 123"), true);

    });
    it("It should return false if it contains other special character other than - ", function () {
      let reg = registration_numbers();
   
    assert.equal(reg.setReg("CA 123*123"), false);

    });
});