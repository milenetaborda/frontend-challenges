/* 
Complete o método/função para que ele converta palavras delimitadas por hífen/underscore em camel case. A primeira palavra na saída deve ser capitalizada apenas se a palavra original estiver capitalizada (conhecido como UpperCamelCase, também frequentemente chamado de PascalCase). As palavras seguintes devem sempre ser capitalizadas.  

### Exemplos  
- `"The_Stealth_Warrior"` é convertido para `"TheStealthWarrior"`  
- `"the-stealth-warrior"` é convertido para `"theStealthWarrior"`  
- `"The_Stealth-Warrior"` é convertido para `"TheStealthWarrior"`
*/

function toCamelCase(str) {
  // Divide a string nos delimitadores "-" e "_".
  return str
    .split(/[-_]/)
    .map((word, index) => {
      /**
       * Transforma cada palavra do array:
       * - A primeira palavra mantém a capitalização original.
       * - As palavras seguintes têm a primeira letra convertida para maiúscula.
       */
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(""); // Junta todas as palavras transformadas em uma única string.

  console.log(capitalized);
}

function toCamelCase2(str) {
  /**
   * [-_] → Procura um hífen (-) ou underscore (_).
   * \w → Representa um caractere alfanumérico (letra ou número).
   * g → Faz uma busca global, ou seja, encontra todas as ocorrências na string.
   * i → Ignora diferenças entre maiúsculas e minúsculas.
   */
  var regExp = /[-_]\w/gi;

  // O método .replace() percorre a string procurando todas as ocorrências que correspondem à expressão regular.
  return str.replace(regExp, function (match) {
    /**
     * match.charAt(1) pega o segundo caractere da correspondência (a em -a, b em _b).
     * .toUpperCase() converte essa letra para maiúscula.
     * Ou seja, -a vira A, _b vira B, etc.
     */
    return match.charAt(1).toUpperCase();
  });
}
