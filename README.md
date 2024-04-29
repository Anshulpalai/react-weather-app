# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Weather App

This is a simple React weather application that allows users to check the weather forecast for different cities or their current location. It provides current weather details as well as hourly and daily forecasts.

## Features

- View current weather details including temperature, feels-like temperature, humidity, wind speed, sunrise, and sunset times.
- Toggle between Celsius (°C) and Fahrenheit (°F) units.
- Search for weather forecasts by city name.
- Get weather forecasts for popular cities with the top buttons.
- Fetch the weather based on the user's current location.

## Getting Started

To get started with this weather app, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install` or `yarn install`.
3. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) to access weather data.
4. Replace the placeholder API key in `weatherServices.js` with your actual API key.
5. Run the app using `npm start` or `yarn start`.

## Dependencies

This project relies on the following dependencies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Luxon](https://moment.github.io/luxon/): A library for working with dates and times.
- [React Toastify](https://github.com/fkhadra/react-toastify): A notification system for React applications.

## Components

### `TopButtons`

This component renders top buttons for selecting popular cities.

### `Inputs`

This component includes input fields for searching cities and toggling between temperature units.

### `TimeAndLocation`

Displays the current time and location.

### `TemperatureAndDetails`

Shows the current temperature and additional weather details like humidity, wind speed, and sunrise/sunset times.

### `Forecast`

Displays hourly or daily weather forecast items.

### `App`

Main component that integrates all the above components and manages state for fetching weather data.

## Usage

Once the app is running, users can:

- Click on top buttons to select popular cities.
- Enter a city name in the search input field and click the search icon to get weather details for that city.
- Click on the location icon to fetch weather data for the current location.
- Toggle between Celsius and Fahrenheit units by clicking on the respective buttons.

## Credits

This project was created by Anshul Palai.

