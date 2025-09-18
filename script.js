const btn = document.querySelector("button");
const weatherVideo = document.getElementById("weatherVideo");

// Main function (city name)
async function getweather(defaultCity) {
  const apikey = "af8178865fa1b2b02f8b6de66d14a81d";
  let city = defaultCity || document.getElementById("cityinput").value.toLowerCase().trim();

  if (!city) return; // avoid empty input

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=${apikey}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();

  updateWeatherDisplay(data);
}

// Function (coords)
async function getWeatherByCoords(lat, lon) {
  const apikey = "af8178865fa1b2b02f8b6de66d14a81d";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();

  updateWeatherDisplay(data);
}

// Update DOM + video
function updateWeatherDisplay(data) {
  const weatherDiv = document.querySelector(".weather-display");

  if (data.cod === "404") {
    weatherDiv.innerHTML = `<p>❌ City not found!</p>`;
    weatherVideo.src = "";
  } else {
    let cityName = data.name;
    let temp = data.main.temp;
    let feelsLike = data.main.feels_like;
    let humidity = data.main.humidity;
    let condition = data.weather[0].main.toLowerCase();
    let wind = data.wind.speed;

    const now = new Date();
    const currentTimestamp = Date.now() / 1000;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    const hour = now.getHours();

    let sunInfo = "";
    if (currentTimestamp < sunrise) {
      sunInfo = `🌅 Sunrise at ${new Date(sunrise * 1000).toLocaleTimeString()}`;
    } else if (currentTimestamp >= sunrise && currentTimestamp < sunset) {
      sunInfo = `🌇 Sunset at ${new Date(sunset * 1000).toLocaleTimeString()}`;
    } else {
      sunInfo = `🌅 Sunrise at ${new Date(sunrise * 1000).toLocaleTimeString()}`;
    }

    document.querySelector(".city").innerHTML = `🌍 ${cityName}, ${temp}°C (Feels like ${feelsLike}°C)`;
    document.querySelector(".sky").innerHTML = `🌦 ${condition}`;
    document.querySelector(".humidity").innerHTML = `💧 Humidity: ${humidity}%`;
    document.querySelector(".wind").innerHTML = `💨 Wind: ${wind} m/s`;
    document.querySelector(".sun").innerHTML = sunInfo;

    // 🎥 Dynamic video background
    let videoSrc = "";

if (condition === "clear") {
  if (hour >= 6 && hour < 18) {
    videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-sky-transitioning-from-night-to-sunrise-100831.mp4"; // Day
  } else {
    videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-dark-starry-night-100823.mp4"; // Night
  }
} else {
  switch (condition) {
    case "clouds":
      videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-white-clouds-moving-across-a-clear-blue-sky-quickly-51105.mp4";
      break;
    case "rain":
      videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-water-drops-creating-ripples-106.mp4";
      break;
    case "thunderstorm":
      videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-thunders-and-lightning-at-night-47558.mp4";
      break;
    case "smoke":
    case "fog":
      videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-blue-smoke-rising-in-front-of-a-black-background-45600.mp4";
      break;
    default:
      videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-eagle-gliding-in-a-clear-sky-bottom-view-1706.mp4";
  }
}

    // Apply video
    weatherVideo.src = videoSrc;
    weatherVideo.load();
    weatherVideo.play().catch(() => {
      console.log("⚠️ Autoplay blocked, waiting for user interaction...");
    });
  }
}

// Handle button search
btn.addEventListener("click", () => getweather());

// Auto location on page load
window.addEventListener("DOMContentLoaded", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeatherByCoords(position.coords.latitude, position.coords.longitude);
      },
      () => {
        getweather("sargodha"); // fallback if not any
      }
    );
  } else {
    getweather("sargodha");
  }
});

