import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, DollarSign, Award } from "lucide-react";

const EventsSection = () => {
    // Main event categories

    const [eventCategories, setEventCategories] = useState([
        {
            id: 1,
            name: "Robotics Events",
            bg: "/Cardpictures/Robotics.png",
            subEvents: [
                {
                    id: 101,
                    name: "Path Follower",
                    bg: "Event/4.png",
                    details:
                        "Build an autonomous robot that can navigate a predefined path with precision and speed.",
                    Day: "5th April, 2025",
                    Timing: "10 am - 3 pm",
                    Location: "Room 3102",
                    Registration_Price: "Starting from ₹150",
                    registrationLink: "https://forms.gle/iMsR1eGFS9STsWLcA",
                },
                {
                    id: 102,
                    name: "Robo Terrain",
                    bg: "Event/5.png",
                    details:
                        "Design a robot that can traverse an obstacle-filled terrain and complete missions.",
                    Day: "4th April, 2025",
                    Timing: "10 am - 3 pm",
                    Location: "Room 3103",
                    Registration_Price: "Starting from ₹150",
                    registrationLink: "https://forms.gle/vFx5DNfLfFEJrddWA",
                },
            ],
        },
        {
            id: 2,
            name: "Gaming Events",
            bg: "/Cardpictures/gaming-domain.png",
            subEvents: [
                {
                    id: 201,
                    name: "BGMI (Battlegrounds Mobile India)",
                    bg: "Event/1.png",
                    details:
                        "Compete in an intense battle royale match and fight for survival.",
                    Day: "5th April, 2025",
                    Timing: "10 am - 3 pm",
                    Location: "Conventional Hall",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/WLTU6ga4uHxr3uUz9",
                },
                {
                    id: 202,
                    name: "Valorant",
                    bg: "Event/2.png",
                    details:
                        "Show your tactical prowess in this 5v5 shooter tournament.",
                    Day: "4th April, 2025",
                    Timing: "10 am - 5 pm",
                    Location: "Convention Hall",
                    Registration_Price: "Starting from ₹150",
                    registrationLink: "https://forms.gle/WyHWVwJHSiNTqHMY8",
                },
                {
                    id: 203,
                    name: "PES (Pro Evolution Soccer)",
                    bg: "Event/3.png",
                    details:
                        "Compete in this exciting football esports tournament.",
                    Day: "4th April, 2025",
                    Timing: "10 am - 1 pm",
                    Location: "Convention Hall",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/NJ3uq2WXZZK1H6KQ6",
                },
            ],
        },
        {
            id: 3,
            name: "Tech Events",
            bg: "/Cardpictures/technical.png",
            subEvents: [
                {
                    id: 301,
                    name: "Coding Premier League",
                    bg: "Event/6.png",
                    details: "Solve complex problems in this coding showdown.",
                    Day: "4th April, 2025",
                    Timing: "10 am - 4 pm",
                    Location: "Lab 2103 & Lab 2104",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/qF7wvXiT3tHo2LoU7",
                },
                {
                    id: 302,
                    name: "Science Olympiad",
                    bg: "Event/7.png",
                    details:
                        "Test your knowledge in science, logic, and critical thinking.",
                    Day: "4th April, 2025",
                    Timing: "2 pm - 4 pm",
                    Location: "Room 5206 & 5207",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/3A8akp5bfHq4wRWe8",
                },
                {
                    id: 303,
                    name: "Circuitronix",
                    bg: "Event/15.png",
                    details:
                        "Design and build electrical circuits to complete a challenge.",
                    Day: "4th April & 5th April, 2025",
                    Timing: "9:30 am - 6:30 pm & 9:30 am - 4:30 pm",
                    Location: "Room 5204",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/mc75WfpoLZotksEL8",
                },
            ],
        },
        {
            id: 4,
            name: "Mechanical Engineering Events",
            bg: "/Cardpictures/mechanical.png",
            subEvents: [
                {
                    id: 401,
                    name: "Re-Fab",
                    bg: "Event/16.png",
                    details:
                        "Create an innovative project using waste materials.",
                    Day: "4th april, 2025",
                    Timing: "10 am - 5 pm",
                    Location: "Lab 4001",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/bdbRpoGmCyxEJuvk9",
                },
                {
                    id: 402,
                    name: "Lathe War",
                    bg: "Event/10.png",
                    details:
                        "Precision machining competition using a lathe machine.",
                    Day: "5th April, 2025",
                    Timing: "9:30 am - 4 pm",
                    Location: "Central Workshop",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/nGxatPYpyvXFZmQK6",
                },
            ],
        },
        {
            id: 5,
            name: "Civil Engineering Events",
            bg: "/Cardpictures/civil.png",
            subEvents: [
                {
                    id: 501,
                    name: "Bridge Making",
                    bg: "Event/11.png",
                    details: "Design and build a stable bridge model.",
                    Day: "4th April, 2025",
                    Timing: "10 am - 1pm",
                    Location: "Room 5008 & 5002",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/Vm11nWoo37wJhDv99",
                },
                {
                    id: 502,
                    name: "Tower Making",
                    bg: "Event/12.png",
                    details:
                        "Construct a strong tower that can withstand tests.",
                    Day: "4th April, 2025",
                    Timing: "2 pm - 4 pm",
                    Location: "Room 5008 & 6002",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/puWt3asaABxQphiW9",
                },
            ],
        },
        {
            id: 6,
            name: "Non-Tech Fun Events",
            bg: "/Cardpictures/treasure.png",
            subEvents: [
                {
                    id: 601,
                    name: "Treasure Hunt",
                    bg: "Event/14.png",
                    details:
                        "Solve riddles, find clues, and race to uncover the hidden treasure.",
                    Day: "5th April, 2025",
                    Timing: "1 pm - 3pm",
                    Location: "Basketball Ground",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/6HiS1B9Q39FuK8Mp9",
                },
                {
                    id: 602,
                    name: "Tug of War",
                    bg: "Event/13.png",
                    details:
                        "The ultimate test of teamwork and strength in a friendly competition.",
                    Day: "4th April, 2025",
                    Timing: "4 pm - 6 pm ",
                    Location: "CCD Ground",
                    Registration_Price: "Starting from ₹150 ",
                    registrationLink: "https://forms.gle/v2RfjyDpjWJijHPA6",
                },
            ],
        },
    ]);

    // States for tracking navigation
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubEvent, setSelectedSubEvent] = useState(null);

    // Handler for back navigation
    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setSelectedSubEvent(null);
    };

    const handleBackToSubEvents = () => {
        setSelectedSubEvent(null);
    };

    return (
        <motion.section
            id="events"
            className="w-screen min-h-screen overflow-hidden flex flex-col items-center py-32 z-50 justify-center relative text-center "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            {/* Main Categories View */}
            {!selectedCategory && (
                <>
                    <h1 className="orbitron text-white font-light md:text-[3vw] text-[10vw] mb-20">
                        Events
                    </h1>
                    <div className="flex flex-wrap gap-6 justify-center max-w-6xl px-4">
                        {eventCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                className="relative w-[350px] max-w-full sm:max-w-[300px] md:max-w-[350px] h-[300px] md:h-[350px] rounded-xl overflow-hidden cursor-pointer 
                           transition-all duration-300 ease-in-out border border-[#2D2D62] 
                           hover:scale-110 active:scale-95 my-3"
                                style={{
                                    backgroundImage: `url(${category.bg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                onClick={() => setSelectedCategory(category)}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                            >
                                {/* Futuristic Inner Glow */}
                                <div
                                    className="absolute inset-0 bg-black/40 bg-opacity-40 
                         flex items-center justify-center text-white text-2xl font-extrabold 
                         uppercase tracking-wider neon-text"
                                >
                                    {category.name}
                                </div>

                                {/* Inner Glowing Effect */}
                                <div className="absolute inset-0 bg-[#2D2D62] opacity-10 mix-blend-color-dodge"></div>

                                {/* Animated Inner Shadows for Depth */}
                                <div
                                    className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent 
                          via-[#2D2D62]/30 to-transparent opacity-60 pointer-events-none"
                                ></div>

                                {/* Inner Border Glow */}
                                <div
                                    className="absolute inset-0 rounded-xl border-2 border-transparent 
                          hover:border-[#2D2D62] hover:shadow-inner transition-all duration-300"
                                ></div>
                            </motion.div>
                        ))}
                    </div>
                </>
            )}

            {/* Sub-Events View */}
            {selectedCategory && !selectedSubEvent && (
                <>
                    <div className="flex items-center mb-12">
                        <motion.button
                            onClick={handleBackToCategories}
                            className="mr-4 relative text-[#5D5D9C] hover:text-white"
                            whileHover={{ scale: 1.1 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </motion.button>
                        <h1 className="orbitron text-white font-light md:text-[3vw] text-[8vw]">
                            {selectedCategory.name}
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-6 justify-center max-w-6xl px-4">
                        {selectedCategory.subEvents.map((subEvent) => (
                            <motion.div
                                key={subEvent.id}
                                className="relative w-[350px] max-w-full sm:max-w-[300px] md:max-w-[350px] h-[300px] md:h-[350px] rounded-xl overflow-hidden cursor-pointer 
                           transition-all duration-300 ease-in-out border border-[#2D2D62] 
                           hover:scale-110 active:scale-95 my-3"
                                style={{
                                    backgroundImage: `url(${subEvent.bg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                onClick={() => setSelectedSubEvent(subEvent)}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                            >
                                {/* Futuristic Inner Glow */}
                                <div
                                    className="absolute inset-0 bg-black/40  
                         flex items-center justify-center text-white text-2xl font-extrabold 
                         uppercase tracking-wider neon-text p-4"
                                >
                                    {subEvent.name}
                                </div>

                                {/* Inner Glowing Effect */}
                                <div className="absolute inset-0 bg-[#2D2D62] opacity-10 mix-blend-color-dodge"></div>

                                {/* Animated Inner Shadows for Depth */}
                                <div
                                    className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent 
                          via-[#3D3D82]/30 to-transparent opacity-60 pointer-events-none"
                                ></div>

                                {/* Inner Border Glow */}
                                <div
                                    className="absolute inset-0 rounded-xl border-2 border-transparent 
                          hover:border-[#3D3D82] hover:shadow-inner transition-all duration-300"
                                ></div>
                            </motion.div>
                        ))}
                    </div>
                </>
            )}

            {/* Event Details View - This would use your existing EventDetailsPage component */}
            {selectedSubEvent && (
                <EventDetailsPage
                    selectedEvent={selectedSubEvent}
                    setSelectedEvent={setSelectedSubEvent}
                    onBack={handleBackToSubEvents}
                />
            )}
        </motion.section>
    );
};

// Placeholder for your EventDetailsPage component
// You would replace this with your actual component
// const EventDetailsPage = ({ selectedEvent, setSelectedEvent, onBack }) => {
//   return (
//     <motion.div
//       className="fixed top-0 z-10 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black bg-opacity-70"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <div className="bg-[#1A1A40] p-8 rounded-lg text-white max-w-lg w-full mx-4 text-center relative border border-[#2D2D62]">
//         <div className="flex items-center mb-6">
//           <motion.button
//             onClick={onBack}
//             className="mr-4 text-[#5D5D9C] hover:text-white absolute left-4 top-4"
//             whileHover={{ scale: 1.1 }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </motion.button>
//         </div>

//         <h2 className="text-3xl font-bold mb-6 orbitron text-[#5D5D9C]">{selectedEvent.name}</h2>

//         <div className="mb-8">
//           <img src={selectedEvent.bg} alt={selectedEvent.name} className="w-full h-48 object-cover rounded-lg mb-6" />
//           <p className="text-lg">{selectedEvent.details}</p>
//         </div>

//         <div className="flex justify-between">
//           <button className="bg-[#3D3D82] hover:bg-[#4D4D92] px-6 py-3 rounded-lg orbitron transition-colors">Register Now</button>
//           <button className="border border-[#3D3D82] text-[#5D5D9C] hover:bg-[#3D3D82] hover:text-white px-6 py-3 rounded-lg orbitron transition-colors" onClick={() => setSelectedEvent(null)}>Close</button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const EventDetailsPage = ({ selectedEvent, setSelectedEvent }) => {
    // Sample event data structure
    // const eventExample = {
    //   name: "Tech Conference 2025",
    //   image: "/api/placeholder/800/400", // Using placeholder image
    //   Day: "March 15, 2025 • 9:00 AM - 5:00 PM",
    //   Timing: "Tech Center, San Francisco, CA",
    //   Location: "From $99",
    //   Registration_Price: "$5,000 Hackathon Registration_Price Pool",
    //   details: "Join us for the biggest tech conference of the year featuring keynotes from industry leaders, hands-on workshops, networking opportunities, and more!"
    // };

    if (!selectedEvent) return null;

    return (
        <motion.div
            className="absolute top-0 z-50 left-0 w-screen h-screen flex items-center justify-center bg-opacity-70 p-4 overflow-y-auto text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div
                className="bg-[#1d1d1d] text-gray-800 rounded-lg max-w-2xl w-full shadow-xl overflow-hidden"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                {/* Event Image */}
                <div className="w-full h-64 bg-gray-200 relative">
                    <img
                        src={selectedEvent.bg}
                        alt={selectedEvent.name}
                        className="w-full h-full object-cover"
                    />
                    <button
                        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
                        onClick={() => setSelectedEvent(null)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Event Content */}
                <div className="p-6 text-white">
                    {/* Title */}
                    <h2 className="text-3xl font-bold mb-6 orbitron">
                        {selectedEvent.name}
                    </h2>

                    {/* Event Info Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start gap-2">
                            <Clock
                                className="text-purple-600 mt-1 flex-shrink-0"
                                size={20}
                            />
                            <div>
                                <h3 className="font-semibold text-sm text-gray-500">
                                    DAY
                                </h3>
                                <p>{selectedEvent.Day || "TBA"}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <MapPin
                                className="text-purple-600 mt-1 flex-shrink-0"
                                size={20}
                            />
                            <div>
                                <h3 className="font-semibold text-sm text-gray-500">
                                    TIMING
                                </h3>
                                <p>{selectedEvent.Timing || "TBA"}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <DollarSign
                                className="text-purple-600 mt-1 flex-shrink-0"
                                size={20}
                            />
                            <div>
                                <h3 className="font-semibold text-sm text-gray-500">
                                    LOCATION
                                </h3>
                                <p>{selectedEvent.Location || "Free"}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <Award
                                className="text-purple-600 mt-1 flex-shrink-0"
                                size={20}
                            />
                            <div>
                                <h3 className="font-semibold text-sm text-gray-500">
                                    REGISTRATION PRICE
                                </h3>
                                <p>{selectedEvent.Registration_Price || "N/A"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="font-bold text-lg text-white mb-2">
                            About This Event
                        </h3>
                        <p className="text-white">{selectedEvent.details}</p>
                    </div>

                    {/* Register Button */}
                    <div className="mt-6">
                        <a href={selectedEvent.registrationLink} target="_blank" >
                            <button className="bg-purple-600 orbitron hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg w-full font-semibold">
                                Register Now
                            </button>
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default EventsSection;
