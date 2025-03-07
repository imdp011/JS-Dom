let togglebtn=document.getElementById("toggleButton");
let dark=document.querySelectorAll(".dark");
let bulb=document.getElementById("bulb");
let body=document.querySelector("body");
let status=document.getElementById("status");


button.addEventListener("click",()=>{

        let billu=bulb.classList.toggle("off");
        if(billu){
            body.style.backgroundColor="black";
            button.textContent="Turn On";
            status.textContent="Status:Off";


        }
        else{
            body.style.backgroundColor="white";
            button.textContent="Turn Off";
            status.textContent="Status:On";



        }
        dark.forEach(element => element.classList.toggle("dark"));

        
})