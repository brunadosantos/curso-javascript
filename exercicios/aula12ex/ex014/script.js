function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'foto-manha.png'
        document.body.style.background = '#f2bd75'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#ad2f00'
    } else {
        //Boa Noite!
        img.src = 'foto-noite.png'
        document.body.style.background = '#340c31'
    }
}
