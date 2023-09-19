//함수
console.log('function')

/**
 * add라는 이름의 함수
 * x와 y라는 값을 받아서 더하는 함수
 * x, y: 매개변수, parameter
 */

function add(x, y){
    return console.log(`덧셈결과는 + ${x+y}`);
}

add(5) //사용하는 방법

function multiply(x, y){
    //함수 안에서 다른 함수를 실행할 수 있다.
    add(x, y);
    //console로 곱셈 결과 출력
    return console.log(`곱셈결과는` + x*y);
}

multiply(3, 4) //함수실행, 12

//fat arrow function, 화살표 함수
const addFunc=(x, y) =>{
    return console.log(x+y)
}
addFunc(10, 20)

//매개변수를 받아서 그래로 출력하는 함수
// const showName=(name)=>{
    // return console.log(`제 이름은 ${name}입니다.`)
// }

//매개변수가 하나고, 한 줄만 실행할 때는 리턴(return)없이 바로 출력하도록 축약해서 쓸 수 있다.
const showName=name =>console.log(`제 이름은 ${name}입니다.`)

showName('깨숙')
