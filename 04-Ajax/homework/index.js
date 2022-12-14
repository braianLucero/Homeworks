const btnAmigos = document.querySelector('#boton');
const listAmigos = document.querySelector('#lista')

function showFriends(){
    listAmigos.innerHTML = '';
    fetch('http://localhost:5000/amigos')
        .then(res => res.json())
        .then(amigos =>{
            for (let i= 0; i < amigos.length; i++) {
              let li = document.createElement('li');
                li.innerText = amigos[i].name;
                listAmigos.append(li);
            }
        });
}

btnAmigos.addEventListener('click',showFriends)


const inputAmigo = document.querySelector('#input');
const btnSearch = document.querySelector('#search');
const spanAmigo = document.querySelector('#amigo');

btnSearch.addEventListener('click',function(e){
    let idAmigo = inputAmigo.value;
    fetch(`http://localhost:5000/amigos/${idAmigo}`)
    .then(res => res.json())
    .then(amigo =>{
        spanAmigo.innerText = amigo.name;
    })
})


const inputDelete = document.querySelector('#inputDelete');
const btnDelete = document.querySelector('#delete');
const spanDelete = document.querySelector('#success');

btnDelete.addEventListener('click',function(){
    let idAmigo = inputDelete.value;
    inputDelete.innerHTML = '';
    fetch(`http://localhost:5000/amigos/${idAmigo}`,    {
        method:'DELETE'
    })
    .then(res => res.json())
    .then(() =>{
        spanDelete.innerText = 'Amigo borrado';
        showFriends();
    });
}); 