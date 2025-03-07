let heading=document.getElementById("mainHeading");
let resetbtn=document.getElementById("resetButton");


let buttons=document.querySelectorAll(".btn");

for(let i=0; i<buttons.length-1; i++){
    buttons[i].addEventListener("click",(e)=>{
        heading.style.color=e.target.textContent});
}

resetbtn.addEventListener("click",()=>{heading.style.color="black"});


