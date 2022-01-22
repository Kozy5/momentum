const API_KEY = "4e9db12b8847366cf7888c1247b13fb7";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `지역 : ${data.name}`;
      weather.innerText = `날씨 : ${data.weather[0].main} / 온도 ${data.main.temp}도 /`;
    });
}

function onGeoError() {
  alert("위치확인 불가능하다 돌아가");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
