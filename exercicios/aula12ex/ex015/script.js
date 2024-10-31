function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var resp =  window.document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - fAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Crianca
                img.setAttribute('src', 'foto-menino.png')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'foto-menino-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Crianca
                img.setAttribute('src', 'foto-menina.png')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'foto-menina-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-mulher-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-mulher-idosa.png')
            }
        }
        resp.style.textAlign = 'Center'
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resp.appendChild(img)
    }
}