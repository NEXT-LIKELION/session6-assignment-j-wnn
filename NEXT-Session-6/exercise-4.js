// 문제 4번: JSON 변환 + 구조 분해 할당 + 데이터 변형
// JSON 문자열을 파싱하여 구조 분해 할당을 활용해 필요한 값만 추출한 뒤, 새로운 객체를 만드세요.

const jsonString = `
[
    { "id": 1, "name": "Alice", "age": 25, "email": "alice@example.com"},
    { "id": 2, "name": "Bob", "age": 30, "email": "bob@example.com"},
    { "id": 3, "name": "Charlie", "age": 35, "email": "charlie@example.com"}
]
`;

const users = JSON.parse(jsonString);


// 객체로 이루어진 배열에서 구조 분해 할당을 통해 원하는 속성 가져오는 법!!
const updatedUsers = users.map(({id, name, age}) => ({
    id: id,
    name: name,
    age: age
}));

console.log(updatedUsers);