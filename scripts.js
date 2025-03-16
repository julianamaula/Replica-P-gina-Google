let elemCaixaIcone = document.querySelector(".caixa-icone");
let elemCaixaPopover = document.querySelector(".caixa-icone__popover");

elemCaixaIcone.addEventListener('click', function
    (elemento) {
        if (!elemCaixaPopover.contains(elemento.target)) {
          elemCaixaIcone.classList.toggle
          ("caixa-icone--aberto");
        }
    //console.log(elemCaixaIcone);
} )

document.addEventListener('click', function(elemento){
    if (
      !elemCaixaPopover.contains(elemento.target)  &&
      !elemCaixaIcone.contains(elemento.target)
    ) {
      elemCaixaIcone.classList.remove
      ('caixa-icone--aberto');
      console.log("Clicou fora dentro do popover e fora dpo caixa-icone");
    }

});