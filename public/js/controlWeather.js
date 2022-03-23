var weaAPI = 'https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=92be9e837338bbed80d11bb4d641db19';
fetch(weaAPI)
    .then(function(response){
        return response.json();
    })
    .then((weather) =>{
        weahcm.innerHTML = `
        <tr>
            <th>Tỉnh/Thành phố</th>
            <td>${weather.name}</td>
        </tr>        
        <tr>
            <th>Nhiệt độ:</th>
            <td>${weather.main.temp} &#186 C</td>
        </tr>
        <tr>
            <th>Nhiệt độ thấp nhất:</th>
            <td>${weather.main.temp_min} &#186 C</td>
        </tr>
        <tr>
            <th>Nhiệt độ cao nhất:</th>
            <td>${weather.main.temp_max} &#186 C</td>
        </tr>
        <tr>
            <th>Độ ẩm:</th>
            <td>${weather.main.humidity} %</td>
        </tr>
        `;
        console.log(weather);
    })
    .catch(function(err){
        console.log(err);
    });

var weaAPI = 'https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=92be9e837338bbed80d11bb4d641db19';
fetch(weaAPI)
    .then(function(response){
        return response.json();
    })
    .then((weather) =>{
        weaHN.innerHTML = `
            <tr>
                <th>Tỉnh/Thành phố</th>
                <td>${weather.name}</td>
            </tr>        
            <tr>
                <th>Nhiệt độ:</th>
                <td>${weather.main.temp} &#186 C</td>
            </tr>
            <tr>
                <th>Nhiệt độ thấp nhất:</th>
                <td>${weather.main.temp_min} &#186 C</td>
            </tr>
            <tr>
                <th>Nhiệt độ cao nhất:</th>
                <td>${weather.main.temp_max} &#186 C</td>
            </tr>
            <tr>
                <th>Độ ẩm:</th>
                <td>${weather.main.humidity} %</td>
            </tr>
            `;
        console.log(weather);
    })
    .catch(function(err){
        console.log(err);
    });