/* 
Enter a number and have the program generate the Fibonacci sequence to that number or to the Nth number.
*/

const generateFibonacci = () => {
    const input = document.querySelector('.user-input').value;
    const validatedNumber = input.match(/[0-9]+/g);
    let arr = [0, 1];
    let result = [];

    const fiboSequence = () => {
        // an array is created with the nos in the seq that do not change
        // a fibonacci sequence is created and the required seq generated from it
        for (let i = 2; i <= validatedNumber; i++) {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
        return arr;
    }
    fiboSequence();

    for (let i = 0; i <= validatedNumber; i++) {
        if (arr[i] < validatedNumber) {
            result.push(arr[i]);
        }
    }
    return result.toString();
}

document.querySelector('.btn').addEventListener('click', (e) => {

    console.log(generateFibonacci());
});