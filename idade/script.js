function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idata')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'file.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'file.png')
            } else if (idade < 50) { 
                img.setAttribute('src', 'file.png')
            } else {   
                img.setAttribute('src', 'file.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'wom.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'wom.jpg')
            } else if (idade < 50) { 
                img.setAttribute('src', 'wom.jpg')
            } else {   
                img.setAttribute('src', 'wom.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
} 

