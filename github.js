var inputElement = document.querySelector('div input');
var buttonElement = document.querySelector('div button');
var ulElement = document.querySelector('ul');

buttonElement.addEventListener('click', function(){
    getUser(inputElement.value);
})

function getUser(user) {
    clearList();
    createItem('Carregando...');
    axios.get(' https://api.github.com/users/' + user + '/repos', {}) 
        .then(function(response){
            clearList();
            var arrayRepo = response.data;
            for(repo of arrayRepo){
                createItem(repo.name);                 
            }
        }) 
        .catch(function(reject){
            clearList();
            createItem('Usuário não encontrado');           
        });

}

function createItem(text) {   
    var liElement = document.createElement('li');
    liElement.textContent = text;
    ulElement.appendChild(liElement);  

}

function clearList() {
    ulElement.innerHTML = '';
}