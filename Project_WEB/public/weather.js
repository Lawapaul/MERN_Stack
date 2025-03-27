const API_KEY = '4a38c099645773e0279a3dfcd6777ab7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

async function getCurrentWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        throw error;
    }
}

async function getForecast(city) {
    try {
        const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        console.error('Error fetching forecast:', error);
        throw error;
    }
}

function updateWeatherUI(weatherData) {
    const currentWeatherSection = document.getElementById('current-weather');
    if (!currentWeatherSection) return;

    currentWeatherSection.style.display = 'block';
    
    document.querySelector('.weather-info h3').textContent = `${weatherData.name}, ${weatherData.sys.country}`;
    document.querySelector('.temperature').textContent = `${Math.round(weatherData.main.temp)}°C`;
    document.querySelector('.weather-info p:last-child').textContent = weatherData.weather[0].description;
    
    document.querySelector('.weather-details .weather-card:nth-child(1) p').textContent = `${weatherData.main.humidity}%`;
    document.querySelector('.weather-details .weather-card:nth-child(2) p').textContent = `${weatherData.wind.speed} m/s`;
    document.querySelector('.weather-details .weather-card:nth-child(3) p').textContent = `${weatherData.main.pressure} hPa`;
    document.querySelector('.weather-details .weather-card:nth-child(4) p').textContent = `${Math.round(weatherData.main.feels_like)}°C`;
    
    const weatherIcon = document.querySelector('.weather-icon');
    const weatherMain = weatherData.weather[0].main.toLowerCase();
    weatherIcon.textContent = getWeatherEmoji(weatherMain);
}

function getWeatherEmoji(weatherMain) {
    const emojis = {
        'clear': '☀️',
        'clouds': '☁️',
        'rain': '🌧️',
        'drizzle': '🌦️',
        'thunderstorm': '⛈️',
        'snow': '🌨️',
        'mist': '🌫️'
    };
    return emojis[weatherMain] || '🌤️';
}

function updateForecastUI(forecastData) {
    const forecastSection = document.getElementById('forecast');
    if (!forecastSection) return;

    const forecastContainer = document.querySelector('.forecast-container');
    forecastContainer.innerHTML = ''; 

    const dailyForecasts = forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 5);

    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        const forecastCard = document.createElement('div');
        forecastCard.className = 'weather-card';
        forecastCard.innerHTML = `
            <h3>${dayName}</h3>
            <div class="weather-icon">${getWeatherEmoji(forecast.weather[0].main.toLowerCase())}</div>
            <p>${Math.round(forecast.main.temp)}°C</p>
            <p>${forecast.weather[0].description}</p>
        `;
        forecastContainer.appendChild(forecastCard);
    });

    forecastSection.style.display = 'block';
}

function showLoading() {
    const searchButton = document.querySelector('.search-form button');
    if (searchButton) {
        searchButton.disabled = true;
        searchButton.textContent = 'Loading...';
    }
}

function hideLoading() {
    const searchButton = document.querySelector('.search-form button');
    if (searchButton) {
        searchButton.disabled = false;
        searchButton.textContent = 'Search Weather';
    }
}

async function searchWeather() {
    const cityInput = document.getElementById('city-search');
    if (!cityInput) return;

    const city = cityInput.value.trim();
    if (!city) return;

    showLoading();

    try {
        const [currentWeather, forecast] = await Promise.all([
            getCurrentWeather(city),
            getForecast(city)
        ]);

        const currentWeatherSection = document.getElementById('current-weather');
        if (currentWeatherSection) {
            currentWeatherSection.style.display = 'block';
            updateWeatherUI(currentWeather);
        }

        const forecastSection = document.getElementById('forecast');
        if (forecastSection) {
            forecastSection.style.display = 'block';
            updateForecastUI(forecast);
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('City not found. Please try again.');
        
        const currentWeatherSection = document.getElementById('current-weather');
        const forecastSection = document.getElementById('forecast');
        if (currentWeatherSection) currentWeatherSection.style.display = 'none';
        if (forecastSection) forecastSection.style.display = 'none';
    } finally {
        hideLoading();
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Hide weather sections initially
    const currentWeatherSection = document.getElementById('current-weather');
    const forecastSection = document.getElementById('forecast');
    if (currentWeatherSection) currentWeatherSection.style.display = 'none';
    if (forecastSection) forecastSection.style.display = 'none';

    // Add event listener for Enter key in search input
    const cityInput = document.getElementById('city-search');
    if (cityInput) {
        cityInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchWeather();
            }
        });
    }
}); 