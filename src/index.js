const button = document.getElementById('converter-button');
const select = document.getElementById('select-values');
const dolar = 5.87;
const euro = 6.5;
const bitcoin = 668226.43;

const convertValues = () => {
    const inputReal = document.getElementById('valor-corrente').value;
    const ValueText = document.getElementById('valor-real-text');
    const currencyValueText = document.getElementById('currency-value-text');

    ValueText.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputReal);

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputReal / dolar);
    };
    if (select.value === '€ EURO') {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputReal / euro);
    };
    if (select.value === 'BTC') {
        currencyValueText.innerHTML = inputReal / bitcoin
    };
};


const changeValues = () => {
    const currenText = document.getElementById('current-text');
    const bandeira = document.getElementById('change-bandeira');

    if (select.value === "US$ Dólar americano") {
        currenText.innerHTML = "Dólar americano";
        bandeira.src = "./assets/iconEUA.svg";
    }
    if (select.value === '€ EURO') {
        currenText.innerHTML = "Euro";
        bandeira.src = "./assets/iconEURO.svg";
    }
    if (select.value === 'BTC') {
        currenText.innerHTML = "BTC";
        bandeira.src = "./assets/iconBTC.png";
    }

    convertValues();
}

button.addEventListener('click', convertValues);
select.addEventListener('change', changeValues);