const getRomanExpression = require("./src/getRomanExpression");

test("should get roman expresion of 1", () => {
    expect(getRomanExpression(1)).toEqual("I");
})
test("should get roman expresion of 2", () => {
    expect(getRomanExpression(2)).toEqual("II");
})
test("should get roman expresion of 3", () => {
    expect(getRomanExpression(3)).toEqual("III");
})
test("should get roman expresion of 4", () => {
    expect(getRomanExpression(4)).toEqual("IV");
})
test("should get roman expresion of 5", () => {
    expect(getRomanExpression(5)).toEqual("V");
})
test("should get roman expresion of 6", () => {
    expect(getRomanExpression(6)).toEqual("VI");
})
test("should get roman expresion of 7", () => {
    expect(getRomanExpression(7)).toEqual("VII");
})
test("should get roman expresion of 8", () => {
    expect(getRomanExpression(8)).toEqual("VIII");
})
test("should get roman expresion of 9", () => {
    expect(getRomanExpression(9)).toEqual("IX");
})
test("should get roman expresion of 10", () => {
    expect(getRomanExpression(10)).toEqual("X");
})
test("should get roman expresion of 11", () => {
    expect(getRomanExpression(11)).toEqual("XI");
})
test("should get roman expresion of 14", () => {
    expect(getRomanExpression(14)).toEqual("XIV");
})
test("should get roman expresion of 15", () => {
    expect(getRomanExpression(15)).toEqual("XV");
})
test("should get roman expresion of 19", () => {
    expect(getRomanExpression(19)).toEqual("XIX");
})
test("should get roman expresion of 20", () => {
    expect(getRomanExpression(20)).toEqual("XX");
})
test("should get roman expresion of 21", () => {
    expect(getRomanExpression(21)).toEqual("XXI");
})
test("should get roman expresion of 22", () => {
    expect(getRomanExpression(22)).toEqual("XXII");
})
test("should get roman expresion of 23", () => {
    expect(getRomanExpression(23)).toEqual("XXIII");
})
test("should get roman expresion of 24", () => {
    expect(getRomanExpression(24)).toEqual("XXIV");
})
test("should get roman expresion of 25", () => {
    expect(getRomanExpression(25)).toEqual("XXV");
})
test("should get roman expresion of 26", () => {
    expect(getRomanExpression(26)).toEqual("XXVI");
})
test("should get roman expresion of 27", () => {
    expect(getRomanExpression(27)).toEqual("XXVII");
})
test("should get roman expresion of 28", () => {
    expect(getRomanExpression(28)).toEqual("XXVIII");
})
test("should get roman expresion of 29", () => {
    expect(getRomanExpression(29)).toEqual("XXIX");
})
test("should get roman expresion of 30", () => {
    expect(getRomanExpression(30)).toEqual("XXX");
})

test("should get roman expresion of 31", () => {
    expect(getRomanExpression(31)).toEqual("XXXI");
})
test("should get roman expresion of 32", () => {
    expect(getRomanExpression(32)).toEqual("XXXII");
})
test("should get roman expresion of 33", () => {
    expect(getRomanExpression(33)).toEqual("XXXIII");
})
test("should get roman expresion of 34", () => {
    expect(getRomanExpression(34)).toEqual("XXXIV");
})
test("should get roman expresion of 35", () => {
    expect(getRomanExpression(35)).toEqual("XXXV");
})
test("should get roman expresion of 36", () => {
    expect(getRomanExpression(36)).toEqual("XXXVI");
})
test("should get roman expresion of 37", () => {
    expect(getRomanExpression(37)).toEqual("XXXVII");
})
test("should get roman expresion of 38", () => {
    expect(getRomanExpression(38)).toEqual("XXXVIII");
})
test("should get roman expresion of 39", () => {
    expect(getRomanExpression(39)).toEqual("XXXIX");
})
test("should get roman expresion of 40", () => {
    expect(getRomanExpression(40)).toEqual("XL");
})
test("should get roman expresion of 41", () => {
    expect(getRomanExpression(41)).toEqual("XLI");
})
test("should get roman expresion of 42", () => {
    expect(getRomanExpression(42)).toEqual("XLII");
})
test("should get roman expresion of 43", () => {
    expect(getRomanExpression(43)).toEqual("XLIII");
})
test("should get roman expresion of 44", () => {
    expect(getRomanExpression(44)).toEqual("XLIV");
})
test("should get roman expresion of 45", () => {
    expect(getRomanExpression(45)).toEqual("XLV");
})
test("should get roman expresion of 46", () => {
    expect(getRomanExpression(46)).toEqual("XLVI");
})
test("should get roman expresion of 47", () => {
    expect(getRomanExpression(47)).toEqual("XLVII");
})
test("should get roman expresion of 48", () => {
    expect(getRomanExpression(48)).toEqual("XLVIII");
})
test("should get roman expresion of 49", () => {
    expect(getRomanExpression(49)).toEqual("XLIX");
})
test("should get roman expresion of 50", () => {
    expect(getRomanExpression(50)).toEqual("L");
})