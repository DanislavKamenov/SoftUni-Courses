function moviePrices([movieName, day]) {
    let price = '';
     movieName = movieName.toLowerCase();
     day = day.toLowerCase();

    if (movieName === 'the godfather') {
        switch (day) {
            case 'monday':
                price = 12;
                break;
            case 'tuesday':
                price = 10;
                break;
            case 'wednesday':
                price = 15;
                break;
            case 'thursday':
                price = 12.50;
                break;
            case 'friday':
                price = 15;
                break;
            case 'saturday':
                price = 25;
                break;
            case 'sunday':
                price = 30;
                break;
            default:
                price = 'error';
                break;
        }
    } else if (movieName === 'schindler\'s list') {
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                price = 8.50;
                break;
            case 'saturday':
            case 'sunday':
                price = 15;
                break;
            default:
                price = 'error';
                break;
        }
    } else if (movieName === 'casablanca') {
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                price = 8;
                break;
            case 'saturday':
            case 'sunday':
                price = 10;
                break;
            default:
                price = 'error';
                break;
        }
    }  else if (movieName === 'the wizard of oz') {
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                price = 10;
                break;
            case 'saturday':
            case 'sunday':
                price = 15;
                break;
            default:
                price = 'error';
                break;
        }
    } else {
        price = 'error';
    }

    return price;
}

console.log(moviePrices(['The Godfather', 'Friday']));;