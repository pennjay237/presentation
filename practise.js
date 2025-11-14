async function getWeather(params) {
    const apiKey = 87658967856785456785456;
    const city = document.getElementById ("inputCity").Value;
    const resultDiv = document.getElementById ("weatherResult");

    if (!city) {
        resultDiv.innerHTML = "please enter a city name";
        return
    }

     const url = "";

       try {
        const response = await fetch (url);
        const data = await response.json();
        
         if (data.cod === "404") {
        resultDiv.innerHTML = "city not found";
        return;
       }  
       resultDiv.innerHTML = `
       <h3><strong></strong></h3>`
       }   
}