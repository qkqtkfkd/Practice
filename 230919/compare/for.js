//for문-일정 횟수만큼 반복하기 위해서 사용
console.log('for문 연습')

//for(초기화 변수, 조건, 증감)
//i=undex번호
// for(let i=4; i<=10; i++){
//     console.log(`i:${i}`)
//     for(let j=0; j<=10; j++){
//         console.log(`j번째:${j}`)
//     }
// }

// const pokemon=['피카츄','이브이','라이츄','파이리','꼬부기', '이상해씨', '버터플', '야도란', '피존투', '또가스', '고스트']

//pokemon.length로 배열의 길이를 가져올 수 있다.
// for(let i=0;i<=pokemon.length; i++){
//     console.log(pokemon[i])
// }


//구구단
const style=`background-color:red; color:white; padding: 2px 8px; font-size:18px; font-weight: bold;`
// %c =스타일 인식
for(let i=2; i<=9; i++){
    console.log(`%c${i}단`, style);
     for(let j=2; j<=9; j++){
         console.log(`%c${i}x${j}=${i*j}`,style)
     }
 }

 let star='';
 for(let i=0; i<5; i++){
    // star=star+'*';
    star +='*'
    console.log(star)
 }