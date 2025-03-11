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
                            <li>Home</li>
                            <li>About</li>
                            <li>Events</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className=" absolute bottom-0 flex flex-row-reverse w-[90vw] justify-between m-3 mx-5">
                        <div>
                            <h3 className="text-3xl mb-2 orbitron text-white">
                                Innovate. Elevate. Dominate.
                            </h3>
                            <p className=" text-white w-[600px] text-lg">
                                Step into the future at Signifya, where
                                cutting-edge tech, creative brilliance, and
                                revolutionary ideas collide to redefine
                                possibilities!
                            </p>
                        </div>
                        <Typewriter />
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
                <h1 className="orbitron text-white font-light md:text-[3vw] text-[10vw] mb-5">
                    What is Signifiya?
                </h1>
                <p className="text-white max-w-2xl text-lg">
                    Signifiya 2k25 is a premier tech fest featuring cutting-edge
                    competitions, futuristic projects, and engaging talks by
                    industry experts.
                </p>
            </motion.section>

            {/* Events Section */}
            <motion.section
                className="w-screen min-h-screen overflow-hidden  flex flex-col items-center justify-center relative text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className="orbitron text-white font-light md:text-[3vw] text-[10vw] mb-20">
                    Events
                </h1>
                <div className="flex flex-wrap gap-6 justify-center">
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            className="relative w-[350px] h-[350px] rounded-xl overflow-hidden cursor-pointer 
                                   transition-all duration-300 ease-in-out border border-[#9c0390] 
                                   hover:scale-110 active:scale-95"
                            style={{
                                backgroundImage: `url(${event.bg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            onClick={() => setSelectedEvent(event)}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                            {/* Futuristic Inner Glow */}
                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md 
                                        flex items-center justify-center text-white text-2xl font-extrabold 
                                        uppercase tracking-wider neon-text"
                            >
                                {event.name}
                            </div>

                            {/* Inner Glowing Effect (Soft Pink & Purple) */}
                            <div className="absolute inset-0 bg-[#9c0390] opacity-10 mix-blend-color-dodge"></div>

                            {/* Animated Inner Shadows for Depth */}
                            <div
                                className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent 
                                        via-[#9c0390]/30 to-transparent opacity-60 pointer-events-none"
                            ></div>

                            {/* Inner Border Glow */}
                            <div
                                className="absolute inset-0 rounded-xl border-2 border-transparent 
                                        hover:border-[#9c0390] hover:shadow-inner transition-all duration-300"
                            ></div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Event Details Popup */}
            {selectedEvent && (
                // <motion.div className="fixed top-0 z-10 left-0 w-screen h-screen flex items-center justify-center  bg-opacity-70"
                //     initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                //     <div className="bg-[#222] p-5 rounded-lg text-white max-w-md text-center relative">
                //         <h2 className="text-2xl font-bold mb-2">{selectedEvent.name}</h2>
                //         <p className="mb-4">{selectedEvent.details}</p>
                //         <button className="bg-[#9c0390] px-4 py-2 rounded-lg" onClick={() => setSelectedEvent(null)}>Close</button>
                //     </div>
                // </motion.div>

                <EventDetailsPage
                    selectedEvent={selectedEvent}
                    setSelectedEvent={setSelectedEvent}
                />
            )}

            <TwoLayerOrbitingSponsors />

            <EventFooter />
        </main>
    );
};

export default App;
