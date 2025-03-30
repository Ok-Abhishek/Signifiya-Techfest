import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import herovid2 from "/herovid3.mp4";
import "./index.css";

import EventDetailsPage from "./components/EventDetailsPage";
import TwoLayerOrbitingSponsors from "./components/TwoLayerOrbitingSponsors";
import EventFooter from "./components/EventFooter";
import logo from "/img.png";
import Typewriter from "./components/Typewriter";
import EventsSection from "./components/EventsSection";
import SignifiyaFAQ from "./components/SignifiyaFAQ";
import { Link } from "react-scroll";
import FuturisticCursor from "./components/FuturisticCursor";
import SignifiyaTeam from "./components/SignifiyaTeam";
import SignifiyaTimeTable from "./components/SignifiyaTimeTable";



const App = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="overflow-x-hidden relative bg-[#181818]">
            <FuturisticCursor />
            <div className="grid-bg"></div>
            {/* Hero Section */}
            <section id="home" className="w-screen overflow-hidden h-screen  flex flex-col items-center justify-center relative">
                <div className="relative w-[93vw] h-[90vh] rounded-3xl overflow-hidden">
                    <div className=" z-30 orbitron absolute top-0 left-0 m-3  text-white">
                        <ul className="flex items-center gap-7 justify-between">
                            <li className="flex items-center gap-2">
                                <img className="h-12" src={logo} alt="" />
                            </li>
                            <li className="md:block hidden">
                                <Link to="home" smooth={true} duration={800}>Home</Link>
                            </li>
                            <li className="md:block hidden">
                                <Link to="about" smooth={true} duration={800}>About</Link>
                            </li>
                            <li className="md:block hidden">
                                <Link to="events" smooth={true} duration={800}>Events</Link>
                            </li>
                            <li className="md:block hidden">
                                <Link to="sponsors" smooth={true} duration={800}>Sponsors</Link>
                            </li>
                            <li className="md:block hidden">
                                <Link to="contact" smooth={true} duration={800}>Contact</Link>
                            </li>
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
                    {/* <Link to="events" smooth={true} duration={800}> */}
                    <div onClick={() => setIsModalOpen(true)} className="orbitron cursor-pointer z-20 absolute right-0 top-0  w-[70px] py-3 flex flex-col items-center justify-center rounded-bl-3xl">
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
                    {/* </Link> */}
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
                id="about"
                className="w-screen min-h-screen overflow-hidden  flex flex-col items-center justify-center relative text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className="orbitron text-white font-light md:text-[3vw] text-[8vw] mb-20">
                    Discover Signifiya 2025
                </h1>
                <div className=" flex md:flex-row flex-col w-full md:px-28 px-6">
                <video className=" md:w-1/2 w-full" muted autoPlay loop src="/discover.mp4"></video>
                <p className="text-white max-w-8xl md:text-[1.2vw] text-[3.5vw] py-5 md:px-5 text-left ">
                    Signifiya 2025 is the annual inter-university tech fest
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
                </div>
            </motion.section>

            <SignifiyaTimeTable />

            <EventsSection />
            <TwoLayerOrbitingSponsors />

            <SignifiyaTeam />

            <SignifiyaFAQ />

            <EventFooter />

            {/* Registration Modal */}
            {isModalOpen && (
                <div className="fixed top-0 z-30 left-0 w-screen h-screen flex items-center justify-center bg-black/70  bg-opacity-70 p-4 overflow-y-auto">
                    <div className="bg-[#1d1d1d] text-center p-10 border-2 border-[#2D2D62] rounded-xl max-w-2xl w-full shadow-xl overflow-hidden">
                        <button
                            className="absolute top-3 right-4 text-2xl hover:text-gray-300"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold text-white">Visitor's Registration</h2>
                        <p className="mt-3 text-gray-300">
                            Please register for Visitor's Registration by scanning the QR code.
                        </p>

                        {/* QR Code Placeholder */}
                        <div className="mt-10 flex items-center justify-center">
                            {/* <img
                                src="/registration-opening-soon.gif"  // Add your GIF or image in the public folder
                                alt="Registration Opening Soon"
                                className="w-52 h-52 rounded-lg"
                            /> */}
                            <div className="w-52 h-52 bg-gray-800 flex items-center justify-center rounded-lg">
                                <img
                                    src="/Visitors_Form.png"  // Add your GIF or image in the public folder
                                    alt="Registration Already Started"
                                    className="w-52 h-52 rounded-lg"
                                />
                                {/* <p className="text-sm text-gray-400">QR Code Soon</p> */}
                            </div>
                        </div>

                        <button
                            className="mt-10 bg-[#2D2D62] text-white px-5 py-2 rounded-lg w-full hover:bg-[#3A3A9F]"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default App;
