// Define currency options
const currencies = {
    USD: "United States Dollar",
    EUR: "Euro",
    GBP: "British Pound Sterling",
    JPY: "Japanese Yen",
    CAD: "Canadian Dollar",
    AUD: "Australian Dollar",
};

// Populate select elements with currency options
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");

for (const currencyCode in currencies) {
    const option1 = document.createElement("option");
    option1.value = currencyCode;
    option1.textContent = currencyCode + " - " + currencies[currencyCode];
    fromCurrencySelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = currencyCode;
    option2.textContent = currencyCode + " - " + currencies[currencyCode];
    toCurrencySelect.appendChild(option2);
}

// Function to perform currency conversion
function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // You would need to fetch the exchange rate data from an API here
    // For this example, let's assume you have the exchange rate as follows:
    const exchangeRate = 1.23; // Replace with actual exchange rate

    if (!isNaN(amount)) {
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        document.getElementById("convertedAmount").value = convertedAmount;
    }
}

// Attach event listener to the "Convert" button
const convertButton = document.getElementById("convertBtn");
convertButton.addEventListener("click", convertCurrency);
