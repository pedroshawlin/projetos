function calcular () {
    var txtv = document.querySelector('input#speed')
    var res = document.querySelector('div#result')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade é de <strong>${vel}Km/h</strong><br>`

    if (vel>50) {
        res.innerHTML = `Sua velocidade é de <strong>${vel}Km/h</strong>. Tu tá muito rápido.<strong>Multado!!</strong><br>`
    }

    res.innerHTML += `Dirija sempre com cinto de segurança!`
}



