function encode() {
  let text = document.getElementById("text").value;
  let offset = parseInt(document.getElementById("text-num").value);
  document.getElementById("text-resp").innerHTML = cipherEncode(text, offset);
}

function cipherEncode(text, offset) {
  let letter = [];
  for (let i in text) {
    letter.push(text.charCodeAt(i));
  } 
  return cipherRight(letter, offset);
}

function cipherRight(letter, offset) {
  let letterCipher = [];
  for (let j in letter) {
    let letterMove = "";
    if (letter[j] >= 65 && letter[j] <= 90) {
      letterMove = (((letter[j] - 65) + offset) % 26) + 65;
    } else if (letter[j] >= 97 && letter[j] <= 122) {
      letterMove = (((letter[j] - 97) + offset) % 26) + 97;
    } else {
      letterMove = letter[j];
    }
    letterCipher.push(letterMove);
  }
  return cipherEnd(letterCipher);
}

function decode() {
  let text = document.getElementById("text-two").value;
  let offset = parseInt(document.getElementById("text-num-two").value);
  document.getElementById("text-resp-dec").innerHTML = cipherDecode(text, offset);
}

function cipherDecode(text, offset) {
  let letter = [];
  for (let i in text) {
    letter.push(text.charCodeAt(i));
  }
  return cipherLeft(letter, offset);
}

function cipherLeft(letter, offset) {
  let letterCipher = [];
  for (let j in letter) {
    let letterMove = "";
    if (letter[j] >= 65 && letter[j] <= 90) {
      letterMove = (((letter[j] - 90) - offset) % 26) + 90;
    } else if (letter[j] >= 97 && letter[j] <= 122) {
      letterMove = (((letter[j] - 122) - offset) % 26) + 122;
    } else {
      letterMove = letter[j];
    }
    letterCipher.push(letterMove);
  }
  return cipherEnd(letterCipher);
}

function cipherEnd(letterCipher) {
  let letterCipherEnd = "";
  for (let h in letterCipher) {
    let letterConv = String.fromCharCode(letterCipher[h]);
    letterCipherEnd = letterCipherEnd + letterConv;
  }
  return letterCipherEnd;
}