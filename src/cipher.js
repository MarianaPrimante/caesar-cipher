function cifrar() {
    const text = document.getElementById("text").value;
    const numDesl = document.getElementById("textNum").value;
    const numDeslOrig = parseInt(numDesl);
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
            letterDesl = (((letter[j] - 65) + numDeslOrig) % 26) + 65
        } else if (letter[j] >= 97 && letter[j] <= 122) {
            letterDesl = (((letter[j] - 97) + numDeslOrig) % 26) + 97
        }
        letterCipher.push(letterDesl)

    }
    for (let h = 0; h < letterCipher.length; h++) {
        let letterConv = String.fromCharCode(letterCipher[h])
        letterCipherEnd = letterCipherEnd + letterConv
    }
    document.getElementById("textCipher").innerHTML = ("O texto criptografado é " + letterCipherEnd + ".");

}

function decifrar(){
    const text = document.getElementById("textTwo").value;
    const numDesl = document.getElementById("textNumTwo").value;
    const numDeslOrig = parseInt(numDesl);
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
            letterDesl = (((letter[j] - 90) - numDeslOrig) % 26) + 90
        } else if (letter[j] >= 97 && letter[j] <= 122) {
            letterDesl = (((letter[j] - 122) - numDeslOrig) % 26) + 122
        }
        letterCipher.push(letterDesl)

    }
    for (let h = 0; h < letterCipher.length; h++) {
        let letterConv = String.fromCharCode(letterCipher[h])
        letterCipherEnd = letterCipherEnd + letterConv
    }
    document.getElementById("textCipherTwo").innerHTML = ("O texto descriptografado é " + letterCipherEnd + ".");
}