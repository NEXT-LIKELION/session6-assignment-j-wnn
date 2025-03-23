// 문제 5번: 객체 속성 접근 (점 표기법 vs 대괄호 표기법 + 동적 키 값 활용)
// 사용자가 입력한 key값에 따라 객체에서 데이터를 찾아 출력하는 함수를 작성하세요.
// 단, 점 표기법과 대괄호 표기법을 적절히 활용해야 합니다.

const user = {
    id: 101,
    name: "Eve",
    email: "eve@example.com",
    role: "admin",
};

function getUserData(obj, key) {
    if (key in obj) {
        return obj[key];
    } else {
        return "키 없음";
    }
}

console.log(getUserData(user, "name"));
console.log(getUserData(user, "email"));
console.log(getUserData(user, "age"));
