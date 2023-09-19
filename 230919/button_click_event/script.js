const title = document.getElementById('title')
console.log(title)

//1. button 가져와서 변수에 담는다.
// const button= document.getElementById('btn')
const button= document.querySelector(`#btn`)


//2. container 가져와서 변수에 담는다.
const container= document.getElementById('container')

//3. button 클릭했을 때, container에 bg 클래스를 추가한다.
button.addEventListener('click', () =>{
    container.classList.add('bg')
})


// 제목을 클릭했을 때, alert 창에 '클릭'이란 문구가 출력
// addEventListener('이벤트이름'.실행할 함수)
title.addEventListener('click', () => {
    // alert('클릭')
    if (title.style.color === 'red') {
        //title의 컬러값을 black
        title.style.color = 'black'
    } else {
        //title의 컬러값을 red
        title.style.color = 'red'
    }

})

