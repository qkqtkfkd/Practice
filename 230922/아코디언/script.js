const listItem = document.querySelectorAll('.list-item')
console.log('listitem')

//.list-item 클래스를 가진 모든 요소를 가져와서 반복문처리
for(let i = 0; i < listItem.length; i++ ){

    //그 요소중  i번째 요소를 클릭했을 때
    listItem[i].addEventListener('click', () => {

        // .list-item 믈래스를 가진 모든 요소를 반복문처리
        for(let j = 0; j < listItem.length; j++ ){
            
            //.list-item. 클래스를 가진 모든 요소에서 selected 클래스를 제거
            listItem[j].classList.remove('selected') }
    
    //클릭한 i번째 요소에 selected 클래스 추가
    listItem[i].classList.add('selected')     
    })
}
    
// listItem.forEach(item=>{
//     item.addEventListener('click',()=>{
//         //item.classList.toggle('selected')
//         listItem.forEach(list=>list.classList.remove('selected'))
//         item.classList.add('selected')
//     })
// })


   
