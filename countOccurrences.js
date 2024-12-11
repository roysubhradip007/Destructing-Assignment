function wordCountGenerator(inputString) {
    const wordCounts = new Map();
    const words = inputString.toLowerCase().split(/\s+/);

    for (const word of words) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }

    return wordCounts;
}

const text = "This is a test. This test is only a test.";
const result = wordCountGenerator(text);
console.log(result);