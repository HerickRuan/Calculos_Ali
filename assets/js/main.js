const form = document.querySelector('#form')
    form.addEventListener('submit', function(e){
        e.preventDefault()
    })  

function calcular(){
    const item = document.querySelectorAll('.item')
    const imposto = document.querySelector('#impos').value
    const desconto = document.querySelector('#idesc').value

    itens = []

    //Inserir valores dos itens no array
    item.forEach(element => {
        itens.push(Number(element.value))
    });

    //Calcular subtotal
    subTotal = itens.reduce(function(e, a){
        e += a
        return e
    })

    console.log('Subtotal: ',subTotal)
    console.log('Itens: ', itens)

    //res.innerHTML = ""
    //form.style.margin = ""
    //res.style.display = "block"

    //Calcular proporção
    prop = itens.map(function(e){
        e /= subTotal
        return Number(e)
    })

    console.log("Proporção: ", prop)

    //Calcular proporção de imposto
    taxa = prop.map(function(e){
        e *= imposto
        return Number(e)
    }) 

    console.log("Taxa: ", taxa)

    //Calcular proporção de desconto
    desc = prop.map(function(e){
        e *= desconto
        return Number(e)
    })

    console.log("Desconto: ", desc)

    VitemFinal = []

    //Calcular valor final dos itens
    for(i = 0; i < itens.length; i++){
        VitemFinal[i] = itens[i] + taxa[i] - desc[i]
    }

    console.log("Valor Item Final : ", VitemFinal)

    //Valor Final Total
    valorFinalTotal = VitemFinal.reduce(function(e, a){
        e += a
        return e
    })
    console.log("Valor Final Total: ",valorFinalTotal)

    //Atribuir valores finais em cada input
    for (let i = 0; i < item.length; i++){
        item[i].value = VitemFinal[i].toFixed(2)
       console.log(item[i].value)   
    }
}

