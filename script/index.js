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






















            const apiKey = "11845b16191d4e970987e59662f49847";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
