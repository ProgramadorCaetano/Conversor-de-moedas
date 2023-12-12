/*console.log("funcionou ?")*/
const convertButton = document.querySelector(".convert-button") //Mapeia o botão converter
const currencySelect = document.querySelector(".currency-select") //Mapeia a seleção de moeda


convertButton.addEventListener("click",convertValues) // Observa o evento click do botão
currencySelect.addEventListener("change", changeCurrecy) // Observa o evento 'change'  na seleção de moeda


/****************************************************************************************************************/
function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")// valor outra moeda

    
    console.log(currencySelect.value)
    const dolarToday = 4.97
    const euroToday = 5.36

    

    if (currencySelect.value == "Dolar") {
        //currencyValueConverted.innerHTML = convertedValue 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
        
    }

    //currencyValueToConvert.innerHTML = inputCurrencyValue
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

}
/******************************************************************************************************************/

function changeCurrecy(){
    //console.log("trocou de moeda")
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "Dolar"){
        currencyName.innerHTML = ("Dólar americano")
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "Euro"){
        currencyName.innerHTML = ("Euro")
        currencyImage.src = "./assets/euro.png"
    }
    convertValues()
}
/******************************************************************************************************************/


