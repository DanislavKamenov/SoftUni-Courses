function rotateArray(arr) {
    let rotateCount = arr.pop() % arr.length;

    for (let i = 0; i < rotateCount; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '15']);