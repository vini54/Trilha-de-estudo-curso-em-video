function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if ( fano.value.length == 0 || fano.value > ano){
        window.alert('Tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'imgs/h-criança-c.png')
            }else if (idade < 22){
                //jovem
                img.setAttribute('src', 'imgs/h-jovem-c.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imgs/h-adulto-c.png')
            }else {
                //idoso
                img.setAttribute('src', 'imgs/h-idoso-c.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'imgs/m-criança-c.png')
            }else if (idade < 22){
                //jovem
                img.setAttribute('src', 'imgs/m-jovem-c.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imgs/-adulta-c.png')
            }else {
                //idoso
                img.setAttribute('src', 'imgs/m-idosa-c.png')
            }
        }
        res.innerHTML = `recebemos: ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}