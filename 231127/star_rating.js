const stars=document.querySelectorAll(".stars i")

// stars.forEach((star, i)=>{
//     star.addEventListener("click", (e)=>{
//         checkStars(i);
//     });
// });

function checkStars(clickIndex){
    console.log("click", clickIndex);
    stars.forEach((star, i)=>{
    if (i<=clickIndex){
        star.classList.add("active");
    }else{
        star.classList.remove("active");
    }
})
}