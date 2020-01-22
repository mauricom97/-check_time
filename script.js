function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas`

if(hora < 12 && hora >= 4)
    {
        img.src = './imagens/manha.png'
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos, bom dia!`
        document.body.style.background = '#456f32'
    }else if(hora >= 12 && hora < 18){
        img.src = './imagens/tarde.png'
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos, boa tarde!`
        document.body.style.background = '#7395b3'
    }else{
        img.src = './imagens/noite.png'
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos, boa noite!`
        document.body.style.background = '#026bb1'
    }

}
