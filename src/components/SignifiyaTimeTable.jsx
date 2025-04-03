import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const SignifiyaTimeTable = () => {
  const day1Events = [
    { eventName: "Bridge Building", venue: "5008", timing: "01:00 PM - 4:00 PM" },
    { eventName: "Tower Making" , venue: "6002", timing: "03:00 PM - 6:00 PM"},
    { eventName: "Coding Premier League" , venue: "2103 & 2104", timing: "01:00 PM - 06:00 PM"},
    { eventName: "Circuitronix (Electrifying Circuits)" , venue: "5204", timing: "01:00 PM - 08:00 PM"},
    { eventName: "Robo Terrain" , venue: "3103", timing: "01:00 PM - 06:00 PM"},
    { eventName: "Re-Fab" , venue: "4001", timing: "01:00 PM - 06:00 PM"},
    { eventName: "Tug Of War", venue: "CCD Ground", timing: "03:00 PM - 06:00 PM" },
    { eventName: "Valorant" , venue: "Convention Hall", timing: "10:00 AM - 07:00 PM"}
  ];
  
  const day2Events = [
    { eventName: "Coding Premier League", venue: "2103 & 2104", timing: "10:00 AM - 04:00 PM" },
    { eventName: "Circuitronix (Electrifying Circuits)", venue: "5204", timing: "10:00 AM - 04:00 PM" },
    { eventName: "Path Follower", venue: "3102", timing: "10:00 AM - 03:00 PM" },
    { eventName: "Lathe War", venue: "Central Workshop", timing: "01:00 PM - 06:00 PM" },
    { eventName: "Treasure Hunt", venue: "Entire College", timing: "01:00 PM - 04:00 PM" },
    { eventName: "BGMI", venue: "Convention Hall", timing: "10:00 AM - 03:00 PM" },
    { eventName: "Science Olympiad", venue: "CSE Lab 4001", timing: "11:00 AM - 03:00 PM" },
    { eventName: "PES", venue: "CSE Lab 3 & 4", timing: "10:00 AM - 12:00 PM" },
    
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
              <th className="px-4 py-3 text-left text-base font-medium text-white">Venue</th>
              <th className="px-4 py-3 text-left text-base font-medium text-white">Timing</th>
              
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} hover:bg-white/10 transition-colors duration-200`}>
                <td className="px-4 py-3 font-light text-white text-sm">
                  {event.eventName}
                </td>
                <td className="px-4 py-3 font-light text-white text-sm">{event.venue}</td>
                <td className="px-4 py-3 font-light text-white text-sm">{event.timing}</td>
               
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