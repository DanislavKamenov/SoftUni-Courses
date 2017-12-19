function productOfNums(numbers) {
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    let num3 = Number(numbers[2]);
    let negativeCount = 0;
     if (num1 < 0){
         negativeCount++;
     }
     if (num2 < 0){
         negativeCount++;
     }
     if (num3 < 0){
         negativeCount++;
     }
     if (num1 === 0 || num2 === 0 || num3 === 0){
         return  console.log('Positive');
     }
     if (negativeCount % 2 === 0){
         console.log('Positive');
     }
     else {
         console.log('Negative');
     }
}

productOfNums(['0','-5', '3']);