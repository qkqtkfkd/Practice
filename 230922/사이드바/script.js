//script.js
console.log('script running...')

/**
 * #sidebar:사이드바
 * #trigger:버튼
 * .overlay:오버레이
 */

const sidebar = document.getElementById('sidebar')
const trigger = document.getElementById('trigger')
const overlay = document.querySelector('.overlay')

console.log(sidebar)
console.log(trigger)
console.log(overlay)


/**
 * trigger를 클릭했을 때 sidebar가 표시/감춤 처리
 * -------------
 * addEventListener('이벤트이름', 함수)
 */

trigger.addEventListener('click', () => {
    //classList.contains('클래스'):"클래스"가 있는지 유무에 따라 true, false 반환
    //sidebar.classList.add('클래스명'):'클래스명' 추가
    //sidebar.classList.remone('클래스명'):'클래스명' 제거
    //classList.toggle{'클래스명')}: 해당요소에 '클래스명'이 있는지 판단해서 유무에 따라 추가/삭제
    //sidebar.classList.toggle('open')

    if (sidebar.classList.toggle('open')) {
        sidebar.classList.add('open')
        overlay.classList.add('open')
        trigger.textContent='닫기'


    } else {
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent='열기'
    }
})

overlay.addEventListener('click', ()=>{
    if(overlay.classList.contains('open')){
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent='열기'        
    }
})




