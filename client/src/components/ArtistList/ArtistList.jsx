"use client";

import React from "react";
import ArtistCard from "../ArtistCard2/ArtistCard";
import { Box } from "@mui/material";

const ArtistList = ({ artists = [] }) => {
    if (!artists || artists.length === 0) return null;
    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 1.5, mt: 5, maxWidth: 1200 }}>
            {artists.map((artist, index) => (
                <ArtistCard name={artist?.name} img={artist?.img} />
            ))}
        </Box>
    );
};

export default ArtistList;
