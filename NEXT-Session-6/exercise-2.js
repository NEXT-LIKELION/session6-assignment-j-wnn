// 문제 2번: 객체 속성 추가 + for in & for of 활용
// 1) for in 으로 객체의 속성을 순화하면서, 모든 값이 문자열이면 "확인됨" 추가
// 2) for of 로 배열을 순회하면서 길이가 5 이상인 단어만 필터링

const person = {
    name: "David",
    city: "London",
    age: 30,
};

console.log(typeof person.name);

for (let info in person) {
    if (typeof person[info] === "string") {
        person[info] = person[info] + " (확인됨)";
    } 
}

console.log(person);

const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];
const longWords = [];

for (let word of words) {
    word.length >= 5 ? longWords.push(word) : null;
}

console.log(longWords);

