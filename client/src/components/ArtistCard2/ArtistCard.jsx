import React from "react";
import './ArtistCard.css'

const ArtistCard = ({ name, img, day }) => {
    const imgsrc = (name) => `/assets/imgs/Current_Artists/${img}.webp`;
    const cutoutsrc = (name) => `/assets/imgs/Current_Artists/${img}_cutout.webp`;
    return (
        <div className="artistcard">
            <img className="cutout" src={cutoutsrc(name)} alt={name + "cutout"} />
            <img className="full" src={imgsrc(name)} alt={name} />
            <div className="artistname">{name}</div>
            <div className="daynumber">{`Day 0${day}`}</div>
        </div>
    );
};

export default ArtistCard;
