
/*

JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/


function convertToRoman(num) {
 
    let newNum = num;
    let romanNumber = '';

    if (newNum >= 1000 ) {
        let tempNumber = Math.floor(newNum / 1000);
        for (let i = 1; i <= tempNumber; i++) {
            newNum -= 1000;
            romanNumber += 'M';
        }
    }

    if (newNum >= 900 ) {
        let tempNumber = Math.floor(newNum / 900);
        for (let i = 1; i <= tempNumber; i++) {
            newNum -= 900;
            romanNumber += 'CM';
        }
    }


    if (newNum >= 500 ) {
        let tempNumber = Math.floor(newNum / 500);
        for (let i = 1; i <= tempNumber; i++) {
            newNum -= 500;
            romanNumber += 'D';
        }
    }

    if (newNum >= 400 ) {
        let tempNumber = Math.floor(newNum / 400);
        for (let i = 1; i <= tempNumber; i++) {
            newNum -= 400;
            romanNumber += 'CD';
        }
    }

    if (newNum >= 100 ) {
        let tempNumber = Math.floor(newNum / 100);
        for (let i = 1; i <= tempNumber; i++) {
            newNum -= 100;
            romanNumber += 'C';
        }
    }

    if (newNum >= 90 ) {
        let tempNumber = Math.floor(newNum / 90);
        for (let i = 1; i <= tempNumber; i++) {
            newNum -= 90;
            romanNumber += 'XC';
        }
    }


    if (newNum >= 50 ) {
        let tempNumber = Math.floor(newNum / 50);
        for (let i = 1; i <= tempNumber; i++) {
            newNum -= 50;
            romanNumber += 'L';
        }
    }


    if (newNum >= 40 ) {
        let tempNumber = Math.floor(newNum / 40);
        for (let i = 1; i <= tempNumber; i++) {
            newNum -= 40;
            romanNumber += 'XL';
        }
    }

    if (newNum >= 10 ) {
        let tempNumber = Math.floor(newNum / 10);
        for (let i = 1; i <= tempNumber; i++) {
            newNum -= 10;
            romanNumber += 'X';
        }
    }

    if (newNum >= 9) {
        let tempNumber = Math.floor(newNum / 9);
        console.log(tempNumber);
        for (let i = 1; i <= tempNumber; i++) {
            newNum -= 9;
            romanNumber += 'IX';
        }
    }
    


    if (newNum >= 5 && newNum < 9) {
      newNum -= 5;
      romanNumber += 'V';
    }

    if (newNum === 4) {
        newNum -= 4;
        romanNumber += 'IV';
    } else if (newNum === 3) {
        newNum -= 3;
        romanNumber += 'III';
    } else if (newNum === 2) {
        newNum -= 2;
        romanNumber += 'II';
    }  else if (newNum === 1) {
        newNum -= 1;
        romanNumber += 'I';
    }




    
    console.log(`final new num: ${newNum}`);
    console.log(`final roman number: ${romanNumber}`);

    return romanNumber;
}

convertToRoman(97);