function darkLightMode() {
    const html = document.documentElement
    
//  if(html.classList.contains('light')) {
//     html.classList.remove('light')
//  } else {
//      html.classList.add('light')
//  }
    
    
    html.classList.toggle('light')

    // Pegar a tag img
    const img = document.querySelector('#profile img')

    // Substituir a imagem
    if(html.classList.contains('light')) {
        // Se tiver light mode, adicionar a imagem light
        img.setAttribute('src', 'imagens/fotowhite.jpg')
    } else {
        // Se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', 'imagens/fotodark.jpg')
    }


}