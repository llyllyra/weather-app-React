import React from 'react';
import {
    UilArrowDown,
    UilArrowUp,
    UilSun,
    UilSunset,
    UilTear,
    UilTemperature,
    UilWind
} from "@iconscout/react-unicons";
import {formatToLocalTime, iconUrlFromCode} from "../services/weatherService";


function TemperatureAndDetails({
                                   weather: {
                                       description,
                                       icon,
                                       temp,
                                       temp_min,
                                       temp_max,
                                       sunrise,
                                       sunset,
                                       speed,
                                       humidity,
                                       feels_like,
                                       timezone
                                   }
                               }) {
    return (
        <div>
            <section className="flex items-center justify-center py-6 text-xl text-cyan-300" id="weatherText">
                <p>{description}</p>
            </section>
            <section className="flex flex-row items-center justify-between text-white py-3">
                <img src={iconUrlFromCode(icon)} alt={description} className="w-20"/>
                <p className="text-5xl">{`${temp.toFixed()}`}°</p>
                <section className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/> feels like: <span
                        id="Température" className="font-bold ml-1">{`${feels_like.toFixed()}`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1"/> Humidity: <span
                        id="Température" className="font-bold ml-1">{`${humidity.toFixed()}`}%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1"/> Wind: <span
                        id="Température" className="font-bold ml-1"> {`${speed.toFixed()}`} km/h</span>
                    </div>
                </section>
            </section>
            <section className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun/>
                <p className="font-light">
                    Sunrise
                    <span className="font-medium ml-1">{formatToLocalTime(sunrise, timezone, "hh:mm")}</span>
                </p>
                <p className="font-light">|</p>
                <UilSunset/>
                <p className="font-light">
                    Sunset
                    <span className="font-medium ml-1">{formatToLocalTime(sunset, timezone, "hh:mm")}</span>
                </p>
                <p className="font-light">|</p>
                <UilArrowDown/>
                <p className="font-light">
                    min:
                    <span className="font-medium ml-1">{`${temp_min.toFixed()}`}</span>
                </p>
                <p className="font-light">|</p>
                <UilArrowUp/>
                <p className="font-light">
                    max:
                    <span className="font-medium ml-1">{`${temp_max.toFixed()}`}</span>
                </p>
            </section>
        </div>
    );
};

export default TemperatureAndDetails;