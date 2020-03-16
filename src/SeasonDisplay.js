import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {

    Summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    Winter: {
        text: 'Brrr its cold',
        iconName: 'snowflake'
    } 
};

const getSeason = (lat, month) =>{
    if (month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

const SeasonDisplay = (props) => {
    console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
    <div className={`${season} season-display`}>
        <i className={`${iconName} icon massive icon-left`} />
        <h1>{text}</h1>
        <i className={`${iconName} icon massive icon-right`} />
    </div>
    );
};

export default SeasonDisplay;