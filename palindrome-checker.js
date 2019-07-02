/*

JavaScript Algorithms and Data Structures Projects: Palindrome Checker


Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

*/



function palindrome(str) {
  // Good luck!

  str = str.toLowerCase();
  str = str.replace(/[^a-z^1-9]+/g, '');
  
  let tempArray = str.split('');

  let reverseArray = tempArray.reverse();

  let reverseString = reverseArray.join('');

  console.log(str);

  console.log(reverseString);

  if ( str === reverseString) {
      return true;
  } else {
      return false;
  }
}