function getRomanExpression(n) {
    if (n === 40) {
        return "XL";
    }
    if (n >= 10) {
        return "X" + getRomanExpression(n - 10);
    }
    if (n === 9) {
        return "IX";
    }
    if (n >= 5) {
        return "V" + getRomanExpression(n - 5);
    }
    if (n === 4) {
        return "IV";
    }
    return "I".repeat(n);
}

module.exports = getRomanExpression;