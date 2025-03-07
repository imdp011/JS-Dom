let name=document.getElementById("nameInput");
let job=document.getElementById("jobInput");
let age=document.getElementById("ageInput");
let bio=document.getElementById("bioInput");

let namedisplay=document.getElementById("nameDisplay");
let jobdisplay=document.getElementById("jobDisplay");
let agedisplay=document.getElementById("ageDisplay");
let biodisplay=document.getElementById("bioDisplay");


name.addEventListener("input", (e) => {
    namedisplay.textContent = e.target.value.trim() ? e.target.value : "Not Provided";
});

job.addEventListener("input", (e) => {
    jobdisplay.textContent = e.target.value.trim() ? e.target.value : "Not Provided";
});

age.addEventListener("input", (e) => {
    agedisplay.textContent = e.target.value.trim() ? e.target.value : "Not Provided";
});

bio.addEventListener("input", (e) => {
    biodisplay.textContent = e.target.value.trim() ? e.target.value : "Not Provided";
});







// let inputs=document.querySelectorAll(".inputs");
// let display=document.querySelectorAll(".display");

// for(let i=0; i<inputs.length; i++){
//     inputs[i].addEventListener("input",(e)=>{
//         if(inputs[i].value==""){
//            for(let j=0; j<display.length; j++){
//             display[i].textContent="Not Provided"
//            }
//         }
//         else{

//             for(let j=0; j<display.length; j++){
//                 display[i].textContent=inputs[i].value;
//                }
    
//         }
//     })
// }










