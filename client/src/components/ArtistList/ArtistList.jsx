import React, { useRef, useLayoutEffect } from "react";
import ArtistCard from "../ArtistCard2/ArtistCard";
import { Box, useTheme, useMediaQuery } from "@mui/material"; // Added MUI hooks
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ArtistList = ({ artists = [] }) => {
    const containerRef = useRef(null);
    const middleColumnRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);

    // 1. Setup our breakpoint listener (triggers at 900px and below)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); 

    useLayoutEffect(() => {
        // 2. Prevent GSAP from running if there are no artists OR if it's a mobile screen
        if (!artists || artists.length === 0 || isMobile) return;

        let ctx = gsap.context(() => {
            gsap.to(middleColumnRef.current, {
                yPercent: -20, 
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });

        }, containerRef);

        return () => ctx.revert(); 
    }, [artists, isMobile]); // Added isMobile to the dependency array

    if (!artists || artists.length === 0) return null;

    // 3. Render plain layout for mobile/tablets
    if (isMobile) {
        return (
            <Box 
                sx={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    gap: 2, 
                    mt: 5, 
                    maxWidth: 1200,
                    mx: "auto",
                    px: 2 // Added a little padding for mobile screens
                }}
            >
                {artists.map((artist, index) => (
                    <ArtistCard key={`mobile-${index}`} name={artist?.name} img={artist?.img} />
                ))}
            </Box>
        );
    }

    // 4. Render the 3-column GSAP layout for desktops
    const columns = [[], [], []];
    artists.forEach((artist, index) => {
        columns[index % 3].push(artist);
    });

    return (
        <Box 
            ref={containerRef} 
            sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "flex-start", 
                gap: 2, 
                mt: 5, 
                maxWidth: 1200, 
                mx: "auto", 
                overflow: "hidden", 
                py: 5 
            }}
        >
            <Box ref={leftColumnRef} sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, mt: -5 }}>
                {columns[0].map((artist, index) => (
                    <ArtistCard key={`col1-${index}`} name={artist?.name} img={artist?.img} day={artist?.day} />
                ))}
            </Box>

            <Box ref={middleColumnRef} sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, mt: 25 }}>
                {columns[1].map((artist, index) => (
                    <ArtistCard key={`col2-${index}`} name={artist?.name} img={artist?.img} day={artist?.day} />
                ))}
            </Box>

            <Box ref={rightColumnRef} sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, mt: -5 }}>
                {columns[2].map((artist, index) => (
                    <ArtistCard key={`col3-${index}`} name={artist?.name} img={artist?.img} day={artist?.day} />
                ))}
            </Box>
        </Box>
    );
};

export default ArtistList;