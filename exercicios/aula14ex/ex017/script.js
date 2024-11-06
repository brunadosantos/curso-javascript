function clicar() {
    let numero = window.document.getElementById('txtnum')
    let res = window.document.getElementById('ação')

    let c = Number(numero.value)
    let r = 0

    for (let n = 1; n <= 10; n++) {
        r = c * n
        res.innerHTML += `${c} x ${n} = ${r} <br>`
    }
}