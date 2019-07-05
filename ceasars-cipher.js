function rot13(str) { // LBH QVQ VG!
  
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let decodedString = '';

  for (let i=0; i < str.length; i++) {

    if (str.charAt(i).match(/[a-z]/i)) {

      let letter = (alphabet.indexOf(str.charAt(i)) +1);

      let letterFind = '';
      if (letter <= 13) {
        letterFind = letter+13;
      } else if (letter > 13) {
        letterFind = letter-13;
      }

      let decodedLetter = alphabet.charAt(letterFind-1);
      decodedString += decodedLetter;
    
    } else {
      decodedString += str.charAt(i);
    }
    
  }

  return decodedString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");