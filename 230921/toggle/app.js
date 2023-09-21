console.log('app.js')

//toggle

const toggle = document.querySelector('.toggle')
console.log(toggle)

//classList 객체에 대한 정보 조회
console.log(toggle.classList)

//add 메소드를 이용해 class "active" 추가
// toggle.classList.add('active')

//class "active" 제거
// toggle.classList.remove('active')

//class "active" 존재유무
console.log(toggle.classList.contains('active'))

//toggle 클릭했을 때
//active가 있다면 제거, 없다면 추가
//3항 연산자

toggle.addEventListener('click', () => {
    //toggle에 active 클래스도 있다면
    //if(toggle.classList.contains('active')){
    //active 클래스 추가
    //toggle.classList.add('active')
//  }else{
    //active 클래스 삭제
    //toggle.classList.remove('active')
//  }

//2. 3항 연산자
    toggle.classList.contains('active')
        ? toggle.classList.remove('active')
        : toggle.classList.add('active')

//3. toggle 메소드
//element.classList.toggle('클래스')
//element에 '클래스'가 있으면 삭제, 없으면 추가해주는 메소드
toggle.classList.toggle('active');
});
