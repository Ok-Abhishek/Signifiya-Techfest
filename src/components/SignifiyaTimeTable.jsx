import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const SignifiyaTimeTable = () => {
  const day1Events = [
    { eventName: "Bridge Building" },
    { eventName: "Tower Making" },
    { eventName: "Coding Premier League"  },
    { eventName: "Circuitronix (Electrifying Circuits)" },
    { eventName: "Robo Terrain" },
    { eventName: "Re-Fab" },
    { eventName: "Tug Of War" },
    { eventName: "Valorant" }
  ];
  
  const day2Events = [
    { eventName: "Coding Premier League", venue: "Main Auditorium", timing: "09:30 AM - 10:00 AM" },
    { eventName: "Circuitronix (Electrifying Circuits)", venue: "Digital Arena, IT Block", timing: "10:30 AM - 01:00 PM" },
    { eventName: "Path Follower", venue: "Electrical Lab, Block C", timing: "10:30 AM - 12:30 PM" },
    { eventName: "Lathe War", venue: "Science Block Auditorium", timing: "11:00 AM - 01:00 PM" },
    { eventName: "Treasure Hunt", venue: "Main Cafeteria", timing: "01:00 PM - 02:00 PM" },
    { eventName: "BGMI", venue: "Design Studio", timing: "02:30 PM - 04:30 PM" },
    { eventName: "Science Olympiad", venue: "University Campus", timing: "02:30 PM - 05:00 PM" },
    { eventName: "PES", venue: "Sports Ground", timing: "04:30 PM - 05:30 PM" },
    
  ];

  // Function to render a single day's schedule
  const renderDaySchedule = (events, dayTitle) => (
    <div className="flex-1 min-w-full md:min-w-0">
      <h3 className="text-xl font-medium text-white mb-4 text-center orbitron">{dayTitle}</h3>
      <div className="bg-white/5 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/10">
        <table className="w-full">
          <thead>
            <tr className="bg-white/10 border-b border-white/20">
              <th className="px-4 py-3 text-left text-base font-medium text-white">Event Names</th>
              
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} hover:bg-white/10 transition-colors duration-200`}>
                <td className="px-4 py-3 font-light text-white text-sm">
                  {event.eventName}
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-24 relative z-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-white mb-2 orbitron">Signifiya 2025</h1>
          <h2 className="text-2xl font-normal text-white/50 orbitron">Event Schedule</h2>
        </div>
        
        {/* Two-column layout for schedules */}
        <div className="flex flex-col md:flex-row gap-8">
          {renderDaySchedule(day1Events, "Day 1")}
          {renderDaySchedule(day2Events, "Day 2")}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-white/40">Schedule may be subject to minor changes. Please check the event updates regularly.</p>
        </div>
      </div>
    </div>
  );
};

export default SignifiyaTimeTable;