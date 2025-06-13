/**
 * Complete a solução para que ela retorne `true` se o primeiro argumento (string) passado terminar com o segundo argumento (também uma string).
 */

function solution(str, ending) {
  // O método endsWith() verifica se uma string termina com o valor especificado.
  return str.endsWith(ending)
}

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false