let btnMenuMais = document.getElementById("menuMais");
let btnMenuRemota = document.getElementById("menuRemota");
let btnMenuVideo = document.getElementById("menuVideo");
let overlay = document.getElementById("menuOverlay");

const menuItems = document.querySelectorAll('.menu_list_item');

btnMenuMais.addEventListener("click", () => {
    btnMenuRemota.classList.toggle("hide");
    btnMenuVideo.classList.toggle("hide");
    overlay.classList.toggle("desativado");
});

menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        // Previne o recarregamento da página ao clicar no link
        event.preventDefault();
        // Remove a classe 'ativo' de todos os itens
        menuItems.forEach(i => i.classList.remove('ativo'));
        // Adiciona a classe 'ativo' ao item clicado
        this.classList.add('ativo');
    });
});