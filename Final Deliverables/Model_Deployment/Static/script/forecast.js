const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItems1 = document.getElementById('current-weather-items1');
const currentWeatherIcon1 = document.getElementById('current-weather-icon1');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ="9d7cde1f6d07ec55650544be1631307e";

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm" style="font-size:30px;">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })
}

function showWeatherData (data){

    timezone.innerHTML = data.timezone;
    
    var { sunrise, sunset, wind_speed,weather,temp,dt} = data.daily[0];
    document.getElementById("date").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon").innerHTML = 
    `<img src="http://openweathermap.org/img/wn//${weather[0].icon}@4x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items").innerHTML = `<br>
    <div>${weather[0].main}</div>
    <div>${wind_speed} kmph</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    <div>${temp.day} C</div>`;

    var { sunrise, sunset, wind_speed,weather,temp,dt} = data.daily[0];
    document.getElementById("date0").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon0").innerHTML = 
    `<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items0").innerHTML = `<br>
    <div>${weather[0].main}</div>
    <div>${wind_speed} kmph</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    <div>${temp.day} C</div>`;

    var { sunrise, sunset, wind_speed,weather,temp,dt} = data.daily[1];
    document.getElementById("date1").innerHTML=window.moment(dt*1000).format('dddd');
    currentWeatherIcon1.innerHTML = 
    `<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    currentWeatherItems1.innerHTML = `<br>
    <div>${weather[0].main}</div>
    <div>${wind_speed} kmph</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    <div>${temp.day} C</div>`;

    var { sunrise, sunset, wind_speed,weather,temp,dt} = data.daily[2];
    document.getElementById("date2").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon2").innerHTML = 
    `<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items2").innerHTML = `<br>
    <div>${weather[0].main}</div>
    <div>${wind_speed} kmph</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    <div>${temp.day} C</div>`;

    var { sunrise, sunset, wind_speed,weather,temp,dt} = data.daily[3];
    document.getElementById("date3").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon3").innerHTML = 
    `<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items3").innerHTML = `<br>
    <div>${weather[0].main}</div>
    <div>${wind_speed} kmph</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    <div>${temp.day} C</div>`;

    var { sunrise, sunset, wind_speed,weather,temp,dt} = data.daily[4];
    document.getElementById("date4").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon4").innerHTML = 
    `<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items4").innerHTML = `<br>
    <div>${weather[0].main}</div>
    <div>${wind_speed} kmph</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    <div>${temp.day} C</div>`;

    var { sunrise, sunset, wind_speed,weather,temp,dt} = data.daily[5];
    document.getElementById("date5").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon5").innerHTML = 
    `<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items5").innerHTML = `<br>
    <div>${weather[0].main}</div>
    <div>${wind_speed} kmph</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    <div>${temp.day} C</div>`;

    var { sunrise, sunset, wind_speed,weather,temp,dt} = data.daily[6];
    document.getElementById("date6").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon6").innerHTML = 
    `<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items6").innerHTML = `<br>
    <div>${weather[0].main}</div>
    <div>${wind_speed} kmph</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    <div>${temp.day} C</div>`;

    var { sunrise, sunset, wind_speed,weather,temp,dt} = data.daily[7];
    document.getElementById("date7").innerHTML=window.moment(dt*1000).format('dddd');
    document.getElementById("current-weather-icon7").innerHTML = 
    `<img src="http://openweathermap.org/img/wn//${weather[0].icon}@2x.png" alt="weather icon" class="w-icon">`;
    document.getElementById("current-weather-items7").innerHTML = `<br>
    <div>${weather[0].main}</div>
    <div>${wind_speed} kmph</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    <div>${temp.day} C</div>`;
}