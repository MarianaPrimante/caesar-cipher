function verificaIgualdade(deslocado, esperado) {
  if (deslocado === esperado) {
    console.log("Certo");
  } else {
    console.log("Errado " + deslocado + " não é igual a " + esperado);
  }
}
verificaIgualdade(cipherEncode("xyz", 2), "zab");
verificaIgualdade(cipherEncode("AEIOU", 5), "ABCDE");
verificaIgualdade(cipherEncode("123", 5), "123");
verificaIgualdade(cipherEncode("b c d", 2), "d e f");
verificaIgualdade(cipherEncode("!&%$#", 8), "!&%$#");

verificaIgualdade(cipherDecode("zab", 2), "xyz");
verificaIgualdade(cipherDecode("AEIOU", 5), "ABCDE");
verificaIgualdade(cipherDecode("123", 5), "123");
verificaIgualdade(cipherDecode("d e f", 2), "b c d");
verificaIgualdade(cipherDecode("#$%&", 8), "#$%&");

