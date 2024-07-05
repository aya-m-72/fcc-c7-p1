const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test("test1", function () {
      assert.strictEqual(convertHandler.getNum('2kg'), 2 )
    })
    test("test2", function () {
        assert.strictEqual(convertHandler.getNum('1.2kg'), 1.2)
    })
    test("test3", function () {
        assert.strictEqual(convertHandler.getNum('1/2kg'), 0.5)
    })
    test("test4", function () {
        assert.strictEqual(convertHandler.getNum('2.5/2.5kg'), 1)
    })
    test("test5", function () {
        assert.strictEqual(convertHandler.getNum("3/2/3kg"), 'invalid number')
    })
    test("test6", function () {
        assert.strictEqual(convertHandler.getNum("kg"), 1)
    })
    test('test7', function(){
        assert.strictEqual(convertHandler.getUnit('l'),'L')
        assert.strictEqual(convertHandler.getUnit('L'),'L')
        assert.strictEqual(convertHandler.getUnit('gal'),'gal')
        assert.strictEqual(convertHandler.getUnit("kg"), "kg")
        assert.strictEqual(convertHandler.getUnit("KG"), "kg")
        assert.strictEqual(convertHandler.getUnit("Kg"), "kg")
        assert.strictEqual(convertHandler.getUnit("kG"), "kg")
        assert.strictEqual(convertHandler.getUnit("LBS"), "lbs")
        assert.strictEqual(convertHandler.getUnit("MI"), "mi")
        assert.strictEqual(convertHandler.getUnit("kM"), "km")
    })
    test("test8", function () {
      assert.strictEqual(convertHandler.getUnit("k"), 'invalid unit')
    })
    test("test9", function () {
      assert.strictEqual(convertHandler.getReturnUnit("kg"), "lbs")
      assert.strictEqual(convertHandler.getReturnUnit("lbs"), "kg")
      assert.strictEqual(convertHandler.getReturnUnit("mi"), "km")
      assert.strictEqual(convertHandler.getReturnUnit("km"), "mi")
      assert.strictEqual(convertHandler.getReturnUnit("l"), "gal")
      assert.strictEqual(convertHandler.getReturnUnit("gal"), "L")
    })
    test("test10", function () {
      assert.strictEqual(convertHandler.spellOutUnit("kg"), "kilograms")
      assert.strictEqual(convertHandler.spellOutUnit("lbs"), "pounds")
      assert.strictEqual(convertHandler.spellOutUnit("mi"), "miles")
      assert.strictEqual(convertHandler.spellOutUnit("km"), "kilometers")
      assert.strictEqual(convertHandler.spellOutUnit("l"), "liters")
      assert.strictEqual(convertHandler.spellOutUnit("gal"), "gallons")
    })
    test("test11", function () {
      assert.strictEqual(convertHandler.convert(1,"gal"), 3.78541)
    })
    test("test12", function () {
      assert.strictEqual(convertHandler.convert(1,"l"), 0.26417)
    })
    test("test13", function () {
      assert.strictEqual(convertHandler.convert(1,"mi"), 1.60934)
    })
    test("test14", function () {
      assert.strictEqual(convertHandler.convert(1,"km"), 0.62137)
    })
    test("test15", function () {
      assert.strictEqual(convertHandler.convert(1,"lbs"), 0.45359)
    })
    test("test16", function () {
      assert.strictEqual(convertHandler.convert(1,"kg"), 2.20462)
    })
});