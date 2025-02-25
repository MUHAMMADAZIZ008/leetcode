/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0
    let rom = new Map([
        ['i', 1],
        ['v', 5],
        ['x', 10],
        ['l', 50],
        ['c', 100],
        ['d', 500],
        ['m', 1000]
    ]);
    for (let i = 0; i < s.length - 1; i++) {
        let firstNumber;
        const char = s[i].toLowerCase()
        const char2 = s[i + 1].toLowerCase()
        if (rom.has(char) && i === 0) {
            sum += rom.get(char)

        } else if (rom.has(char)) {
            if (rom.get(char) < rom.get(char2)) {
                sum += Math.abs(rom.get(char) - rom.get(char2))
            } else {
                sum += rom.get(char)
            }
        };
    }
    return sum
};

// const s = "III"
// const s = "LVIII"
const s = "MCMXCIV"
console.log(romanToInt(s))