# weather-app
Our weather app has been designed specifically for cyclists to help them plan their cycling routes based on the weather conditions. The app has been developed using Preact, JS and CSS to create a sleek and modern feel.

## CLI Commands
To get started with this app, you should first install the required dependencies by running npm install. Once the dependencies are installed, you can use the npm run dev command to start the development server with hot reload at localhost:8080
To build the app for production with minification, you can use the npm run build command. This will create a dist folder with the production build of the app.
You can test the production build locally using the npm run serve command. This will start a server that serves the production build at localhost:8080.
To run tests for the app using Jest and Enzyme, you can use the npm run test command. This will run all the tests and provide you with the test results.
For more information on how to use the Preact CLI, please refer to the CLI Readme.

```bash
# install dependencies
npm install
npm install mapbox-gl
npm install @mapbox/mapbox-gl-directions


# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

How to Use
The app will provide you with the current weather conditions and the forecast for the next few days.
You can also enter a destination and the app will provide you with the directions to that location. This allows for the cyclists to plan their routes ahead of time. The app provides you with the temperature, visibility, wind speed, and other important weather information that can help you plan your cycling route accordingly.
