//app.js

// getElementById는 ID를 기반으로 찾기 때문에, #이라는 표현을 따로 적어주지 않아도 된다.
// const title=document.getElementById('title')

// querySelector는 태그, 클래스(.), 아이디(#) 등 범용으로 사용하기 때문에 꼭 아이딘인지, 클래스인지, 태그인지 구분해서 적어줘야 한다.
// const title=document.querySelector('#title')

const title=document.querySelectorAll('.title')
console.log(title)


for(let i=0; i<title.length; i++){
    // title[i].style.fontSize=`30px`;
    // title[i].style.fontSize=`${(i+10)*2}px`;
    // title[i].style.fontWhight=`100`;

    //i번째의 텍스트 변경
    title[i].textContent =`${i}번째 요소입니다.`;

    //i번째의 red 클래스 추가
    title[i].classList.add('red')

    //배열의 마지막 두번빼 요소의 red클래스 제거
    title[title.length-2].classList.remove('red')
    
    //배열의 마지막 요소의 red클래스 제거
    if(i===title.length-1){
        // title[i].style.color='red'
        title[i].classList.remove('red')
    }
}
