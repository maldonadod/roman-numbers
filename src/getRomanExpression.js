function FIRST_IMPL_TDD_getRomanExpression(n) {
    if (n >= 40) {
        return "XL" + getRomanExpression(n - 40);
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
//function refactorized after all test passing.
function getRomanExpression(
    n,
    categories = [[40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]], 
    acc = "",
) {
    const [categoryIndex, categoryName] = categories[0];
    return n === 0
        ? acc
        : n >= categoryIndex
            ? getRomanExpression(
                n - categoryIndex,
                categories,
                acc + categoryName,
            )
            : getRomanExpression(
                n,
                categories.filter(([otherCategory]) => otherCategory !== categoryIndex),
                acc,
            )
}

module.exports = getRomanExpression;