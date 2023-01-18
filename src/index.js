const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    const getArray = (str) => str.match(/.{1,10}/g).map((item) => {
        result.push(item.replace(/10/g, '.').replace(/11/g, '-'))
    })
    getArray(expr);
    let newArr = [];
    for (let i = 0; i < result.length; i++) {
        newArr.push(result[i].replace(/0/g, '').replace(/1/g, ''))
    }
    let done = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === '**********') {
            done.push(' ')
        }
        for (key in MORSE_TABLE) {
            if (key === newArr[i]) {
                done.push(MORSE_TABLE[key])
            }
        }
    }
    return done.join('');
}

module.exports = {
    decode
}