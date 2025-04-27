const apiKey = "40012896c53228cc7f21b4d15408fcd7";
async function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `Wind: ${data.wind.speed} m/s`;

    document.getElementById('weatherCard').classList.remove('hidden');
  } catch (error) {
    alert(error.message);
  }
}

// Dark Mode Toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
