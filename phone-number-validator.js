function telephoneCheck(str) {
  // Good luck!
  
  if (str.length === 0) {
    return false;
  }

  var regex = /[0-9()/-]/g
  
  if (!(regex.test(str) || str.length < 10)) {
    return false;
  }
  
  if (str.charAt(0) == 1) {

    if (str.charAt(1) == ' ' && str.charAt(5) == ' ' && str.charAt(9) == ' ') {
      return true;
    } else if (str.charAt(1) == ' ' && str.charAt(5) == '-' && str.charAt(9) == '-') {
      return true;
    } else if (str.charAt(1) == ' ' && str.charAt(2) == '(' && str.charAt(6) == ')' && str.charAt(7) == ' ' && str.charAt(11) == '-' ) {
      return true;
    } else if (str.charAt(1) == '(' && str.charAt(5) == ')' && str.charAt(9) == '-') {
      return true;
    }
  }

  if (str.charAt(0) == '(' && str.charAt(4) == ')' && str.charAt(8) == '-') {
    return true;
  }

  var numCheck = parseInt(str.charAt(0), 10);
  var numPhone = parseInt(str, 10);

  if (!isNaN(numCheck)) {
    if (str.charAt(3) == '-' && str.charAt(7) == '-') {
      return true;
    } else if (str.length === 10) {
      return true;
    }
  }

  if (!Number.isInteger(str.charAt(0))) {
    return false;
  } else {
    if (str.charAt(3) == '-' && str.charAt(7) == '-') {
      return true;

    }
  }



}

telephoneCheck("(55555555");	