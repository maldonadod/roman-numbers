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
const romanCategories = [
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
];

function greatherEqualThan(a, b) {
    return a >= b
}
function equals(a, b) {
    return a === b
}
const RETURN_CASE = 0;
const cases = {
    returnCase(n) {
        return equals(n, RETURN_CASE)
    },
    nextCase(n, categoryIndex) {
        return greatherEqualThan(n, categoryIndex);
    },
};

function generate(cases, providedCatagories) {
    return function self(
        n,
        categories = providedCatagories, 
        acc = "",
    ) {
        const [categoryIndex, categoryName] = categories[0];
        return cases.returnCase(n)
            ? acc
            : cases.nextCase(n, categoryIndex)
                ? self(
                    n - categoryIndex,
                    categories,
                    acc + categoryName,
                )
                : self(
                    n,
                    categories.filter(([otherCategory]) => otherCategory !== categoryIndex),
                    acc,
                )
    }
}

const getRomanExpression = generate(cases, romanCategories);

module.exports = getRomanExpression;