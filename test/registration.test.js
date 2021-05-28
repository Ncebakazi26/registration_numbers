describe("The registration_numbers factory function", function () {
    it("should return true for Cape Town if the registration starts with CA ", function () {
      let reg = registration_numbers();
    assert.equal(reg.setReg("CA 123 123"), true);
});
  it("should return true for Bellville if the registration starts with CY  ", function () {
  let reg = registration_numbers();
  assert.equal(reg.setReg("CY 124 127"), true);
});
it("should return true for Paarl  if the registration starts with CL ", function () {
  let reg = registration_numbers();
assert.equal(reg.setReg("CL 123 123"), true);
});
describe("Registration numbers that are not from Cape Town,Bellville or Paarl", function (){
it("should return false if the registration starts with CJ ", function () {
  let reg = registration_numbers();
assert.equal(reg.setReg("CJ 123 123"), false);
});
it("should return false if the registration starts with CF ", function () {
  let reg = registration_numbers();
assert.equal(reg.setReg("CF 335 474"), false);
});
it("should return false if the registration starts with GP ", function () {
  let reg = registration_numbers();
assert.equal(reg.setReg("CP 246 987"), false);
});
});
describe("Format of registration numbers ", function (){
    it("It should return false if the registration number contains other special character other than -", function () {
      let reg = registration_numbers();
    assert.equal(reg.setReg("CA 123*123"), false);

    });
    it("It should return true if the registration number contain - ", function () {
      let reg = registration_numbers();
    assert.equal(reg.setReg("CA 123-123"), true);

    });
    it("It should return true if the registration number contain space", function () {
      let reg = registration_numbers();
    assert.equal(reg.setReg("CA 123-123"), true);

    });
    it("It should return false if the registration number does not contain space", function () {
      let reg = registration_numbers();
    assert.equal(reg.setReg("CA 123-123"), true);

    });
    it("It should return false if the registration number is more than 6 numbers", function () {
      let reg = registration_numbers();
    assert.equal(reg.setReg("CA 123-1237"), false);

    });
  });
});