const form = document.querySelector('#form')
    form.addEventListener('submit', function(e){
        e.preventDefault()
    })

function calcular(){
    res.innerHTML = ""
    form.style.margin = ""
    res.style.display = "block"


    Vitem01 = Number(item01.value)
    Vitem02 = Number(item02.value)
    Vitem03 = Number(item03.value)
    Vitem04 = Number(item04.value)
    Vitem05 = Number(item05.value)
    Vitem06 = Number(item06.value)
    imposto = Number(impos.value)
    desconto = Number(idesc.value)

    subTotal = Vitem01 + Vitem02 + Vitem03 + Vitem04 + Vitem05 + Vitem06  

    //Proporção para cada
    prop01 = Vitem01 / subTotal
    prop02 = Vitem02 / subTotal
    prop03 = Vitem03 / subTotal
    prop04 = Vitem04 / subTotal
    prop05 = Vitem05 / subTotal
    prop06 = Vitem06 / subTotal

    //Taxas para cada
    taxa01 = prop01 * imposto
    taxa02 = prop02 * imposto
    taxa03 = prop03 * imposto
    taxa04 = prop04 * imposto
    taxa05 = prop05 * imposto
    taxa06 = prop06 * imposto

    //Desconto para cada
    desc01 = prop01 * desconto
    desc02 = prop02 * desconto
    desc03 = prop03 * desconto
    desc04 = prop04 * desconto
    desc05 = prop05 * desconto
    desc06 = prop06 * desconto

    Vitem01Final = Vitem01 + taxa01 - desc01
    Vitem02Final = Vitem02 + taxa02 - desc02
    Vitem03Final = Vitem03 + taxa03 - desc03
    Vitem04Final = Vitem04 + taxa04 - desc04
    Vitem05Final = Vitem05 + taxa05 - desc05
    Vitem06Final = Vitem06 + taxa06 - desc06

    valorFinalTotal = Vitem01Final + Vitem02Final + Vitem03Final + Vitem04Final + Vitem05Final + Vitem06Final

    res.innerHTML += `<p>Item 1: ${Vitem01Final.toFixed(2)}</p>` 
    res.innerHTML += `<p>Item 2: ${Vitem02Final.toFixed(2)}</p>`
    res.innerHTML += `<p>Item 3: ${Vitem03Final.toFixed(2)}</p>`
    res.innerHTML += `<p>Item 4: ${Vitem04Final.toFixed(2)}</p>`
    res.innerHTML += `<p>Item 5: ${Vitem05Final.toFixed(2)}</p>`
    res.innerHTML += `<p>Item 6: ${Vitem06Final.toFixed(2)}</p>`

    //res.innerHTML += `<p>Subtotal: ${subTotal}</p>`

    //res.innerHTML += `<p>Valor Total (teste): ${valorFinalTotal.toFixed(2)}</p>`
    
}

