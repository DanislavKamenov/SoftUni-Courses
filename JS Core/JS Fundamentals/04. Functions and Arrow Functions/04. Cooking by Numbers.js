function cookingByNums(cooking) {
    let num = cooking[0];

    for (let i = 1; i < cooking.length; i++) {
        let command = cooking[i];

        switch (command) {
            case 'chop':
                console.log(num /= 2);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                console.log(num += 1);
                break;
            case 'bake':
                console.log(num *= 3);
                break;
            case 'fillet':
                console.log(num -= num * 0.2);
                break;
        }
    }
}
cookingByNums([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);