function encode() {
    let text = document.getElementById("text").value;
    let offset = parseInt(document.getElementById("textNum").value);

    document.getElementById("textResp").innerHTML = cipher(text, offset);
}

function cipher(text, offset) {
    let letter = [];
    let letterCipher = [];
    let letterCipherEnd = "";

    for (let i = 0; i < text.length; i++) {
        letter.push(text.charCodeAt(i))
    }

    for (let j = 0; j < letter.length; j++) {
        console.log(letter[j])
        let letterDesl = ""
        if (letter[j] >= 65 && letter[j] <= 90) {
            letterDesl = (((letter[j] - 65) + offset) % 26) + 65
        } else if (letter[j] >= 97 && letter[j] <= 122) {
            letterDesl = (((letter[j] - 97) + offset) % 26) + 97
        } else if (letter[j] = 32) {
            letterDesl = (letter[j] = 32)
        }
        letterCipher.push(letterDesl)

    }
    for (let h = 0; h < letterCipher.length; h++) {
        let letterConv = String.fromCharCode(letterCipher[h])
        letterCipherEnd = letterCipherEnd + letterConv
    }
    return letterCipherEnd
}

function decode() {
    let text = document.getElementById("textTwo").value;
    let offset = parseInt(document.getElementById("textNumTwo").value);

    document.getElementById("textRespDec").innerHTML = cipherTwo(text, offset);
}

function cipherTwo(text, offset) {
    let letter = [];
    let letterCipher = [];
    let letterCipherEnd = "";
    for (let i = 0; i < text.length; i++) {
        letter.push(text.charCodeAt(i))
    }

    for (let j = 0; j < letter.length; j++) {
        let letterDesl = ""
        if (letter[j] >= 65 && letter[j] <= 90) {
            letterDesl = (((letter[j] - 90) - offset) % 26) + 90
        } else if (letter[j] >= 97 && letter[j] <= 122) {
            letterDesl = (((letter[j] - 122) - offset) % 26) + 122
        } else {
            letterDesl = letter[j]
        }
        letterCipher.push(letterDesl)

    }
    for (let h = 0; h < letterCipher.length; h++) {
        let letterConv = String.fromCharCode(letterCipher[h])
        letterCipherEnd = letterCipherEnd + letterConv
    }
    return letterCipherEnd
}