"// arrayManipulation.js

function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}

function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        return processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

module.exports = { processArray, formatArrayStrings };" > arrayManipulation.js





