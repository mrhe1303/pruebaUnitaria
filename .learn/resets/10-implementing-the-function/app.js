const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}

const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds;
}

console.log(fromDollarToYen(10));
console.log(fromEuroToDollar(10));
console.log(fromYenToPound(1000));

export { fromDollarToYen, fromEuroToDollar, fromYenToPound };

module.exports = { sum, fromEuroToDollar }