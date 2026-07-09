let title = document.getElementById("title");
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskcount = document.getElementById("taskcount");
let taskList = document.getElementById("taskList");
let totalCount = 0;
let doneCount = 0;
function updateCount() {
  taskcount.textContent = doneCount + "/" + totalCount;
}
addBtn.addEventListener("click", function () {
  let taskText = taskInput.value;
  if (taskText === "") {
    return;
  }
  let li = document.createElement("li");
  let circle = document.createElement("span");
  circle.classList.add("circle");
  li.appendChild(circle);
  let taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  li.appendChild(deleteBtn);
  circle.addEventListener("click", function () {
    li.classList.toggle("done");
    if (li.classList.contains("done")) {
      doneCount++;
    } else {
      doneCount--;
    }
    updateCount();
  });
  taskList.appendChild(li);
  totalCount++;
  updateCount();
  taskInput.value = "";
  deleteBtn.addEventListener("click", function () {
    if (li.classList.contains("done")) {
      doneCount--;
    }
    totalCount--;
    li.remove();
    updateCount();
  });
});
