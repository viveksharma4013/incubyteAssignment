class StringCalculator {
    add(numbers) {
        if (numbers === '') return 0;

        let delimiter = /,|\n/;

        // Check if the string starts with a custom delimiter declaration
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n', 2);
            delimiter = new RegExp(parts[0].substring(2));
            numbers = parts[1];
        }

        const numArray = numbers.split(delimiter).map(Number);
        const negatives = numArray.filter(n => n < 0);

        // If there are any negative numbers, throw an error with the list of negative numbers
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
        }

        return numArray.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;