import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SignifiyaFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Signifiya 2025?",
      answer: "Signifiya 2025 is the third edition of the Techfest organized by the School of Engineering & Technology (SOET), Adamas University, providing a platform for students to showcase their technical, creative, and competitive skills."
    },
    {
      question: "When and where will Signifiya 2025 be held?",
      answer: "Date: March 2025\nVenue: Adamas University, Kolkata"
    },
    {
      question: "Who can participate in Signifiya?",
      answer: "Students from Adamas university and other universities across India can participate. Some events may have specific eligibility criteria."
    },
    {
      question: "How do I register for Signifiya 2025?",
      answer: "Registration details will be available soon. You can register online through the official website or via on-campus registration desks."
    },
    {
      question: "Is there any registration fee?",
      answer: "Yes, certain events may have a nominal participation fee. The exact fee structure will be shared during the registration process."
    },
    {
      question: "What types of events will be held at Signifiya 2025?",
      answer: "Signifiya will feature technical, gaming, and non-technical events, including:\n\n• Robotics (Path Follower, Robo Terrain)\n• Gaming (BGMI, Valorant, PES)\n• Coding & Science (Coding Premier League, Science Olympiad)\n• Engineering Challenges (Bridge Making, Lathe War, Waste to Wealth, Electrifying Circuits)\n• Fun & Non-Tech (Treasure Hunt, Tug of War)"
    },
    {
      question: "Can I participate in multiple events?",
      answer: "Yes! Participants are allowed to register for multiple events, provided there are no time conflicts."
    },
    {
      question: "Will there be prizes for the winners?",
      answer: "Absolutely! Winners of each event will receive cash prizes, certificates, and trophies."
    },
    {
      question: "Are team events allowed?",
      answer: "Yes, some events require team participation, while others are individual competitions. Team sizes vary based on event rules."
    },
    {
      question: "How can I find event rules and regulations?",
      answer: "Detailed event rules, judging criteria, and participation guidelines will be available on the official website and during registration."
    },
    {
      question: "What documents do I need to participate?",
      answer: "Participants may need to show a valid student ID card and their registration confirmation before entering competitions."
    },
    {
      question: "Will I receive a participation certificate?",
      answer: "Yes! Every registered participant will receive a certificate of participation, and winners will receive special awards."
    },
    {
      question: "What happens if I register but cannot attend the event?",
      answer: "Refund policies (if applicable) will be mentioned during the registration process. No-shows may not be eligible for refunds."
    },
    {
      question: "Will WiFi and other tech facilities be provided during events?",
      answer: "Yes, participants will have access to WiFi, labs, and technical resources for applicable competitions."
    },
    {
      question: "Who can I contact for queries regarding an event?",
      answer: "Event coordinators and faculty leads will be assigned for each competition. Contact details will be available on the official website and brochures."
    },
    {
      question: "How do I stay updated on Signifiya 2025?",
      answer: "Follow us on social media, the official website, and university notice boards for updates, announcements, and deadlines."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" min-h-screen py-24 relative z-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-white mb-2 orbitron">Signifiya 2025</h1>
          <h2 className="text-2xl font-normal text-white/50 orbitron">Frequently Asked Questions</h2>
        </div>
        
        <div className=" rounded-lg shadow-xl overflow-hidden">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b py-5 border-white/20 last:border-b-0">
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl  font-normal text-white">{faq.question}</span>
                <span className="text-white">
                  {openIndex === index ? 
                    <ChevronUp className="h-5 w-5" /> : 
                    <ChevronDown className="h-5 w-5" />
                  }
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2">
                  <p className=" whitespace-pre-line text-white/60">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* <div className="mt-8 text-center">
          <p className="text-sm text-blue-300">© 2025 School of Engineering & Technology, Adamas University</p>
        </div> */}
      </div>
    </div>
  );
};

export default SignifiyaFAQ;