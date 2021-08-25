function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >=0 && hora < 12){
        // dia
        img.src = 'imgs/paisagem_manha_c250.png'
        document.body.style.background = '#eacf64'
    } else if (hora >=12 && hora < 18){
        // tarde
        img.src = 'imgs/paisagem_tarde_c250.png'
        document.body.style.background = '#e9cda6'
    } else {
        // noite
        img.src = 'imgs/paisagem_noite_c250.png'
        document.body.style.background = '#385569'
    }
}