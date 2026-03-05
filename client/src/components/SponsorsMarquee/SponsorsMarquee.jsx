import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SponsorsMarquee.css";

gsap.registerPlugin(ScrollTrigger);

const DynamicMarquee = ({
    items = [],
    logoHeight = "90px",
    direction = "left",
    autoscroll = false,
    scrollDistance = 2500,
}) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    // 1. Create a ref to store our auto-scroll animation
    const tweenRef = useRef(null);

    useGSAP(
        () => {
            const track = trackRef.current;

            if (autoscroll) {
                const startPercent = direction === "left" ? 0 : -33.33;
                const endPercent = direction === "left" ? -33.33 : 0;

                tweenRef.current = gsap.fromTo(
                    track,
                    { xPercent: startPercent },
                    {
                        xPercent: endPercent,
                        ease: "none",
                        repeat: -1,
                        duration: 25,
                    },
                );
            } else {
                const movePixels = direction === "left" ? -scrollDistance : scrollDistance;

                gsap.set(track, { x: 0, xPercent: direction === "right" ? -15 : 0 });

                gsap.to(track, {
                    x: movePixels,
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1,
                    },
                });
            }
        },
        { scope: containerRef, dependencies: [direction, autoscroll, scrollDistance, items.length] },
    );

    // 3. Create mouse handlers to pause/play the tween
    const handleMouseEnter = () => {
        if (autoscroll && tweenRef.current) {
            tweenRef.current.pause();
        }
    };

    const handleMouseLeave = () => {
        if (autoscroll && tweenRef.current) {
            tweenRef.current.play();
        }
    };

    return (
        <div
            className="marquee-container"
            ref={containerRef}
            onMouseEnter={handleMouseEnter} // 4. Attach handlers here
            onMouseLeave={handleMouseLeave}
        >
            <div className="marquee-track" ref={trackRef}>
                <div className="logo-group">
                    {[...items, ...items, ...items].map((sponsor, index) => (
                        <img
                            key={`sponsor-${index}`}
                            src={`/assets/imgs/sponsorship/${sponsor.imgname}.webp`}
                            alt={sponsor.imgname?.split("/")[2] || "Sponsor Logo"}
                            className="sponsor-logo"
                            style={{ height: logoHeight }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DynamicMarquee;
