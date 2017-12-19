function setArrayIndices(arr) {
    let length = arr[0];
    let builtArr= [];
    for (let i = 0; i < length; i++) {
        builtArr[i] = 0;
    }
    for (let i = 1; i < arr.length; i++) {
        let args = arr[i].split(' - ');
        let index1 = args[0];
        let value = args[1];
        if (builtArr.index1 === undefined){
            builtArr[index1] = value;
        }
    }
    for (let obj of builtArr) {
        console.log(obj);
    }
}
setArrayIndices(['2', '0 - 5', '0 - 6', '0 - 7']);