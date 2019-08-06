/* 
Enter a number and have the program generate the Fibonacci sequence to that number or to the Nth number.
*/

const fiboSequence = (number) => {
    // an array is created with the nos in the seq that do not change
    // a fibonacci sequence is created and the required seq generated from it
    let arr = [0, 1];
    let result = [];
    for (let i = 2; i <= number; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    for (let i = 0; i <= number; i++) {
        if (arr[i] < number) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(fiboSequence(24));