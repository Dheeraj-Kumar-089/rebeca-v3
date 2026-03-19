import "./Home.css";
import Heading from "../../components/Headingv2/Headingv2";
import ArtistList from "../../components/ArtistList/ArtistList";
import CollageHeart from "../../components/CollageHeart/CollageHeart";
import Hero from "../../components/ScrollFancy/Hero";
import CountDown from "../../components/CountDown/CountDown";
import Schedule from "../Schedule_new/Schedule"
import { Typography } from "@mui/material";

const artists = [
    { name: "Sushmita Patra", img: "sushmita_patra" },
    { name: "Pt. Tarun Bhattacharya", img: "pt_tarun_bhattacharya" },
    { name: "Ankita Bhattacharya", img: "ankita_bhattacharya" },
    { name: "Somlata and the Aces", img: "somlata" },
    { name: "The Folk Diaryz", img: "the_folk_diaryz" },
    { name: "Kunal Grover", img: "kunal_grover" },
    { name: "Anurag Halder", img: "anurag_halder" },
    { name: "Fakira", img: "fakira" },
    { name: "Prithibi", img: "prithibi" },
    { name: "Nakash Aziz", img: "nakash_aziz" },
    { name: "Ehsaas India", img: "ehsaas_india" }
]

const Home = () => {
    return (
        <div className="home">
            <div className="wave-bg">
                <img src="/assets/imgs/home/wavy_bg.webp" alt="" />
            </div>
            <Hero />
            <section className="section-2" id="are-you-ready">
                <div className="banner">
                    <div className="">BEings, are you ready?</div>
                    <div className="">the countdown to our very own Pujo has already begun!</div>
                </div>
            </section>
            <section className="section-3">
                <h1 className="date">MARCH 19-22</h1>
                <h4>Lords' Ground, IIEST Shibpur</h4>
                <p>
                    Prepare to be swept away as you put your best foot forward in this epic celebration of creativity
                    and culture that promises you laughter, joy and memories that will last you a lifetime and more.
                </p>
            </section>
            <section className="section-4 ">
                <Typography variant="h1" sx={{fontFamily: 'var(--heading-font)'}}>Upcoming Artists</Typography>
                <Typography variant="caption" sx={{fontFamily: 'var(--display-font)', color: 'var(--accent1)', fontSize: '1.6rem'}}>Feeling the thrill already?</Typography>
                <p>
                    Honoring the visionary creators and legendary performers whose timeless artistry paved the way for the vibrant, evolving culture we celebrate today.
                </p>
                {/* <ArtistList artists={artists} /> */}
            </section>
            <section className="section-5" style={{marginTop: "8rem"}}>
                <Heading title={"SCHEDULE"} />
                <Schedule />
            </section>
            <section className="section-6">
                <h1>MOMENTS</h1>
                <h4>That last a lifetime</h4>
                <CollageHeart />
            </section>
            {/* <CountDown /> */}
        </div>
    );
};

export default Home;