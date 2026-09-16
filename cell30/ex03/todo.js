document.addEventListener("DOMContentLoaded", () => {
    const ftList = document.getElementById("ft_list");
    const newBtn = document.getElementById("new_btn");

    loadTodos();

    newBtn.addEventListener("click", () => {
        const todoText = prompt("Enter a new TO DO:");
        if (todoText !== null && todoText.trim() !== "") {
            addTodoItem(todoText, true);
        }
    });

    function addTodoItem(text, save = false) {
        const todoDiv = document.createElement("div");
        todoDiv.textContent = text;

        todoDiv.addEventListener("click", () => {
            if (confirm("Do you want to remove this to-do item?")) {
                todoDiv.remove();
                saveTodos();
            }
        });

        ftList.insertBefore(todoDiv, ftList.firstChild);

        if (save) {
            saveTodos();
        }
    }

    function saveTodos() {
        const divs = ftList.querySelectorAll("div");
        const todos = [];
        divs.forEach(div => {
            todos.push(div.textContent);
        });

        const d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        
        document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";" + expires + ";path=/";
    }

    function loadTodos() {
        const name = "todos=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                try {
                    const todos = JSON.parse(c.substring(name.length, c.length));
                    for (let j = todos.length - 1; j >= 0; j--) {
                        addTodoItem(todos[j], false);
                    }
                } catch (e) {
                    console.error("Error parsing todos from cookie", e);
                }
            }
        }
    }
});