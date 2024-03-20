let btn = document.getElementById("btn"); // Button
let task = document.getElementById("list-container"); // Task list
let input = document.getElementById("input-bar"); // Task input field
let showAllBtn = document.getElementById("showAll"); // Show all tasks button
let showActiveBtn = document.getElementById("showActive"); // Show active tasks button
let showCompletedBtn = document.getElementById("showCompleted"); // Show completed tasks button

// Show saved tasks
showTasks();
updateBackgroundColor();
// task background setter
function updateBackgroundColor() {
    if (task.querySelectorAll("li").length > 0) {
        task.style.backgroundColor = "white";
    } else {
        task.style.backgroundColor = "transparent";
    }
}

// Function to add a task
function addTask() {
    
    if (input.value.trim() === "" || input.value.trim() === " ") {
        alert("Field is empty");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = input.value;
    task.appendChild(li);
    let cross = document.createElement("span");
    cross.innerHTML = "\u00d7";
    li.appendChild(cross);
    input.value = "";
    updateBackgroundColor();
    saveData();
}

// Button event listener
btn.addEventListener("click", addTask);

// If the user presses the Enter key
window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// Task event listener (for checking/unchecking and removing tasks)
task.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    updateBackgroundColor();

}, false);

// Save data even after the page is refreshed
function saveData() {
    localStorage.setItem("data", task.innerHTML);
}

// Show tasks even after the page is refreshed
function showTasks() {
    task.innerHTML = localStorage.getItem("data");
}

// Filter tasks by status
showAllBtn.addEventListener("click", () => {
    task.querySelectorAll("li").forEach((item) => {
        item.style.display = "block";
    });
});

showActiveBtn.addEventListener("click", () => {
    task.querySelectorAll("li").forEach((item) => {
        if (!item.classList.contains("check")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

showCompletedBtn.addEventListener("click", () => {
    task.querySelectorAll("li").forEach((item) => {
        if (item.classList.contains("check")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});