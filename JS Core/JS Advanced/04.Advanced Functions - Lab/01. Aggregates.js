function aggregates(arr) {
    arr = arr.map(x => Number(x));
    console.log('Sum = ' + arr.reduce((a,b) => a + b));
    console.log('Min = ' + Math.min.apply(null, arr));
    console.log('Max = ' + Math.max.apply(null, arr));
    console.log('Product = ' + arr.reduce((a,b) => a * b));
    console.log('Join = ' + arr.join());
}

aggregates([5, 10, 15]);