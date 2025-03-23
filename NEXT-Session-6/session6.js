/*
const scores = [90, 75, 82, 60, 88];

for(let score of scores) {
    console.log(passOrFail(score));
}

const students = {
    Alice: 90,
    Bob: 75,
    Charlie: 82,
    David: 60,
    Eve: 88,
};

function passOrFail(score) {
    return score >= 80 ? "PASS" : "FAIL";
}

for(student in students) {
    console.log(`${student}: ${students[student]}, ${passOrFail(students[student])}`);
}
*/

const price = [1000, 500, 300];
console.log(price.map(value => value * 0.9));

const scores = [85, 58, 72];
scores.forEach(score => { 
    const result = score >= 80 ? "합격": "불합격";
    console.log(result);
});

const words = ["apple", "hi", "banana", "car", "elephant"];
const longWords = words.filter(x => x.length >= 5);
console.log(longWords);

const obj = {
    name: "Alice",
    age: 25
};

const userQuery = prompt("name과 age 중 뭐가 궁금하신가요?");

console.log(`${userQuery}: ${obj[userQuery]}`);