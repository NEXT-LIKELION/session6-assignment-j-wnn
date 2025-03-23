// 문제 1번: 삼항 연산자 + 구조 분해 할당 + 객체 조작
// map을 사용하여 age에 따라 "성인" 또는 "미성년자"를 추가한 새로운 배열을 만드세요.
const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
];

const age = users.map((user) => user.age);
//map 매서드 안에서 구조 분해 할당을 적용하여 순회하도록 적용 가능
const ages = users.map(({age}) => age);
/* 
처음 썼던 방법 - forEach
하지만 gpt한테 물어본 결과, forEach는 원본 배열 자체가 수정되는 구조
users.forEach(user => {
    user.status =
        user.age >= 18 ? "성인" : "미성년자";
});
*/
/* 애초에 map 매서드 뒤에 들어가는 함수에서 parameter는 
이름을 뭘 집어 넣든 각 배열 안의 각각 구성요소로 인식됨
결론: 파라미터 잘 활용하기 */
const newUsers = users.map((user) => ({
    ...user, // 나머지 앞에 거 다 불러오기 + ,
    status: user.age >= 18 ? "성인" : "미성년자",
}));

console.log(newUsers);



