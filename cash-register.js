function checkCashRegister(price, cash, cid) {
  var change;

  // Here is your change, ma'am.

  /* setup initial variables */

  let changeDifference = cash - price;

  let pennies = cid[0][1];
  let penniesCount = pennies * 100;
  let nickels = cid[1][1];
  let nickelsCount = Math.round((nickels * 100) / 5);
  let dimes = cid[2][1];
  let dimesCount = Math.round((dimes * 100) / 10);
  let quarters = cid[3][1];
  let quartersCount = Math.round((quarters * 100) / 25);
  let ones = cid[4][1];
  let onesCount = ones / 1;
  let fives = cid[5][1];
  let fivesCount = fives / 5;
  let tens = cid[6][1];
  let tensCount = tens / 10;
  let twenties = cid[7][1];
  let twentiesCount = twenties / 20;
  let hundreds = cid[8][1];
  let hundredsCount = hundreds / 100;

  let totalInDrawer = pennies + nickels + dimes + quarters + ones + fives + tens + twenties;


  /* setup status variable */

  let status = '';

  if (changeDifference > totalInDrawer) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  } else if (changeDifference === totalInDrawer) {
    status = '"CLOSED"';
  } else {
    status = '"OPEN"';
  }

  let roundedChangeAmount = roundTheNumbers(changeDifference, 2);

  //split number to calculate change
  let integerPart = parseInt(roundedChangeAmount);
  let decimalPart = roundTheNumbers((roundedChangeAmount - integerPart), 2);

  let dollarOverPayment = integerPart;


  // calculate bills change

  if (dollarOverPayment >= 1) {

    if (hundredsCount > 0) {
      var hundredsBack = 0;

      if ((dollarOverPayment / 100) === 1) {
        hundredsBack = 1 * 100;
        dollarOverPayment = dollarOverPayment - 100;
      } else if ((dollarOverPayment % 100) === 0) {
        var getHundredCount = dollarOverPayment / 100;

        if (hundredsCount >= getHundredCount) {
          dollarOverPayment -= (getHundredCount * 100);
          hundredsBack = getHundredCount * 100;
        } else if (hundredsCount < getHundredCount) {
          dollarOverPayment -= (hundredsCount);
          hundredsBack = hundredsCount * 100;
        }

      } else if ((dollarOverPayment / 100) > 1) {
        let divisionResult = Math.floor(dollarOverPayment / 100);
        hundredsBack = divisionResult;

        if (hundredsCount >= hundredsBack) {
          dollarOverPayment = dollarOverPayment - (divisionResult * 100);
          hundredsBack = hundredsBack * 100;
        } else if (hundredsBack > hundredsCount) {
          dollarOverPayment -= (hundredsCount * 100);
          hundredsBack = hundredsCount * 100;
        }
      }

      var hundredsChange = ["ONE HUNDRED", hundredsBack];
    }


    if (twentiesCount > 0) {

      var twentiesBack = 0;

      if ((dollarOverPayment / 20) === 1) {
        twentiesBack = 1 * 20;
        dollarOverPayment = dollarOverPayment - 20;
      } else if ((dollarOverPayment % 20) === 0) {
        var getTwentyCount = dollarOverPayment / 20;

        if (twentiesCount >= getTwentyCount) {
          dollarOverPayment -= (getTwentyCount * 20);
          twentiesBack = getTwentyCount * 20;
        } else if (twentiesCount < getTwentyCount) {
          dollarOverPayment -= (twentiesCount);
          twentiesBack = twentiesCount * 20;
        }

      } else if ((dollarOverPayment / 20) > 1) {
        let divisionResult = Math.floor(dollarOverPayment / 20);
        twentiesBack = divisionResult;

        if (twentiesCount >= twentiesBack) {
          dollarOverPayment = dollarOverPayment - (divisionResult * 20);
          twentiesBack = twentiesBack * 20;
        } else if (twentiesBack > twentiesCount) {
          dollarOverPayment -= (twentiesCount * 20);
          twentiesBack = twentiesCount * 20;
        }
      }

      var twentiesChange = ["TWENTY", twentiesBack];
    }

    if (tensCount > 0) {

      var tensBack = 0;

      if ((dollarOverPayment / 10) === 1) {
        tensBack = 1 * 10;
        dollarOverPayment = dollarOverPayment - 10;
      } else if ((dollarOverPayment % 10) === 0) {
        var getTenCount = dollarOverPayment / 10;

        if (tensCount >= getTenCount) {
          dollarOverPayment -= (getTenCount * 10);
          tensBack = getTenCount * 10;
        } else if (tensCount < getTenCount) {
          dollarOverPayment -= (tensCount);
          tensBack = tensCount * 10;
        }

      } else if ((dollarOverPayment / 10) > 1) {
        let divisionResult = Math.floor(dollarOverPayment / 10);
        tensBack = divisionResult;

        if (tensCount >= tensBack) {
          dollarOverPayment = dollarOverPayment - (divisionResult * 10);
          tensBack = tensBack * 10;
        } else if (tensBack > tensCount) {
          dollarOverPayment -= (tensCount * 10);
          tensBack = tensCount * 10;
        }
      }

      var tensChange = ["TEN", tensBack];
    }


    if (fivesCount > 0) {

      var fivesBack = 0;

      if ((dollarOverPayment / 5) === 1) {
        fivesBack = 1 * 5;
        dollarOverPayment = dollarOverPayment - 5;
      } else if ((dollarOverPayment % 5) === 0) {
        var getFiveCount = dollarOverPayment / 5;

        if (fivesCount >= getFiveCount) {
          dollarOverPayment -= (getFiveCount * 5);
          fivesBack = getFiveCount * 5;
        } else if (fivesCount < getFiveCount) {
          dollarOverPayment -= (fivesCount);
          fivesBack = fivesCount * 5;
        }

      } else if ((dollarOverPayment / 5) > 1) {
        let divisionResult = Math.floor(dollarOverPayment / 5);
        fivesBack = divisionResult;


        if (fivesCount >= fivesBack) {
          dollarOverPayment = dollarOverPayment - (divisionResult * 5);
          fivesBack = fivesBack * 5;
        } else if (fivesBack > fivesCount) {
          dollarOverPayment -= (fivesCount * 5);
          fivesBack = fivesCount * 5;
        }
      }

      var fivesChange = ["FIVE", fivesBack];
    }

    if (onesCount > dollarOverPayment) {
      var onesBack = dollarOverPayment * 1;
      var onesChange = ["ONE", onesBack];
    } else if (penniesCount < overPayment) {
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      }
    }

  }

  // calculate coin change

  //convert to 100 to make math easier
  let decimalBase10 = roundTheNumbers((decimalPart * 100), 2);

  //check if change is due 
  let overPayment = decimalBase10;

  if (overPayment) {

    if (quartersCount > 0) {

      var quartersBack = 0;

      if ((overPayment / 25) === 1) {
        quartersBack = 1 * .25;
        overPayment = overPayment - 25;
      } else if ((overPayment % 25) === 0) {
        var getQuarterCount = overPayment / 25;
        if (quartersCount >= getQuarterCount) {
          overPayment -= (getQuarterCount * 25);
          quartersBack = getQuarterCount * .25;
        } else if (quartersCount < getQuarterCount) {
          overPayment -= (quartersCount * 25);
          quartersBack = quartersCount * .25;
        }

      } else if ((overPayment / 25) > 1) {
        let divisionResult = Math.floor(overPayment / 25);
        quartersBack = divisionResult;

        if (quartersCount >= quartersBack) {
          overPayment -= (quartersBack * 25);
          quartersBack = quartersBack * .25;
        } else if (quartersBack > quartersCount) {
          overPayment -= (quartersCount * 25);
          quartersBack = quartersCount * .25;
        }
      }

      var quartersChange = ["QUARTER", quartersBack];

    }


    if (dimesCount > 0) {

      var dimesBack = 0;

      if ((overPayment / 10) === 1) {
        dimesBack = 1 * .10;
        overPayment = overPayment - 10;
      } else if ((overPayment % 10) === 0) {
        var getDimeCount = overPayment / 10;
        if (dimesCount >= getDimeCount) {
          overPayment -= (getDimeCount * 10);
          dimesBack = getDimeCount * .10;
        } else if (dimesCount < getDimeCount) {
          overPayment -= (dimesCount * 10);
          dimesBack = dimesCount * .10;
        }


      } else if ((overPayment / 10) > 1) {
        let divisionResult = Math.floor(overPayment / 10);
        dimesBack = divisionResult;

        if (dimesCount >= dimesBack) {
          overPayment -= (dimesBack * 10);
          dimesBack = dimesBack * .10;
        } else if (dimesBack > dimesCount) {
          overPayment -= (dimesCount * 10);
          dimesBack = dimesCount * .10;
        }
      }

      var dimesChange = ["DIME", dimesBack];

    }

    if (nickelsCount > 0) {

      var nickelsBack = 0;

      if ((overPayment / 5) === 1) {
        nickelsBack = 1 * .05;
        overPayment = overPayment - 5;
      } else if ((overPayment % 5) === 0) {
        var getNickelCount = overPayment / 5;
        if (nickelsCount >= getNickelCount) {
          overPayment -= (getNickelCount * 5);
          nickelsBack = getNickelCount * .05;
        } else if (nickelsCount < getNickelCount) {
          overPayment -= (nickelsCount * 5);
          nickelsBack = nickelsCount * .05;
        }


      } else if ((overPayment / 5) > 1) {
        let divisionResult = Math.floor(overPayment / 5);
        nickelsBack = divisionResult;

        if (nickelsCount >= nickelsBack) {
          overPayment -= (nickelsBack * 5);
          nickelsBack = nickelsBack * .05;
        } else if (nickelsBack > nickelsCount) {
          overPayment -= (nickelsCount * 5);
          nickelsBack = nickelsCount;
        }
      }

      var nickelsChange = ["NICKEL", nickelsBack];

    }


    //remainder is all pennies 

    if (penniesCount >= overPayment) {
      var penniesBack = overPayment * 1;
      overPayment -= penniesBack;
      penniesBack = penniesBack * 0.01;
      var penniesChange = ["PENNY", penniesBack];
    } else if (penniesCount < overPayment) {
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      }
    }

  }

  //setup change return value

  var changeReturn = [];

  if (status == '"OPEN"') {

    if (hundredsChange) {
      if (hundredsChange[1] >= 100) {
        changeReturn.push(hundredsChange);
      }
    }

    if (twentiesChange) {
      if (twentiesChange[1] >= 20) {
        changeReturn.push(twentiesChange);
      }
    }

    if (tensChange) {
      if (tensChange[1] >= 10) {
        changeReturn.push(tensChange);
      }
    }

    if (fivesChange) {
      if (fivesChange[1] >= 5) {
        changeReturn.push(fivesChange);
      }
    }

    if (onesChange) {
      if (onesChange[1] >= 1) {
        changeReturn.push(onesChange);
      }
    }

    if (quartersChange) {
      if (quartersChange[1] >= .25) {
        changeReturn.push(quartersChange);
      }
    }

    if (dimesChange) {
      if (dimesChange[1] >= .10) {
        changeReturn.push(dimesChange);
      }
    }

    if (nickelsChange) {
      if (nickelsChange[1] >= .05) {
        changeReturn.push(nickelsChange);
      }
    }

    if (penniesBack > .01) {
      changeReturn.push(penniesChange);
    }


    return {
      status: "OPEN",
      change: changeReturn
    }

  } else if (status === '"CLOSED"') {

    if (penniesBack > .01) {
      changeReturn.push(penniesChange);
    } else {
      penniesChange = ["PENNY", 0];
      changeReturn.push(penniesChange);
    }

    if (nickelsChange) {
      if (nickelsChange[1] >= .05) {
        changeReturn.push(nickelsChange);
      }
    } else {
      nickelsChange = ["NICKEL", 0];
      changeReturn.push(nickelsChange);
    }

    if (dimesChange) {
      if (dimesChange[1] >= .10) {
        changeReturn.push(dimesChange);
      }
    } else {
      dimesChange = ["DIME", 0];
      changeReturn.push(dimesChange);
    }

    if (quartersChange) {
      if (quartersChange[1] >= .25) {
        changeReturn.push(quartersChange);
      }
    } else {
      quartersChange = ["QUARTER", 0];
      changeReturn.push(quartersChange);
    }

    if (onesChange) {
      if (onesChange[1] >= 1) {
        changeReturn.push(onesChange);
      }
    } else {
      onesChange = ["ONE", 0];
      changeReturn.push(onesChange);
    }


    if (fivesChange) {
      if (fivesChange[1] >= 5) {
        changeReturn.push(fivesChange);
      }
    } else {
      fivesChange = ["FIVE", 0];
      changeReturn.push(fivesChange);
    }


    if (tensChange) {
      if (tensChange[1] >= 10) {
        changeReturn.push(tensChange);
      }
    } else {
      tensChange = ["TEN", 0];
      changeReturn.push(tensChange);
    }


    if (twentiesChange) {
      if (twentiesChange[1] >= 20) {
        changeReturn.push(twentiesChange);
      }
    } else {
      twentiesChange = ["TWENTY", 0];
      changeReturn.push(twentiesChange);
    }

    if (hundredsChange) {
      if (hundredsChange[1] >= 100) {
        changeReturn.push(hundredsChange);
      }
    } else {
      hundredsChange = ["ONE HUNDRED", 0];
      changeReturn.push(hundredsChange);
    }

    return {
      status: "CLOSED",
      change: changeReturn
    }
  }

}


const roundTheNumbers = (value, decimals) => {
  let roundedNumber = Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  return roundedNumber;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
