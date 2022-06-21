import React from 'react';
import {iconUrlFromCode} from "../services/weatherService";


const Forecast = ({title, items}) => {


    return (
        <div>
            <section className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </section>
            <hr className="my-2"/>
            <section className="flex flex-row items-center justify-between text-white">
                {items.map((item) => (
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">{item.title}</p>
                        <img src={iconUrlFromCode(item.icon)} alt="icon"/>
                        <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
                        {(title === 'hourly forecast') ? console.log(`${item.temp.toFixed()}`) : ""}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Forecast;