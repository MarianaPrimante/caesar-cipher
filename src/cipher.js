window.cipher = {
    // ... 
};

function pegaText() {
    var text = document.getElementById("textTest").value;
    var textCript = document.getElementById("textCipher");
    var numDesl = document.getElementById("textNum");

    textCript.innerHTML = ("O texto criptografado é " + text + ".");
}

function pegaTextTwo() {
    var textTwo = document.getElementById("textTest").value;
    var textDescript = document.getElementById("textCipherTwo");

    textDescript.innerHTML = ("O texto descriptografado é " + textTwo + ".");
}