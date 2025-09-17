

// const btn = document.querySelector("button");

// async function getweather() {
//   const apikey = "af8178865fa1b2b02f8b6de66d14a81d";
//   let city = document.getElementById("cityinput").value.toLowerCase().trim();

//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=${apikey}&units=metric`;

//   let response = await fetch(url);
//   let data = await response.json();
  
//   const weatherDiv = document.querySelector(".weather-display");

//   if (data.cod === "404") {
//     weatherDiv.innerHTML = `<p>❌ City not found!</p>`;
//     weatherVideo.src = "";
//   } else {
//     let cityName = data.name;
//     let temp = data.main.temp;
//     let feelsLike = data.main.feels_like;
//     let humidity = data.main.humidity;
//     let condition = data.weather[0].description.toLowerCase();
//     let wind = data.wind.speed;
  


//     document.querySelector(".city").innerHTML = `🌍${cityName}, ${temp}°C (Feels like ${feelsLike}°C)`;
//     document.querySelector(".sky").innerHTML = `🌦${condition}`;
//     document.querySelector(".humidity").innerHTML = `💧Humidity: ${humidity}`;
//     document.querySelector(".wind").innerHTML = `💨Wind: ${wind}`;

//      // Dynamic video background
//     let videoSrc = "";
//     switch (condition) {
//         case "clear":
//             videoSrc = "videos/clear.mp4";
//             break;
//         case "clouds":
//             videoSrc = "videos/clouds.mp4";
//             break;
//         case "rain":
//             videoSrc = "videos/rain.mp4";
//             break;
//         case "thunderstorm":
//             videoSrc = "videos/thunder.mp4";
//             break;
//         case "snow":
//             videoSrc = "videos/snow.mp4";
//             break;
//         case "mist":
//         case "fog":
//             videoSrc = "videos/fog.mp4";
//             break;
//         default:
//             videoSrc = "videos/default.mp4";
//     }

//     weatherVideo.src = videoSrc;
//     weatherVideo.load(); // Load new video

//   }
// }

// btn.addEventListener("click", getweather)


// const btn = document.querySelector("button");
// const weatherVideo = document.getElementById("weatherVideo");

// async function getweather(defaultCity) {
//   const apikey = "af8178865fa1b2b02f8b6de66d14a81d";
//    let city = defaultCity || document.getElementById("cityinput").value.toLowerCase().trim();
  

//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=${apikey}&units=metric`;
//   let response = await fetch(url);
//   let data = await response.json();

//   const weatherDiv = document.querySelector(".weather-display");

//   if (data.cod === "404") {
//     weatherDiv.innerHTML = `<p>❌ City not found!</p>`;
//     weatherVideo.src = "";
//   } else {
//     let cityName = data.name;
//     let temp = data.main.temp;
//     let feelsLike = data.main.feels_like;
//     let humidity = data.main.humidity;
//     let condition = data.weather[0].main.toLowerCase();
//     let wind = data.wind.speed;
//     const now = Date.now() / 1000;
//     const sunrise = data.sys.sunrise;
//     const sunset = data.sys.sunset;

// let sunInfo = "";
// if (now < sunrise) {
//     sunInfo = `🌅 Sunrise at ${new Date(sunrise * 1000).toLocaleTimeString()}`;
// } else if (now >= sunrise && now < sunset) {
//     sunInfo = `🌇 Sunset at ${new Date(sunset * 1000).toLocaleTimeString()}`;
// } else {
//     sunInfo = `🌅 Sunrise at ${new Date(sunrise * 1000).toLocaleTimeString()}`;
// }

//     document.querySelector(".city").innerHTML = `🌍 ${cityName}, ${temp}°C (Feels like ${feelsLike}°C)`;
//     document.querySelector(".sky").innerHTML = `🌦 ${condition}`;
//     document.querySelector(".humidity").innerHTML = `💧 Humidity: ${humidity}%`;
//     document.querySelector(".wind").innerHTML = `💨 Wind: ${wind}`;
//     document.querySelector(".sun").innerHTML = sunInfo;
   

//     // Dynamic video background
//     let videoSrc = "";
//     switch (condition) {
//         case "clear":
//             videoSrc = "videos/clear.mp4";
//             break;
//         case "clouds":
//             videoSrc = "videos/clouds.mp4";
//             break;
//         case "rain":
//             videoSrc = "videos/rain.mp4";
//             break;
//         default:
//             videoSrc = "videos/default.mp4";
//     }

//     weatherVideo.src = videoSrc;
//     weatherVideo.load(); // Load new video
//   }
// }

// btn.addEventListener("click", getweather);
// window.addEventListener("DOMContentLoaded", () => {
//   getweather("sargodha"); // Default city at page load
// });

// const btn = document.querySelector("button");
// const weatherVideo = document.getElementById("weatherVideo");

// // Main function (city name)
// async function getweather(defaultCity) {
//   const apikey = "af8178865fa1b2b02f8b6de66d14a81d";
//   let city = defaultCity || document.getElementById("cityinput").value.toLowerCase().trim();

//   if (!city) return; // avoid empty input

//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=${apikey}&units=metric`;
//   let response = await fetch(url);
//   let data = await response.json();

//   updateWeatherDisplay(data);
// }

// // Function (coords)
// async function getWeatherByCoords(lat, lon) {
//   const apikey = "af8178865fa1b2b02f8b6de66d14a81d";
//   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
//   let response = await fetch(url);
//   let data = await response.json();

//   updateWeatherDisplay(data);
// }

// // Update DOM + video
// function updateWeatherDisplay(data) {
//   const weatherDiv = document.querySelector(".weather-display");

//   if (data.cod === "404") {
//     weatherDiv.innerHTML = `<p>❌ City not found!</p>`;
//     weatherVideo.src = "";
//   } else {
//     let cityName = data.name;
//     let temp = data.main.temp;
//     let feelsLike = data.main.feels_like;
//     let humidity = data.main.humidity;
//     let condition = data.weather[0].main.toLowerCase();
//     let wind = data.wind.speed;

//     const now = new Date(); 
//     const currentTimestamp = Date.now() / 1000; 
//     const sunrise = data.sys.sunrise;
//     const sunset = data.sys.sunset;
//     const hour = now.getHours();
//     let sunInfo = "";
//     if (currentTimestamp < sunrise) {
//       sunInfo = `🌅 Sunrise at ${new Date(sunrise * 1000).toLocaleTimeString()}`;
//     } else if (currentTimestamp >= sunrise && currentTimestamp < sunset) {
//       sunInfo = `🌇 Sunset at ${new Date(sunset * 1000).toLocaleTimeString()}`;
//     } else {
//       sunInfo = `🌅 Sunrise at ${new Date(sunrise * 1000).toLocaleTimeString()}`;
//     }
  
//     function setTimeBasedVideo() {
  
//   if (hour >= 6 && hour < 18) {
//     // Daytime 6 AM - 6 PM
//     weatherVideo.src = "videos/sunny.mp4";
//   } else {
//     // Nighttime 6 PM - 6 AM
//     weatherVideo.src = "videos/night.mp4";
//   }
//   weatherVideo.load();
// }

// // Call once at startup
// setTimeBasedVideo();

//     document.querySelector(".city").innerHTML = `🌍 ${cityName}, ${temp}°C (Feels like ${feelsLike}°C)`;
//     document.querySelector(".sky").innerHTML = `🌦 ${condition}`;
//     document.querySelector(".humidity").innerHTML = `💧 Humidity: ${humidity}%`;
//     document.querySelector(".wind").innerHTML = `💨 Wind: ${wind}`;
//     document.querySelector(".sun").innerHTML = sunInfo;

//     // Dynamic video background
//     let videoSrc = "";
//     switch (condition) {
//       case "clear":
//         videoSrc = "videos/clear.mp4";
//         break;
//       case "clouds":
//         videoSrc = "videos/clouds.mp4";
//         break;
//       case "rain":
//         videoSrc = "videos/rain.mp4";
//         break;
//       case "thunderstorm":
//         videoSrc = "videos/thunder.mp4";
//         break;
//       case "snow":
//         videoSrc = "videos/snow.mp4";
//         break;
//       case "mist":
//       case "fog":
//         videoSrc = "videos/fog.mp4";
//         break;
//       default:
//         videoSrc = "videos/clear.mp4";
//     }

//     weatherVideo.src = videoSrc;
//     weatherVideo.load();
//   }
// }

// // Handle button search
// btn.addEventListener("click", () => getweather());

// // Auto location on page load
// window.addEventListener("DOMContentLoaded", () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         getWeatherByCoords(position.coords.latitude, position.coords.longitude);
//       },
//       () => {
//         getweather("sargodha"); // fallback if denied
//       }
//     );
//   } else {
//     getweather("sargodha");
//   }
// });
// 




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
        videoSrc = "videos/sunny.mp4"; // Day
      } else {
        videoSrc = "videos/night.mp4"; // Night
      }
    } else {
      switch (condition) {
        case "clouds":
          videoSrc = "videos/clouds.mp4";
          break;
        case "rain":
          videoSrc = "videos/rain.mp4";
          break;
        case "thunderstorm":
          videoSrc = "videos/thunder.mp4";
          break;
        case "snow":
          videoSrc = "videos/snow.mp4";
          break;
        case "smoke":
        case "fog":
          videoSrc = "videos/smoke.mp4";
          break;
        default:
          videoSrc = "videos/clear.mp4";
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
        getweather("sargodha"); // fallback if denied
      }
    );
  } else {
    getweather("sargodha");
  }
});
