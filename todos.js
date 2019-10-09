var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos () {
    listElement.innerHTML = '';
    // innerHTML = definindo como vazio o conteúdo da lista
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo); 

        var linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#');

        var pos =  todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ') ');
        
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo () {
    var todoText = inputElement.value;
    // recuperar o valor do input
    todos.push(todoText); 
    // push = acrescentar no array
    inputElement.value = ''; 
    // apagando o valor do input 
    renderTodos ();
    saveToStorage()
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    /* metódos splice, remove um item do array 
    a partir da posição passada */
    renderTodos();
    saveToStorage()
    
}
    
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));

}

