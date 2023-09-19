// console.log('switch 문')

// switch 문
//조건별로 출력내용을 다르게 구분해서 실행하는 방법

let food='라면'
//비교연산자는 쓸수 없지만, 하나의 값이 일치하면, 해당 case를 실행한다. break문이 없으면 실행이 중단되지 않는다.
switch(food){
    case "짬뽕":
        console.log('오늘 점심은 짬뽕');
        break;
    case "볶음밥":
        console.log('볶음밥 좋죠');
        break;
    case "떡볶이":
        console.log('나중에');
        break;
    case "라면":
        console.log('식은 밥도 주는 거지?');
        break;
    default:
        console.log('오늘 점심은 굶습니다.');
        break;
}