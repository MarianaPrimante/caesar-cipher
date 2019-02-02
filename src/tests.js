if (cipher("abc", 2) === "cde") {
    console.log("Certo");
} else {
    console.log("Errado")
}

if (cipher("ABC", 2) === "CDE") {
    console.log("Certo")
} else {
    console.log("Errado")
}

if (cipher("123", 10) === "123") {
    console.log("Certo")
} else {
    console.log("Errado")
}

function verificaIgualdade(deslocado, esperado) {
    if (deslocado === esperado) {
        console.log("Certo");
    } else {
        console.log("Errado " + deslocado + " não é igual a " + esperado);
    }
}
verificaIgualdade(cipher("xyz", 2), "zab")
verificaIgualdade(cipher("AEIOU", 5), "ABCDE")
verificaIgualdade(cipher("123", 5), "123")
verificaIgualdade(cipher("b c d", 2), "d e f")
verificaIgualdade(cipher("!&%$#", 8), "!&%$#")


verificaIgualdade(cipherTwo("zab", 2), "xyz")
verificaIgualdade(cipherTwo("AEIOU", 5), "ABCDE")
verificaIgualdade(cipherTwo("123", 5), "123")
verificaIgualdade(cipherTwo("d e f", 2), "b c d")
verificaIgualdade(cipherTwo("#$%&", 8), "#$%&")