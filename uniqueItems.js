function removeDuplicates(numbers) {
    return new Set(numbers);
}

const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = removeDuplicates(inputArray);
console.log(uniqueSet);