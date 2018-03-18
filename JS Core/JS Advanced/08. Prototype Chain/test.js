function test(str) {

    if (str === ('one' || 'two')) {
        console.log('true');
    } else {
        console.log('false');
    }
}

test('two')