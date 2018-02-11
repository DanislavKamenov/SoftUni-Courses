function arithephile(arr) {
    let multiplication = [];
    arr.map(Number);
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num >= 0 && num < 10) {
            let sum = 1;
            for (let j = 1; j <= num; j++) {
                sum *= arr[i + j]

            }
            multiplication.push(sum);
        }
    }
    console.log(multiplication.sort((a, b) => b - a)[0]);
}
let arr = [ '10', '20', '2', '30', '44', '3', '56', '20', '24' ];
let arr2 = [ '100', '200', '2', '3', '2', '3', '2', '1', '1' ];

arithephile(arr2)