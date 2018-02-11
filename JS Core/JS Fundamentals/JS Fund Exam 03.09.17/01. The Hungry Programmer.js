function hungryProgrammer(food, commands) {
    let count = 0;

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        let indices;
        let startIndex;
        let endIndex;

        switch (true) {
            case command === 'Serve':
                if (food.length < 1) {
                    break;
                }
                console.log(food.pop() + ' served!');
                break;
            case command === 'Eat':
                if (food.length < 1) {
                    break;
                }
                console.log(food.shift() + ' eaten');
                count++;
                break;
            case command.startsWith('Add'):
                let newFood = command.split('Add ')[1];
                if (!newFood) {
                    break;
                }
                food.unshift(newFood);
                break;
            case command.startsWith('Consume'):
                indices = command.split('Consume ').filter(x => x !== '')[0].split(' ').map(Number);
                startIndex = indices[0];
                endIndex = indices[1];
                if (startIndex < 0 || endIndex > food.length - 1) {
                    continue;
                }

                count += food.splice(startIndex, Math.abs(startIndex - endIndex) + 1).length;
                console.log('Burp!');
                break;
            case command.startsWith('Shift'):
                if (food.length < 2) {
                    break;
                }
                indices = command.split('Shift ').filter(x => x !== '')[0].split(' ').map(Number);
                startIndex = indices[0];
                endIndex = indices[1];
                if (startIndex < 0 || endIndex > food.length - 1) {
                    continue;
                }
                let shiftedDish = food[startIndex];
                food[startIndex] = food[endIndex];
                food[endIndex] = shiftedDish;
                break;
            case command === 'End':
                if (food.length === 0) {
                    console.log('The food is gone');
                    console.log('Meals eaten: ' + count);
                } else {
                    console.log('Meals left:' + food.map(x => ' ' + x));
                    console.log('Meals eaten: ' + count);
                }
                return;
        }
        food = food.filter(x => x !== '');
    }
}

hungryProgrammer(['bacon', 'veggies', 'chicken'],
    [
        'Add',
        'End'
    ]
);