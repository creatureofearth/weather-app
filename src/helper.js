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
    const weatherDescriptions = weather?.current?.weather_descriptions;
    if (weatherDescriptions) {
      if (weatherDescriptions.includes("Clear")) { // if weather description includes "Clear" (e.g. "Clear Sky")
        return style.sunny;
      } 
      else if (weatherDescriptions.includes("Cloudy") || weatherDescriptions.includes("Overcast")) { // if weather description includes "Cloudy" or "Overcast"
        return style.cloudy;
      } 
      else if (weatherDescriptions.some(desc => desc.includes("Rain"))) { // if weather description includes "Rain" (e.g. "Light Rain")
        return style.rainy;
      }
      else if (weatherDescriptions.some(desc => desc.includes("Snow"))) { // if weather description includes "Snow" (e.g. "Light Snow")
        return style.snowy;
      } 
      else if (weatherDescriptions.includes("Thunderstorm")) { // if weather description includes "Thunderstorm"
        return style.thunderstorm;
      }
    }
    return '';
}