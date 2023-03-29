function Scrollativo() {
    let menu = document.querySelector('#menu');//retorna o primeiro elemento do documento com id menu
    menu.classList.toggle('ativo', scrollY > 0);
}
window.addEventListener('scroll', Scrollativo);//adicionando evento de rolagem


let notebooks = document.getElementById("toggleNotebooks");

notebooks.addEventListener("click", function ()//evento de click
{
    if (document.getElementById("notebooks").style.display === "none")//o elemento é idêntico a none?
    {
        document.getElementById("notebooks").classList.toggle('add');//sim, ele não aparece. então apareça
    }
    else {
        document.getElementById("desktops").classList.toggle('remove');//não, ele é visível, suma com esses elementos
        document.getElementById("tablets").classList.toggle('remove');
        document.getElementById("smartphones").classList.toggle('remove');
        document.getElementById("tela_projecao").classList.toggle('remove');
        document.getElementById("projetores").classList.toggle('remove');
    }
});

let desktops = document.getElementById("toggleDesktops");

desktops.addEventListener("click", function () {
    if (document.getElementById("desktops").style.display === "none") {
        document.getElementById("desktops").classList.toggle('add');
    }
    else {
        document.getElementById("notebooks").classList.toggle('remove');
        document.getElementById("tablets").classList.toggle('remove');
        document.getElementById("smartphones").classList.toggle('remove');
        document.getElementById("tela_projecao").classList.toggle('remove');
        document.getElementById("projetores").classList.toggle('remove');
    }
});

let tablets = document.getElementById("toggleTablets");

tablets.addEventListener("click", function () {
    if (document.getElementById("tablets").style.display === "none") {
        document.getElementById("tablets").classList.toggle('add');
    }
    else {
        document.getElementById("notebooks").classList.toggle('remove');
        document.getElementById("desktops").classList.toggle('remove');
        document.getElementById("smartphones").classList.toggle('remove');
        document.getElementById("tela_projecao").classList.toggle('remove');
        document.getElementById("projetores").classList.toggle('remove');
    }
});

let smartphones = document.getElementById("toggleSmartphones");

smartphones.addEventListener("click", function () {
    if (document.getElementById("smartphones").style.display === "none") {
        document.getElementById("smartphones").classList.toggle('add');
    }
    else {
        document.getElementById("notebooks").classList.toggle('remove');
        document.getElementById("tablets").classList.toggle('remove');
        document.getElementById("desktops").classList.toggle('remove');
        document.getElementById("tela_projecao").classList.toggle('remove');
        document.getElementById("projetores").classList.toggle('remove');
    }
});

let telaProjecao = document.getElementById("toggleTelaProjecao");

telaProjecao.addEventListener("click", function () {
    if (document.getElementById("tela_projecao").style.display === "none") {
        document.getElementById("tela_projecao").classList.toggle('add');
    }
    else {
        document.getElementById("notebooks").classList.toggle('remove');
        document.getElementById("tablets").classList.toggle('remove');
        document.getElementById("smartphones").classList.toggle('remove');
        document.getElementById("desktops").classList.toggle('remove');
        document.getElementById("projetores").classList.toggle('remove');
    }
});

let projetores = document.getElementById("toggleProjetores");

projetores.addEventListener("click", function () {
    if (document.getElementById("projetores").style.display === "none") {
        document.getElementById("projetores").classList.toggle('add');
    }
    else {
        document.getElementById("notebooks").classList.toggle('remove');
        document.getElementById("tablets").classList.toggle('remove');
        document.getElementById("smartphones").classList.toggle('remove');
        document.getElementById("tela_projecao").classList.toggle('remove');
        document.getElementById("desktops").classList.toggle('remove');
    }
});

const input = document.getElementById("input_busca");
const equips = document.getElementsByClassName("equipamentos");

input.addEventListener('keyup', () => {//evento de teclar
    let texto = input.value.toLowerCase();//valor digitado no input

    let classeEquipamentos = equips.getElementsByClassName("equipamentos_item");//vai buscar dentro do id equipamentos os elementos com classe equipamentos_item
    
    for (let posicao in classeEquipamentos) {//todas as posições de .equipamentos
        if(true=== isNaN(posicao)){//não é um número
            continue;//continue para a próximo array
        }

        let conteudoClasseEquipamentos= classeEquipamentos[posicao].innerHTMLtoLowerCase();//vê o conteúdo dentro da .equipamentos
        if(true=== conteudoClasseEquipamentos.includes(texto)){//verifica se o texto digitado no input está dentro da .equipamentos
            //se for vdd que dentro da .equipamentos está o conteúdo digitado
            classeEquipamentos[posicao].style.display='';//as linhas que tiverem o conteúdo irão se mater visiveis
        }
        else{
            classeEquipamentos[posicao].style.display='none';// as linhas que não tiverem a expressão
        }
    }
});