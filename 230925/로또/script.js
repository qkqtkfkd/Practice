//console.log('running...')
const button = document.getElementById('generate');
const li = document.querySelectorAll('#result>li')

//min:최소갑, max:최대값을 이용한 난수생성
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//로또 번호 담을 배열
let lottoNumber = []; //6개

button.addEventListener('click', () => {
    //버튼 비활성화
    button.classList.add("processing")
    button.textContent="번호 생성중"

    if (lottoNumber.length > 0) {
        lottoNumber = [];
    }
    //로또번호를 생성하는 반복문
    for (let i = 0; lottoNumber.length < 6; i++) {
        //random 변수에 난수 생성한 값 할당
        const random = randomNumber(1, 45)
        //lottoNumber 내부에 random과 일치하는 값이 있는지 true/false
        const isEntry = lottoNumber.includes(random)
        //!(not) 값을 뒤집어준다. ture=>false, false=>true
        //isEntry===ture, isEntry===false
        !isEntry ? lottoNumber.push(random) : ''
    }

    //오름차순 정렬
    lottoNumber = lottoNumber.sort((a, b) => a - b)

    //처리 속도 변수
    let timer=200;

    //로또번호를 요소에 추가하는 반복문
    for (let i = 0; i < lottoNumber.length; i++) {
        setTimeout(() => {
            li[i].textContent = lottoNumber[i];
        }, timer * i)
    }

    //버튼 활성화
    setTimeout(() => {
        button.classList.remove('processing');
        button.textContent="로또번호생성"
    }, timer * lottoNumber.length);

})






// if(!isEntry){
//     '';
// }else{
// lottoNumber.push(random)
// }
// console.log(isEntry)
// 배열에 요소를 추가


