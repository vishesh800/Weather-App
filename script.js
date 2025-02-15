const getweather = async (city, key) => {
    cityname.innerHTML = city;
    async function sendReq(city, key) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8283675db9ee8dc8aae332e3da30e84e',
                'x-rapidapi-host': 'api.openweathermap.org'
            }
        };

        try {
            const result = await fetch(url);
            const response = await result.json();
            console.log(response.main.feels_like);




            document.getElementById("temp").textContent = (response.main.temp - 273.15).toFixed(2);
            document.getElementById("temp2").textContent = (response.main.temp - 273.15).toFixed(2);
            document.getElementById("temp_min").textContent = (response.main.temp_min - 273.15).toFixed(2);
            document.getElementById("temp_max").textContent = (response.main.temp_max - 273.15).toFixed(2);
            document.getElementById("pressure").textContent = response.main.pressure;
            document.getElementById("humidity").textContent = response.main.humidity;
            document.getElementById("speed").textContent = response.wind.speed;
            document.getElementById("speed2").textContent = (response.wind.speed * 3.6).toFixed(2);
            document.getElementById("sunrise").textContent = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById("sunrise2").textContent = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById("sunset").textContent = new Date(response.sys.sunset * 1000).toLocaleTimeString();
        } catch (error) {
            console.error(error);
        }
    }

    sendReq(city, '8283675db9ee8dc8aae332e3da30e84e');


    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    const city = document.getElementById("city").value;
    getweather(city, '8283675db9ee8dc8aae332e3da30e84e');
});
getweather("delhi");

async function sendReq(city, key) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8283675db9ee8dc8aae332e3da30e84e',
            'x-rapidapi-host': 'api.openweathermap.org'
        }
    };

    try {
        const result = await fetch(url);
        const response = await result.json();
        console.log(response.main.feels_like);




        document.getElementById("temp_pune").textContent = (response.main.temp - 273.15).toFixed(2);

        document.getElementById("tempmin_pune").textContent = (response.main.temp_min - 273.15).toFixed(2);
        document.getElementById("tempmax_pune").textContent = (response.main.temp_max - 273.15).toFixed(2);
        document.getElementById("pressure_pune").textContent = response.main.pressure;
        document.getElementById("humidity_pune").textContent = response.main.humidity;
        document.getElementById("speed_pune").textContent = response.wind.speed;
        // document.getElementById("speed2").textContent = (response.wind.speed * 3.6).toFixed(2);
        document.getElementById("sunrise_pune").textContent = new Date(response.sys.sunrise * 1000).toLocaleTimeString();

        document.getElementById("sunset_pune").textContent = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    } catch (error) {
        console.error(error);
    }
}
sendReq("pune", '8283675db9ee8dc8aae332e3da30e84e');

async function sendReq1(city, key) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8283675db9ee8dc8aae332e3da30e84e',
            'x-rapidapi-host': 'api.openweathermap.org'
        }
    };

    try {
        const result = await fetch(url);
        const response = await result.json();
        console.log(response.main.feels_like);




        document.getElementById("temp_lkw").textContent = (response.main.temp - 273.15).toFixed(2);

        document.getElementById("tempmin_lkw").textContent = (response.main.temp_min - 273.15).toFixed(2);
        document.getElementById("tempmax_lkw").textContent = (response.main.temp_max - 273.15).toFixed(2);
        document.getElementById("pressure_lkw").textContent = response.main.pressure;
        document.getElementById("humidity_lkw").textContent = response.main.humidity;
        document.getElementById("speed_lkw").textContent = response.wind.speed;
        // document.getElementById("speed2").textContent = (response.wind.speed * 3.6).toFixed(2);
        document.getElementById("sunrise_lkw").textContent = new Date(response.sys.sunrise * 1000).toLocaleTimeString();

        document.getElementById("sunset_lkw").textContent = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    } catch (error) {
        console.error(error);
    }
}
sendReq1("lucknow", '8283675db9ee8dc8aae332e3da30e84e');
async function sendReq2(city, key) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8283675db9ee8dc8aae332e3da30e84e',
            'x-rapidapi-host': 'api.openweathermap.org'
        }
    };

    try {
        const result = await fetch(url);
        const response = await result.json();
        console.log(response.main.feels_like);




        document.getElementById("temp_indore").textContent = (response.main.temp - 273.15).toFixed(2);

        document.getElementById("tempmin_indore").textContent = (response.main.temp_min - 273.15).toFixed(2);
        document.getElementById("tempmax_indore").textContent = (response.main.temp_max - 273.15).toFixed(2);
        document.getElementById("pressure_indore").textContent = response.main.pressure;
        document.getElementById("humidity_indore").textContent = response.main.humidity;
        document.getElementById("speed_indore").textContent = response.wind.speed;
        // document.getElementById("speed2").textContent = (response.wind.speed * 3.6).toFixed(2);
        document.getElementById("sunrise_indore").textContent = new Date(response.sys.sunrise * 1000).toLocaleTimeString();

        document.getElementById("sunset_indore").textContent = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    } catch (error) {
        console.error(error);
    }
}
sendReq2("indore", '8283675db9ee8dc8aae332e3da30e84e');

async function sendReq3(city, key) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8283675db9ee8dc8aae332e3da30e84e',
            'x-rapidapi-host': 'api.openweathermap.org'
        }
    };

    try {
        const result = await fetch(url);
        const response = await result.json();
        console.log(response.main.feels_like);




        document.getElementById("temp_shimla").textContent = (response.main.temp - 273.15).toFixed(2);

        document.getElementById("tempmin_shimla").textContent = (response.main.temp_min - 273.15).toFixed(2);
        document.getElementById("tempmax_shimla").textContent = (response.main.temp_max - 273.15).toFixed(2)
        document.getElementById("pressure_shimla").textContent = response.main.pressure;
        document.getElementById("humidity_shimla").textContent = response.main.humidity;
        document.getElementById("speed_shimla").textContent = response.wind.speed;
        // document.getElementById("speed2").textContent = (response.wind.speed * 3.6).toFixed(2);
        document.getElementById("sunrise_shimla").textContent = new Date(response.sys.sunrise * 1000).toLocaleTimeString();

        document.getElementById("sunset_shimla").textContent = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    } catch (error) {
        console.error(error);
    }
}
sendReq3("shimla", '8283675db9ee8dc8aae332e3da30e84e');
async function sendReq4(city, key) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8283675db9ee8dc8aae332e3da30e84e',
            'x-rapidapi-host': 'api.openweathermap.org'
        }
    };

    try {
        const result = await fetch(url);
        const response = await result.json();
        console.log(response.main.feels_like);




        document.getElementById("temp_chd").textContent = response.main.temp;

        document.getElementById("tempmin_chd").textContent = response.main.temp_min;
        document.getElementById("tempmax_chd").textContent = response.main.temp_max;
        document.getElementById("pressure_chd").textContent = response.main.pressure;
        document.getElementById("humidity_chd").textContent = response.main.humidity;
        document.getElementById("speed_chd").textContent = response.wind.speed;
        // document.getElementById("speed2").textContent = (response.wind.speed * 3.6).toFixed(2);
        document.getElementById("sunrise_chd").textContent = new Date(response.sys.sunrise * 1000).toLocaleTimeString();

        document.getElementById("sunset_chd").textContent = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    } catch (error) {
        console.error(error);
    }
}
sendReq4("Chandigarh", '8283675db9ee8dc8aae332e3da30e84e');