import React from "react";
import './ArtistCard.css'

const ArtistCard = ({ name, img }) => {
    return (
        <div className="artistcard">
            <img className="cutout" src={`/assets/imgs/artists/ankitabhattacharyacutout.png`} alt={name + "cutout"} />
            <img className="full" src={`/assets/imgs/artists/ankitabhattacharya.png`} alt={name} />
            <div className="artistname">{name}</div>
            <div className="daynumber">Day 01</div>
        </div>
    );
};

export default ArtistCard;
