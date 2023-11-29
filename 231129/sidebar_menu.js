// 상단 네브바
const navBar = document.querySelector("nav");

//햄버거 버튼
const menuBtns = document.querySelectorAll(".menu-icon");

//오버레이
const overlay = document.querySelector(".overlay");

//햄버거 버튼에 클릭이벤트 등록
menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

overlay.addEventListener("click", ()=>{
    navBar.classList.remove("open");
})
