let inputBox = document.getElementById("input-Box");
let taskList = document.getElementById("task-container");

function addTask() {
  if (inputBox.value === "") {
    alert("you didn't write anything");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    let cross = document.createElement("span");
    cross.innerHTML = "\u00d7";
    li.appendChild(cross);
  }
  inputBox.value = "";
  showTask();

}

taskList.addEventListener("click", (ch) => {
  if (ch.target.tagName === "LI") {
    ch.target.classList.toggle("task-completed");
    showTask();
  } else if (ch.target.tagName === "SPAN") {
    ch.target.parentElement.remove();
    showTask();
  }
});

function showTask() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showData() {
  taskList.innerHTML = localStorage.getItem("data");
}
showData();