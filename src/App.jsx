import './App.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import {TopButtons, Inputs, TimeAndLocation, TemperatureAndDetails, Forecast} from './index'
import getFormattedWeatherData from './services/weatherService'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [query, setQuery] = useState({ q: 'Kolkata' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q: 'current location...'
      toast.info("Fetching weather for " + message)
      await getFormattedWeatherData({ ...query, units }).then((data) => {

        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}!`)
        setWeather(data);
      });

    }
    fetchWeather();
  }, [query, units]);

  const formatBackground = () =>{
    if(!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === 'metric' ? 20: 60
    if (weather.temp < threshold) return ' from-cyan-700 to-blue-700'
    return 'from-yellow-800 to-orange-700'
  }



  return (
    <div className={`min-w-screen p-4 m-4 bg-gradient-to-br ${formatBackground()} shadow-gray-400`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} unist={units} setUnits={setUnits}/>

      {weather && (
        <div>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>

          <Forecast title="hourly forecast" items={weather.hourly}/>
          <Forecast title="Daily forecast" items={weather.daily}/>
        </div>
      )}
      <ToastContainer autoClose={2000} theme='colored' newestOnTop={true} />
    </div>
  )
}

export default App
