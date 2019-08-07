/* 
Implement a Caesar cipher, both encoding and decoding. The key is an integer from 1 to 25. 
This cipher rotates the letters of the alphabet (A to Z). 
The encoding replaces each letter with the 1st to 25th next letter in the alphabet (wrapping Z to A). 
So key 2 encrypts "HI" to "JK", but key 20 encrypts "HI" to "BC". 
This simple "monoalphabetic substitution cipher" provides almost no security, 
because an attacker who has the encoded message can either use frequency analysis to guess the key, 
or just try all 25 keys.
*/

const isUpperCase = (str) => {
    return str === str.toUpperCase();
}

// To encrypt a string using a caesar cipher
const caesarCipher = (str, key) => {
    let encrypt = '';

    for (let i = 0; i < str.length; i++) {
        if (isUpperCase(str[i])) {
            encrypt += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
        } else {
            encrypt += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
        }
    }

    return encrypt;
}

// To decrypt a caesar cipher
const caesarDecipher = (str, key) => {
    let decrypt = '';

    for (let i = 0; i < str.length; i++) {
        if (isUpperCase(str[i])) {
            decrypt += String.fromCharCode((str.charCodeAt(i) + (26 - key) - 65) % 26 + 65);
        } else {
            decrypt += String.fromCharCode((str.charCodeAt(i) + (26 - key) - 97) % 26 + 97);
        }
    }

    return decrypt;
}

caesarDecipher('yrryaiyrmlac', 24);
