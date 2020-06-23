/* Определяет окончание слова в зависимости от числа n
1 минута
2 минуты
5 минут
https://realadmin.ru/coding/sklonenie-na-javascript.html   */
export const getCorrectWordFormByNumber = (n: number, textForms: string[]) => {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }
  if (n1 === 1) {
    return textForms[0];
  }
  return textForms[2];
};
