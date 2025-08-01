const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14,9);

    expect(total).toBe(23);

});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEuroIs.USD;
    expect(dollars).toBe(expected);
});

test("One dollar should be 146.26 yenes", function() {
    const yenes = fromDollarToYen(1);
    const expected = (1 / oneEuroIs.USD) * oneEuroIs.JPY;
    expect(yenes).toBe(expected);
});

test("One thousand yenes should be 5.56 pounds", function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / oneEuroIs.JPY) * oneEuroIs.GBP;
    expect(pounds).toBeCloseTo(expected, 2);
});