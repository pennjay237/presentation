    async function getWeather() {
        const apiKey = "11845b16191d4e970987e59662f49847";
        const city = document.getElementById("inputCity").value;
        const resultDiv = document.getElementById("weatherResult");

        if (!city) {
            resultDiv.innerHTML = "Please enter a city name!";
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod === "404") {
                resultDiv.innerHTML = "City not found!";
                return;
            }

            resultDiv.innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            `;
        } catch (error) {
            resultDiv.innerHTML = "Error fetching weather data.";
        }
    }
































    /*async function getWeather() {
        const city = document.getElementById("cityInput").value;
        if (!city) {
            alert("input city name");
            return;
        }

        const apiKey = "7026f3b3e6fb2220b3437fc5aaed9070";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("invalid");
        }
        const data = await response.json();

        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent = `temperature :${data.main.temp}C`;
        document.getElementById("description").textContent = `weather :${data.weather[0].description}`;
        document.getElementById("weatherCard").style.display = "block"
    } catch (error) {
        alert (error)
    }
        
    /*/ 