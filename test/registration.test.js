describe("The registration_numbers factory function", function () {
    it("should show the registration under CapeTown if it starts with CA ", function () {
      let reg = registraion_numbers()

    assert.equal(reg.regAndtown("CA-123 125") );

    });
});