const boxes=document.querySelectorAll(".box");
const imgBox=document.querySelector(".imageBox");

boxes.forEach((box)=>{
    box.addEventListener("dragover",(e)=>{
        console.log("over", e.currentTarget.classList);
        e.preventDefault();
        e.currentTarget.classList.add("hovered");
    });
    box.addEventListener("dragleave",(e)=>{
        console.log("leave", e.currentTarget.classList);
    });
    box.addEventListener("drop",(e)=>{
        console.log("drop", e.currentTarget.classList);
        e.currentTarget.appendChild(imgBox);
        e.currentTarget.classList.remove("hovered");
    });
});