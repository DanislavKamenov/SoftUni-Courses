function encrypt(arr) {
    let myMap = new Map();
    myMap.set('num', arr[0]);
    console.log(typeof(Number(myMap.get('num')) ));

}

encrypt(['1','5','7','2', '0', '-5', '20', '3', '0.5', '-2', '3.001', '1.5', '10'])