function attachEvents() {
    $('#submit').click(getForecast);

    function getForecast() {
        const URL = 'https://judgetests.firebaseio.com/';
        let input = $('#location');

        $.ajax({
            method: "GET",
            url: URL + 'locations.json',
            success: getConditions
        });

        function getConditions(res) {
            let location = res.filter(loc => loc.name === input.val())[0];
            input.val("");
            console.log(location);
            let iconCodes = {
                'Sunny': '&#x2600;', // ☀
        	    'Partly sunny':	'&#x26C5;', // ⛅
        	    'Overcast':	'&#x2601;', // ☁
        	    'Rain':	'&#x2614;', // ☂
                'Degrees': '&#176;'   // °
            };

            $.ajax({
                method: "GET",
                url: URL + `forecast/today/${location.code}.json`,
                success: displayConditions
            });

            $.ajax({
                method: "GET",
                url: URL + `forecast/upcoming/${location.code}.json`,
                success: displayUpcoming
            });

            function displayConditions(res) {
                console.log(res);
                let forecast = $('#forecast');
                forecast.show();
                let current = forecast.find('#current');
                current.empty();
                current.append(
                    $(`<span class="condition symbol">${iconCodes[res.forecast.condition]}</span>`),
                    $('<span class="condition">').append(
                        $(`<span class="forecast-data">${res.name}</span>`),
                        $(`<span class="forecast-data">${res.forecast.low}${iconCodes.Degrees}/${res.forecast.high}${iconCodes.Degrees}</span>`),
                        $(`<span class="forecast-data">${res.forecast.condition}</span>`)
                    )
                );
            }

            function displayUpcoming(res) {
                console.log(res);
                let upcoming = $('#upcoming');
                upcoming.empty();
                res.forecast.forEach(forecast => {
                   upcoming.append(
                       $(`<span class="upcoming"></span>`).append(
                           $(`<span class="symbol">${iconCodes[forecast.condition]}</span>`),
                           $(`<span class="forecast-data">${forecast.low}${iconCodes.Degrees}/${forecast.high}${iconCodes.Degrees}</span>`),
                           $(`<span class="forecast-data">${forecast.condition}</span>`)
                       )
                   );
                });
            }
        }
    }
}
