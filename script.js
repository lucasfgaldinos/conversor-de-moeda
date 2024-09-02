const selectConvertTo = document.querySelector("select#convert-to")
const input = document.querySelector("input#value")
const convertButton = document.querySelector(".convert-button")
const imgConvertedCurrency = document.querySelector(".converted-currency-img")
const pValueToConvert = document.querySelector("#p-value-to-convert")
const pNameConvertedCurrency = document.querySelector("#p-name-converted-currency")
const pConvertedValue = document.querySelector("#p-converted-value")

const currentDollarValue = 5.2
const currentEuroValue = 6.2
const currentLibraValue = 7.3
const currentBitcoinValue = 328644.33

function selectConvertToChanged() {
    convertCurrency()
}

function convertCurrency() {
    if (selectConvertTo.value === "dollar") {
        convertRealToDollar()
    }
    if (selectConvertTo.value === "euro") {
        convertRealToEuro()
    }
    if (selectConvertTo.value === "libra-esterlina") {
        convertRealToLibraEsterlina()
    }
    if (selectConvertTo.value === "bitcoin") {
        convertRealToBitcoin()
    }

    pValueToConvert.textContent = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(input.value)
}

function convertRealToDollar() {
    imgConvertedCurrency.src = "assets/usa.png"
    pNameConvertedCurrency.textContent = "Dólar dos Estados Unidos"
    pConvertedValue.textContent = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD"
    }).format(input.value / currentDollarValue)
}

function convertRealToEuro() {
    imgConvertedCurrency.src = "assets/euro.png"
    pNameConvertedCurrency.textContent = "Euro"
    pConvertedValue.textContent = new Intl.NumberFormat("de-de", {
        style: "currency",
        currency: "EUR"
    }).format(input.value / currentEuroValue)
}

function convertRealToLibraEsterlina() {
    imgConvertedCurrency.src = "assets/libra-esterlina.png"
    pNameConvertedCurrency.textContent = "Libra Esterlina"
    pConvertedValue.textContent = new Intl.NumberFormat("en-gb", {
        style: "currency",
        currency: "GBP"
    }).format(input.value / currentLibraValue)
}

function convertRealToBitcoin() {
    imgConvertedCurrency.src = "assets/bitcoin.png"
    pNameConvertedCurrency.textContent = "Bitcoin"
    pConvertedValue.textContent = new Intl.NumberFormat("de-de", {
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 4
    }).format(input.value / currentBitcoinValue)
}

selectConvertTo.addEventListener("change", selectConvertToChanged)
convertButton.addEventListener("click", convertCurrency)