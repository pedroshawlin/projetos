

function calcular () {
    var tg1 = document.querySelector('input#gasto1')
    var tg2 = document.querySelector('input#gasto2')
    var tg3 = document.querySelector('input#gasto3')

        var g1 = Number(tg1.value)
        var g2 = Number(tg2.value)
        var g3 = Number(tg3.value)

            var gastoTotal = g1+g2+g3

    var tincome = document.querySelector('input#ganho1')
    var tbill1 = document.querySelector('input#bill1')
    var tbill2 = document.querySelector('input#bill2')

        var income = Number(tincome.value)
        var bill1 = Number(tbill1.value)
        var bill2 = Number(tbill2.value)

            var liquidIncome = income-bill1-bill2
    
    var restante = liquidIncome - gastoTotal

//console.log(`Seus gastos foram de ${gastoTotal}R$, sua renda liquida foi de ${liquidIncome}R$. Seu saldo restante é de ${restante}R$`)

var gastotxt = document.querySelector('input#gastoTotal')
var ganhotxt = document.querySelector('input#liquidIncomeTXT')
var totaltxt = document.querySelector('input#result-text')

totaltxt.value = `Seus gastos foram de ${gastoTotal}R$, sua renda liquida foi de ${liquidIncome}R$. Seu saldo restante é de ${restante}R$`
}



