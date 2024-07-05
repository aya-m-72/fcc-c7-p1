function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    input = input.toLowerCase()
    input = input.split(this.getUnit(input).toLowerCase())[0]
    if(input === ''){
      return 1
    }
    if (input.includes('/')){
      const numArr = input.split('/')
      if (numArr.length != 2){
        return 'invalid number'
      }
      try{
        result = parseFloat(numArr[0])/parseFloat(numArr[1])
        return result
      }catch(err){
        return 'invalid number'
      }
    }

    try {
      result = parseFloat(input)
      return result;
    } catch (err) {
      return "invalid number"
    }
  };
  
  this.getUnit = function(input) {
    const units = ['kg','lbs','gal','l','mi','km']
    let result;
    input = input.toLowerCase()
    result = input.match(/([a-z]+)$/)
    if(result){
      result = result[0]
      if(!units.includes(result)){
        result = 'invalid unit'
      }
    }else{
      result = 'invalid unit'
    }
    
    return result === 'l'?result.toUpperCase():result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    initUnit = initUnit.toLowerCase()
    switch (initUnit){
      case 'kg':
        result = 'lbs'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
      case 'gal':
        result = 'L'
        break
      case 'l':
        result = 'gal'
        break
      default:
        result = 'invalid unit'
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    unit = unit.toLowerCase()
    let result;
    switch (unit){
      case 'kg':
        result = 'kilograms'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'km':
        result = 'kilometers'
        break
      case 'mi':
        result = 'miles'
        break
      case 'gal':
        result = 'gallons'
        break
      case 'l':
        result = 'liters'
        break
      default:
        result = 'invalid unit'
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    initUnit = initUnit.toLowerCase()
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit){
      case 'kg':
        result = initNum/lbsToKg
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'km':
        result = initNum/ miToKm
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'gal':
        result = initNum * galToL
        break
      case 'l': 
        result = initNum / galToL
        break
      default:
        result = 'invalid unit'
    }

    
    return Math.round(result*10**5)/10**5;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    return result;
  };
  
}

module.exports = ConvertHandler;
