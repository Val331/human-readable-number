module.exports = function toReadable (number) {
    const obj = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety"
    }
    let arr = [];
    if (number === 0) return obj[number];
    else {
        while (number > 0) {
            if (number > 99) {
                arr.push(obj[Math.trunc(number / 100)], 'hundred');
                number = number % 100;
            } else if (number < 100 && number > 19) {
                arr.push(obj[number - (number % 10)]);
                number = number % 10;
            } else if (number < 20) {
                arr.push(obj[number]);
                break;
            }    
        }
    }
    return arr.join(' ');
}
