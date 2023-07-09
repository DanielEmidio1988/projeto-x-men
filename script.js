const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter',()=>{

        if(window.innerWidth < 500){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
        
        removerSelecaodoPersonagem()

        personagem.classList.add('selecionado')

        mudarImagemdoPersonagem(personagem)
        mudarNomedoPersonagemSelecionado(personagem)
        mudarDescricaoPersonagemSelecionado(personagem)

    })
})

function mudarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem')
    descricaoPersonagem.innerHTML = personagem.getAttribute('data-description')
}

function mudarNomedoPersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem')
    nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function mudarImagemdoPersonagem(personagem) {
    const personagemGrande = document.querySelector('.personagem-grande')
    const idPersonagem = personagem.attributes.id.value
    personagemGrande.src = `./assets/imagens/card-${idPersonagem}.png`
}

function removerSelecaodoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}
