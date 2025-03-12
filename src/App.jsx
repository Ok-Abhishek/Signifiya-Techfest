import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import herovid2 from "/herovid3.mp4";
import "./index.css"; // Add styles for grid background
import EventDetailsPage from "./components/EventDetailsPage";
import TwoLayerOrbitingSponsors from "./components/TwoLayerOrbitingSponsors";
import EventFooter from "./components/EventFooter";
import logo from "/img.png";
import Typewriter from "./components/Typewriter";
import EventsSection from "./components/EventsSection";
import SignifiyaFAQ from "./components/SignifiyaFAQ";

const events = [
    {
        id: 1,
        name: "Cyber Wars",
        bg: "/event1.jpg",
        details: "A thrilling hacking competition.",
    },
    {
        id: 2,
        name: "AI Battles",
        bg: "/event2.jpg",
        details: "Build and test AI models live.",
    },
    {
        id: 3,
        name: "Robo Race",
        bg: "/event3.jpg",
        details: "Race robots on complex tracks.",
    },
    {
        id: 4,
        name: "Future Talks",
        bg: "/event4.jpg",
        details: "Panel discussions with tech leaders.",
    },
];

const App = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <main className="overflow-x-hidden relative bg-[#181818]">
            <div className="grid-bg"></div>
            {/* Hero Section */}
            <section className="w-screen overflow-hidden h-screen  flex flex-col items-center justify-center relative">
                <div className="relative w-[93vw] h-[90vh] rounded-3xl overflow-hidden">
                    <div className=" z-30 orbitron absolute top-0 left-0 m-3  text-white">
                        <ul className=" flex items-center gap-7 justify-between">
                            <li className=" flex items-center gap-2">
                                <img className=" h-12" src={logo} alt="" />
                            </li>
                            <li className="md:block hidden">Home</li>
                            <li className="md:block hidden">About</li>
                            <li className="md:block hidden">Events</li>
                            <li className="md:block hidden">Contact</li>
                        </ul>
                    </div>
                    <div className=" absolute bottom-0 flex flex-row w-[90vw] justify-between m-3 mx-5">
                        <Typewriter />
                        <div className="md:block hidden">
                            <h3 className="text-3xl mb-2 orbitron text-white">
                                Innovate. Elevate. Dominate.
                            </h3>
                            <p className=" text-white w-[600px]  text-lg">
                                Step into the future at Signifya, where
                                cutting-edge tech, creative brilliance, and
                                revolutionary ideas collide to redefine
                                possibilities!
                            </p>
                        </div>
                        
                    </div>
                    <div className="orbitron cursor-pointer z-20 absolute right-0 top-0  w-[70px] py-3 flex flex-col items-center justify-center rounded-bl-3xl">
                        <ul className=" uppercase flex flex-col items-center text-white px-4 py-3 rounded-xl font-semibold bg-[#2D2D62]">
                            <li>R</li>
                            <li>e</li>
                            <li>g</li>
                            <li>i</li>
                            <li>s</li>
                            <li>t</li>
                            <li>e</li>
                            <li className=" mb-3">r</li>

                            <li>N</li>
                            <li>o</li>
                            <li>w</li>
                        </ul>
                        <div className="m-1 text-white p-4 bg-[#2D2D62] rounded-full">
                            <BsArrowUpRight />
                        </div>
                    </div>
                    <div className=" orbitron absolute left-0 bottom-0 flex flex-col"></div>
                    <video
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                        src={herovid2}
                    ></video>
                </div>
            </section>

            {/* What is Signifiya? */}
            <motion.section
                className="w-screen min-h-screen overflow-hidden  flex flex-col items-center justify-center relative text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className="orbitron text-white font-light md:text-[3vw] text-[8vw] mb-20">
                    What is Signifiya?
                </h1>
                <p className="text-white max-w-8xl md:text-[1.2vw] text-[3.5vw] text-center md:px-28 px-6 ">
                    Signifiya 2k25 is the annual inter-university tech fest
                    organized by the School of Engineering and Technology
                    (SOET), Adamas University. Designed to foster innovation and
                    collaboration, the event brings together technology
                    enthusiasts from various institutions to compete, explore,
                    and showcase their skills. With a diverse range of
                    competitions—including robotics, coding, gaming, and fun
                    knowledge-based events— Signifiya 2025 aims to create an
                    engaging platform for learning, networking, and pushing the
                    boundaries of technology. Join us, and be part of a
                    celebration where creativity meets excellence!
                </p>
            </motion.section>

            <EventsSection />
            <TwoLayerOrbitingSponsors />

            <SignifiyaFAQ />

            <EventFooter />
        </main>
    );
};

export default App;
