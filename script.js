//const valorOrigem = parseFloat(prompt('Digite o valor a ser convertido:'));
//const moedaOrigem = prompt('Digite a moeda de origem (real, dolar, euro, libra ou bitcoin):');
//const moedaDestino = prompt('Digite a moeda de destino (real, dolar, euro, libra ou bitcoin):');

// Definindo as taxas de conversão
const taxaDolar = 5.42
const taxaEuro = 6.58
const taxaLibra = 7.46
const taxaBitcoin = 363574.81


const convertButton = document.querySelector(".convert-button") //Mapeia o botão converter
//const currencySelect = document.querySelector(".currency-select") //Mapeia a seleção de moeda


const moedaOrigem = document.querySelector(".currency-select-from")
const moedaDestino = document.querySelector(".currency-select")


convertButton.addEventListener("click", convertValues) // Observa o evento click do botão
moedaDestino.addEventListener("change", changeCurrecy) // Observa o evento 'change'  na seleção de moeda para
moedaOrigem.addEventListener("change", changeCurrencyFrom) // Observa o evento 'change'  na seleção de moeda de

//************************************************************************************** */
function convertValues() {

    const valorOrigem = document.querySelector(".input-currency").value
    //console.log("clicou botão")

    let valorConvertido = 0
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor a converter
    const currencyValueConverted = document.querySelector(".currency-value")// valor convertido



    if (moedaOrigem.value == "Real") {
        //console.log("Origem real")
        //****************************************** */
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency:"BRL"
        }).format(valorOrigem)
        //********************************************** */
        
        
        if (moedaDestino.value == "Dolar") {
            valorConvertido = valorOrigem / taxaDolar

            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valorConvertido)


        } else if (moedaDestino.value == "Euro") {
            valorConvertido = valorOrigem / taxaEuro

            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valorConvertido)

        } else if (moedaDestino.value == "libra") {
            valorConvertido = valorOrigem / taxaLibra

            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GPB"
            }).format(valorConvertido)

        } else if (moedaDestino.value == "Bitcoin") {
            valorConvertido = valorOrigem / taxaBitcoin

            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valorConvertido)

        } else if(moedaDestino.value == "Real"){
            valorConvertido = valorOrigem
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency:"BRL"
            }).format(valorConvertido)
        }


//******************************************************************************************************** */
    } else if (moedaOrigem.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorOrigem)



        if (moedaDestino.value == "Real") {
            valorConvertido = valorOrigem * taxaDolar
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency:"BRL"
            }).format(valorConvertido)


        } else if (moedaDestino.value == "Euro") {
            valorConvertido = taxaDolar / taxaEuro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valorConvertido)


        } else if (moedaDestino.value == "Libra") {
            valorConvertido = taxaDolar / taxaLibra
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GPB"
            }).format(valorConvertido)


        } else if (moedaDestino.value == "Bitcoin") {
            valorConvertido = taxaDolar / taxaBitcoin
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valorConvertido)
            

        } else if (moedaDestino.value == "Dolar"){
            valorConvertido = valorOrigem
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valorConvertido)

        }

//****************************************************************************************************** */

    } else if (moedaOrigem.value == "Euro") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorOrigem)

        if (moedaDestino.value == "Real") {
            valorConvertido = valorOrigem * taxaEuro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency:"BRL"
            }).format(valorConvertido)

        } else if (moedaDestino.value == "Dolar") {
            valorConvertido = taxaEuro / taxaDolar
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valorConvertido)


        } else if (moedaDestino.value == "Libra") {
            valorConvertido = taxaEuro / taxaLibra
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GPB"
            }).format(valorConvertido)


        } else if (moedaDestino.value == "Bitcoin") {
            valorConvertido = taxaEuro / taxaBitcoin
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valorConvertido)
 
        } else if (moedaDestino.value == "Euro"){
            valorConvertido = valorOrigem
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valorConvertido)
        }

//**************************************************************************************************** */

    } else if(moedaOrigem.value == "Libra"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GPB"
        }).format(valorOrigem)



        if (moedaDestino.value == "Real"){
            valorConvertido = valorOrigem * taxaLibra
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency:"BRL"
            }).format(valorConvertido)

        } else if(moedaDestino.value == "Dolar"){
            valorConvertido = taxaLibra / taxaDolar
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valorConvertido)


        } else if(moedaDestino.value == "Euro"){
            valorConvertido = taxaLibra / taxaEuro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valorConvertido)

        } else if(moedaDestino.value == "Bitcoin"){
            valorConvertido = taxaLibra / taxaBitcoin
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valorConvertido)

        } else if (moedaDestino == "Libra"){
            valorConvertido = valorOrigem
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GPB"
            }).format(valorOrigem)
        }

//********************************************************************************** */

    } else if(moedaOrigem.value == "Bitcoin"){

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(valorOrigem)


        if (moedaDestino.value == "Real"){
            valorConvertido = valorOrigem * taxaBitcoin
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency:"BRL"
            }).format(valorConvertido)

        } else if(moedaDestino.value == "Dolar" ){
            valorConvertido = taxaBitcoin / taxaDolar
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valorConvertido)



        } else if(moedaDestino.value == "Euro"){
            valorConvertido = taxaBitcoin / taxaEuro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valorConvertido)

        } else if(moedaDestino.value == "Libra"){
            valorConvertido = taxaBitcoin / taxaLibra
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GPB"
            }).format(valorConvertido)

        } else if (moedaDestino.value == "Bitcoin"){
            valorConvertido = valorOrigem
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(valorConvertido)
        }
    }



}

//************************************************************************* */

function changeCurrecy(){
    
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")

    if (moedaDestino.value == "Dolar"){
        currencyName.innerHTML = ("Dólar americano")
        currencyImage.src = "./assets/dolar.png"
    }
 
    if (moedaDestino.value == "Euro"){
        currencyName.innerHTML = ("Euro")
        currencyImage.src = "./assets/euro.png"
    }

    if (moedaDestino.value == "Libra"){
        currencyName.innerHTML = ("Libra esterlina")
        currencyImage.src = "./assets/libra 1.png"
    }

    if (moedaDestino.value == "Bitcoin"){
        currencyName.innerHTML = ("Bitcoin")
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    if (moedaDestino.value == "Real"){
        currencyName.innerHTML = ("Real")
        currencyImage.src = "./assets/brasil 2.png"
    }

    convertValues()
}

//************************************************************************************* */

function changeCurrencyFrom(){
    const currencyNameFrom = document.getElementById("currency-name-from")
    const currencyImageFrom = document.querySelector(".currency-img-from")

    if (moedaOrigem.value == "Dolar"){
        currencyNameFrom.innerHTML = ("Dólar americano")
        currencyImageFrom.src = "./assets/dolar.png"
    }
 
    if (moedaOrigem.value == "Euro"){
        currencyNameFrom.innerHTML = ("Euro")
        currencyImageFrom.src = "./assets/euro.png"
    }

    if (moedaOrigem.value == "Libra"){
        currencyNameFrom.innerHTML = ("Libra esterlina")
        currencyImageFrom.src = "./assets/libra 1.png"
    }

    if (moedaOrigem.value == "Bitcoin"){
        currencyNameFrom.innerHTML = ("Bitcoin")
        currencyImageFrom.src = "./assets/bitcoin 1.png"
    }

    if (moedaOrigem.value == "Real"){
        currencyNameFrom.innerHTML = ("Real")
        currencyImageFrom.src = "./assets/brasil 2.png"
    }

    

    convertValues()
}