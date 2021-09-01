let ini = document.getElementById('ini')
let fim = document.getElementById('fim')
let pas = document.getElementById('pas')
let res = document.getElementById('res')
let btn = document.getElementById('btn')

btn.addEventListener('click', contar)

function contar (){
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Não é possivel contar')
    } else {
        if (p == 0){
            window.alert('Passos inválido!, considerando 1')
            p == 1
        }
        res.innerHTML = 'Contando :'
        if (i < f){
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F449} ${c}`
            }
        }
    }
    res.innerHTML += `\u{1F3C1}`
}