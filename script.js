let btn=document.getElementById("btn") //button
let task=document.getElementById("list-container")// task list
let input=document.getElementById("input-bar"); // task input field

let messageBox=document.getElementById("message");
//function to add the task
function addTask(){
    if(input.value.trim()==="" || input.value.trim()===" "){
        alert("field is empty");
        return;
    }
    let li=document.createElement("li")
    li.innerHTML=input.value;
    task.appendChild(li);
    let cross=document.createElement("span");
    cross.innerHTML="\u00d7";
    li.appendChild(cross);
    input.value="";
    saveData();
}
//button event listiner
btn.addEventListener("click",addTask);
//if user press the enter key
window.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        addTask();
    }
})
task.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)
//save data even after the page is refreshed
function saveData(){
    localStorage.setItem("data",task.innerHTML);
}
//show task even after the page is refresh
function showTasks(){
    task.innerHTML=localStorage.getItem("data");
}
showTasks();