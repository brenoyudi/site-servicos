const lista = document.querySelector('.lista');
const openMenu = document.querySelector('.openmenu')
const closeMenu = document.querySelector('.closemenu')

openMenu.addEventListener('click', mostrar)
closeMenu.addEventListener('click', fechar)

function mostrar(){
    lista.style.display = 'flex';
    lista.style.top = '0';
}
function fechar(){
    lista.style.display = 'none';
    lista.style.top = '0';
}