/* 
    Capitalise the first letter of input - used for weather
    descriptions.
*/
export function capitalise(input) {
    return input.charAt(0).toUpperCase() + input.slice(1)
}

/* 
    Matches a class style to a weather description. Allows us
    to style the main component according to the type of weather
    eg. showing an image of rain when the weather is rainy.
*/
export function getStyleClass(weather) {
    if (weather) {
      if (weather == "Clear") { // if weather description includes "Clear" (e.g. "Clear Sky")
        return "style.sunny";
      } 
      else if (weather == "Clouds") { // if weather description includes "Cloudy" or "Overcast"
        return "style.cloudy";
      } 
      else if (weather == "Rain" || weather == "Drizzle") { // if weather description includes "Rain" (e.g. "Light Rain")
        return "style.rainy";
      }
      else if (weather == "Snow") { // if weather description includes "Snow" (e.g. "Light Snow")
        return "style.snowy";
      } 
      else if (weather == "Thunderstorm") { // if weather description includes "Thunderstorm"
        return "style.thunderstorm";
      }
      else {
        return "style.sunny";
      }
    }
    return '';
}

/* 
    Matches weather descriptions to icons
*/
export function getIcon(weather) {
    if (weather) {
      if (weather == "Clear") { // if weather description includes "Clear" (e.g. "Clear Sky")
        return "https://www.dropbox.com/s/nve0zwji4zlhida/weather-2-svgrepo-com.svg?raw=1";
      } 
      else if (weather == "Clouds") { // if weather description includes "Cloudy" or "Overcast"
        return "https://www.dropbox.com/s/2gy09q6cft9s6ni/clouds-fill-svgrepo-com.svg?raw=1";
      } 
      else if (weather == "Rain" || weather == "Drizzle") { // if weather description includes "Rain" (e.g. "Light Rain")
        return "https://www.dropbox.com/s/g3edx722kgrcbv3/rain-alt-svgrepo-com.svg?raw=1";
      }
      else if (weather == "Snow") { // if weather description includes "Snow" (e.g. "Light Snow")
        return "https://www.dropbox.com/s/vvfb5ziuzuiemfg/snow-svgrepo-com.svg?raw=1";
      } 
      else if (weather == "Thunderstorm") { // if weather description includes "Thunderstorm"
        return "https://www.dropbox.com/s/0iie382rqo7s4t4/thunder-svgrepo-com.svg?raw=1";
      }
      else {
        return "https://www.dropbox.com/s/nve0zwji4zlhida/weather-2-svgrepo-com.svg?raw=1";
      }
    }
    return '';
}

