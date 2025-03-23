// 문제 3번: 배열 변형 (map+filter+reduce)
// 1) filter를 사용하여 짝수만 남긴다.
// 2) map을 사용하여 모든 숫자를 제곱한다.
// 3) reduce를 사용하여 최종 합계를 구한다.

const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

let filteredNumbers = numbers.filter(value => value%2 === 0);
console.log(filteredNumbers);

let mappedNumbers = filteredNumbers.map(value => value ** 2);
console.log(mappedNumbers);

let reducedNumbers = mappedNumbers.reduce((sum, num) => sum + num, 0);
console.log(reducedNumbers);