
//DOMContentLoaded ek browser event hai jo tab fire hota hai jab HTML document completely parse ho jata hai,

// lekin external resources (jaise images, videos, CSS, fonts) load hone ka wait nahi karta.

document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // mai chahta hun jese hi page load ho all task localstorage se laod hoke array me store kr ,un fir ek ek krke render kr dun page pe
  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //JSON.parse = String ➜ Object

  //display 
  tasks.forEach((task) => {
    renderTask(task);
  });

  addTaskButton.addEventListener("click", () => {
    // grabing input value what user type
    // use trim to remove extra space
    const taskText = todoInput.value.trim();

    if (taskText === "") return;

    // newtask adding
    const newTask = {
      //
      id: Date.now(), // unique id generate( 1 jan 1970 se ab tk ke time ko milisecond me dega)
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    // save tasks to local storage
    saveTasks();

    renderTask(newTask);

    todoInput.value = ""; // after adding clear the input

    console.log(tasks);
  });

  // render
  function renderTask(task) {

    const li = document.createElement('li');

    li.setAttribute('data-id', task.id);

    if (task.completed) li.classList.add('completed');
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;

    li.addEventListener('click', (e)=>{

        if(e.target.tagName === 'BUTTON') return ;

        task.completed = !task.completed;
        li.classList.toggle('completed');

        saveTasks();
    });

    li.querySelector('button').addEventListener('click', (e)=>{
      e.stopPropagation(); // event bubbling (upar jana) ya event capturing (neeche jana) ko rok deta hai.
      tasks = tasks.filter((t) => t.id !== task.id)
      li.remove()
      saveTasks();
      
    });

    todoList.appendChild(li);
  }

  function saveTasks() {
    // take 2 -> parameter key, value(should be string)
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});