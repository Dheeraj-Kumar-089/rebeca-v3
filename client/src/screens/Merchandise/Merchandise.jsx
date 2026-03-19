import React from "react";
import "./Merchandise.css";
import { Typography, Button } from "@mui/material";
import { FavoriteRounded } from "@mui/icons-material";

const Merchandise = () => {
    return (
        <div className="merch">
            <Typography variant="h1" sx={{ fontFamily: "var(--heading-font)" }}>
                OFFICIAL MERCH DROP!
            </Typography>
            <Typography
                variant="caption"
                sx={{ fontFamily: "var(--display-font)", color: "var(--accent1)", fontSize: "1.6rem" }}
            >
                The legacy. The energy. The ultimate souvenir.
            </Typography>
            <section className="section-2">
                <div className="img">
                    <img src="./assets/imgs/merch/tshirt_rebeca.webp" alt="" />
                </div>
                <div className="content">
                    Step into REBECA in style! Celebrate the spirit of creativity, unity, and cultural flair with our
                    exclusive official merchandise.<br></br>
                    Inspired by the vibrant energy of REBECA, our collection bursts with bold colors and dynamic designs
                    — a perfect reflection of the fest's electrifying vibe.<br></br>
                    Scan the QR code on this poster or fill out the G-Form attached to secure your size before they sell out.
                    <br/>
                    <Button variant="contained" endIcon={<FavoriteRounded />} sx={{mt: 4}} href="https://forms.gle/XX6fcmH4hxNgvLkP6" size="large" target="_blank">
                        Order Yours Now!
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Merchandise;
