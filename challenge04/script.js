let taskinput=document.getElementById("taskInput");
let addbtn=document.getElementById("addButton");
let tasklist=document.getElementById("taskList");
let emptylist=document.getElementById("empty");
let totaltasks=document.getElementById("totalTasks");
let completedtasks=document.getElementById("completedTasks");

let alltasks=[];



addbtn.addEventListener("click",()=>{
    if(taskinput.value==""){
        alert("Please enter the task");
    }


    else{

        let li=document.createElement("li");
        let span=document.createElement("span");
        let input=document.createElement("input");
        let button=document.createElement("button");
    
        input.type="checkbox"
    
        li.classList.add("task-item");
        input.classList.add("complete-checkbox");
        button.classList.add("delete-button");
        span.classList.add("task-text");
        emptylist.classList.add("hidden");
        
        span.innerHTML=taskinput.value;
        button.innerText="Delete"

        let task={
            taskname:taskinput.value,
            isCompleted:false,
        }

        tasklist.appendChild(li);
        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(button);
        
        taskinput.value="";
    
        button.addEventListener("click",(e)=>{
            alltasks=alltasks.filter((item)=>{
                return item.taskname!=span.textContent
            })
            console.log(alltasks);
            li.remove();
            if(alltasks.length==0){
                emptylist.classList.remove("hidden");
            }
            totaltasks.textContent=`Total Tasks: ${alltasks.length}`;

        })
    
        input.addEventListener("click",()=>{
            let completedCount=0;
            li.classList.toggle("completed");
            for(let i=0; i<alltasks.length; i++){
              
                if (alltasks[i].taskname == span.textContent) {
                    alltasks[i].isCompleted = li.className.includes("completed");
                }         
              
                if (alltasks[i].isCompleted) {
                    completedCount++;
                }
            

            }
            completedtasks.textContent = `Completed Tasks: ${completedCount}`;           

        })

        alltasks.push(task);

        totaltasks.textContent=`Total Tasks: ${alltasks.length}`;

        
    }



})

