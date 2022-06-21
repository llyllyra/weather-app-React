import React, {useState} from 'react';
import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons'


function InputCity({setQuery}) {
    const [city, setCity] = useState("")

    const handleSearchClick = () => {
        if (city !== "") {
            setQuery({q: city})
        }
        ;
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                setQuery({
                    lat, lon
                })
            })
        }
    };

    return (
        <section className="flex flex-row justify-start my-6">
            <div className="flex flex-row space-x-5">
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder="Search for city...."
                    className="w-96 text-black caret-pink-500 "

                />
                <UilSearch
                    size={25}
                    className=""
                    onClick={handleSearchClick}
                />
                <UilLocationPoint
                    size={25}
                    className=""
                    onClick={handleLocationClick}
                />
            </div>
        </section>
    );
};

export default InputCity;