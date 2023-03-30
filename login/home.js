function Scrollativo() {
    let menu = document.querySelector('#menu');//retorna o primeiro elemento do documento com id menu
    menu.classList.toggle('ativo', scrollY > 0);
}
window.addEventListener('scroll', Scrollativo);