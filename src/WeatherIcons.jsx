import React from 'react';

function WeatherIcons(props) {
    return (
        <div>
            <div className="weather">
                <img
                src={props.img}
                alt={props.time}
                />
                <p><span>conditions:</span>{props.conditions}</p>
                <p><span>time:</span>{props.time}</p>
            </div>

        </div>
    );
}

export default WeatherIcons;