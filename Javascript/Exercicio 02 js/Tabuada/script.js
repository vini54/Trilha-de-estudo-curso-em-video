let num = document.getElementById('num')
let btn = document.getElementById('btn')
let res = document.getElementById('res')
let tab = document.getElementById('seltab')
btn.addEventListener('click', gerar)

function gerar(){
    let i = 0
    let mult = 0
    tab.innerHTML =''
    if (num.value.length == 0){
        window.alert('Digite um número')
    } else {
        let n = Number(num.value)
        while (i <= 10){
            mult = n * i
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${mult}`
            item.value = `tab${i}`
            tab.appendChild(item)
            i++
        }
    }
}