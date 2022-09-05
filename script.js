let today = document.getElementById("today");
let loca = document.getElementById("location");
let TempValue = document.getElementById("temp-value");
let tempicon = document.getElementById("temp-icon");
let climate = document.getElementById("climate");
let iconfile;
const searchinput = document.getElementById("inputField");
const searchbutton = document.getElementById("search-button");

searchbutton.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(searchinput.value);
  searchinput.value = "";
});
const getWeather = async (cityname) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=480c1035f1f18aeb3d72f45c48e055e1`
    );

    const weatherdata = await response.json();
    const { name } = weatherdata;
    const { feels_like } = weatherdata.main;
    const { id, main } = weatherdata.weather[0];
    loca.textContent = name;
    climate.textContent = main;
    TempValue.textContent = Math.round(feels_like - 273);
    if (id < 300 && id > 200) {
      tempicon.src = "./icons/thunderstrom.svg";
    } else if (id < 400 && id > 300) {
      tempicon.src = ".icons/cloud-solid.svg";
    } else if (id < 600 && id > 500) {
      tempicon.src = "./icons/rain.svg";
    }
    
    else if (id < 700 && id > 600) {
      tempicon.src = "./icons/snow.svg";
    }
    
    else if (id < 800 && id > 700) {
      tempicon.src = "./icons/clouds.svg";
    }
    else if (id < 900 && id > 800) {
      tempicon.src = "./icons/clouds.svg";
    }
    
    
    else if (id ===800) {
      tempicon.src = "./icons/icon.svg";
    }
    
  } catch (eroor) {
    alert("citry not found ");
  }
};
window.addEventListener("load", () => {
  let long;
  let lati;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lati = position.coords.latitude;

      const api =
        `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&` +
        `lon=${long}&appid=480c1035f1f18aeb3d72f45c48e055e1`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { name } = data;
          const { feels_like } = data.main;
          const { id, main } = data.weather[0];
          loca.textContent = name;
          climate.textContent = main;
          TempValue.textContent = Math.round(feels_like - 273);
          console.log(id);
          if (id < 300 && id > 200) {
            tempicon.src = "./icons/thunderstrom.svg";
          } else if (id < 400 && id > 300) {
            tempicon.src = "./icons/cloud-solid.svg";
          } else if (id < 600 && id > 500) {
            tempicon.src = "./icons/rain.svg";
          }
          
          else if (id < 700 && id > 600) {
            tempicon.src = "./icons/snow.svg";
          }
          
          else if (id < 800 && id > 700) {
            tempicon.src = "./icons/clouds.svg";
          }
          else if (id < 900 && id > 800) {
            tempicon.src = "./icons/clouds.svg";
          }
          
          
          else if (id ===800) {
            tempicon.src = "./icons/icon.svg";
          }
          
        });
    });
  }
});
