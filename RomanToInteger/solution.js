const obj = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
}

const stringPatterns = ["CM", "CD", "XC", "XL", "IX", "IV", "M", "D", "C", "L", "X", "V", "I"];

var romanToInt = function (s) {

    let i = 0;
    let output = 0;

    while (i < stringPatterns.length) {

        let regex = new RegExp(stringPatterns[i], "g");
        let count = (s.match(regex) || []).length;

        if (count != 0) {
            output += obj[stringPatterns[i]] * count;
            s = s.replace(regex, "");
        }
        i++;
    }

    return output;

};

console.log(romanToInt("XI"));