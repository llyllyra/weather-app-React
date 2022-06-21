import React, {useEffect, useState} from 'react';
import './App.css';
import InputCity from "./components/inputCity";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {

    const [query, setQuery] = useState({q: ''})
    const [units, setUnits] = useState("metric");
    const [lang] = useState("fr");
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({...query, units, lang}).then(data => {
                setWeather(data)
            });
        };
        fetchWeather()
    }, [query, units, lang])

    return (
        <section className="mx-auto max-w-screen-xl">
            <InputCity setQuery={setQuery} units={units} setUnits={setUnits}/>

            <section
                className="mx-auto max-w-screen-xl mt-4 py-5 px-32 bg-gradient-to-br bg-blue-700  h-fit shadow-xl shadow-gray-400">
                {weather && (
                    <div>
                        <TimeAndLocation weather={weather}/>
                        <TemperatureAndDetails weather={weather}/>

                        <Forecast title="hourly forecast" items={weather.hourly}/>
                        <Forecast title="daily forecast" items={weather.daily}/>
                    </div>
                )}
            </section>

        </section>
    );
};


export default App;