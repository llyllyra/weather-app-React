import React from 'react';
import {formatToLocalTime} from "../services/weatherService"

const TimeAndLocation = ({weather: {dt, timezone, name, country}}) => {
    return (
        <div>
            <div className="flex flex-row text-center justify-between">

                <section>
                    <p className="">
                        {`${name}, ${country}`}
                    </p>
                </section>
                <section id="time" className="">
                    <p>
                        {formatToLocalTime(dt, timezone)}
                    </p>
                </section>

            </div>
        </div>
    );
};

export default TimeAndLocation;