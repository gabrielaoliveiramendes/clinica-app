let btnMenuMais = document.getElementById("menuMais");
let btnMenuRemota = document.getElementById("menuRemota");
let btnMenuVideo = document.getElementById("menuVideo");
let overlay = document.getElementById("menuOverlay");

btnMenuMais.addEventListener("click", () => {
    btnMenuRemota.classList.toggle("hide");
    btnMenuVideo.classList.toggle("hide");
    overlay.classList.toggle("desativado");
});