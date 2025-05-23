import React from 'react';

const SignifiyaTeam = () => {
  const facultyMembers = [
    {
      name: "Ms. Soodipa Chakraborty",
      designation: "Assistant Professor, ME, SOET",
      img: "/pic/maam.jpeg"
    },
    {
      name: "Mr. Nisarga Chand",
      designation: "Assistant Professor, ECE, SOET",
      img: "/pic/sir.jpeg"
    }
  ];

  const coreTeamMembers = [
    {
      name: "Tapu Shekhar Saha",
      designation: "4th Year B.Tech CSE, SOET",
      img: "/pic/topu.jpeg"
    },
    {
      name: "Abhishek Bhowmik",
      designation: "4th Year B.Tech CSE, SOET",
      img: "/pic/avi .jpeg"
    },
    {
      name: "Debjit Debnath",
      designation: "4th Year B.Tech ECE, SOET",
      img: "/pic/dejitr.jpg"
    },
    {
      name: "Sankhadeep Mandal",
      designation: "4th Year B.Tech CE, SOET",
      img: "/pic/sankhadip.jpeg"
    },
    {
      name: "Hrishav Dey",
      designation: "3rd Year B.Tech CSE, SOET",
      img: "/pic/hri.jpeg"
    },
    {
      name: "Sudipto Barman",
      designation: "3rd Year B.Tech ME, SOET",
      img: "/pic/sudipto.jpeg"
    }
];


  const organizingTeamMembers = [
    { name: "Ahonaa Mukherjee", designation: "4th Year B.Tech BME, SOET", img: "/pic/ahonaa.jpg" },
    { name: "Adrija Sahu", designation: "4th Year B.Tech CSE, SOET", img: "/pic/adrija.jpeg" },
    { name: "Milan Maji", designation: "3rd Year B.Tech CSE, SOET", img: "/pic/milan.jpg" },
    { name: "Pradipti Chakraborty", designation: "3rd Year B.Tech CSE, SOET", img: "/pic/jiya .jpg" },
    { name: "Dipshikha Mahato", designation: "2nd Year B.Tech BME, SOET", img: "/pic/dipshikha.jpeg" },
    { name: "Shuvodip Dutta Banik", designation: "2nd Year B.Tech ECE, SOET", img: "/pic/subhodip.jpg" },
    { name: "Sommath Singha Roy", designation: "2nd Year B.Tech ECE, SOET", img: "/pic/somnath.jpg" },
    { name: "Sourish Samanta", designation: "2nd Year B.Tech CSE, SOET", img: "/pic/sourish.jpeg" },
    { name: "Arijit De", designation: "2nd Year B.Tech CSE, SOET", img: "/pic/arijit.jpeg" },
    { name: "Digant Mishra", designation: "2nd Year B.Tech CSE, SOET", img: "/pic/digant.jpeg" },
    { name: "Manobendro Kr. Mondal", designation: "2nd Year BCA, SOET", img: "/pic/manob.jpeg" },
    { name: "Aninda Debta", designation: "2nd Year B.Tech CSE, SOET", img: "/pic/aninda.jpeg" },
    { name: "Samriddhi Sinha", designation: "2nd Year B.Tech CSE, SOET", img: "/pic/samrridhi.jpeg" },
    { name: "Arnab Mondal", designation: "2nd Year B.Tech CSE, SOET", img: "/pic/arnab.jpeg" },
    { name: "Garima Roy", designation: "2nd Year B.Tech CSE, SOET", img: "/pic/garima.jpeg" },
    { name: "Snehasish Mondal", designation: "2nd Year B.Tech CSE, SOET", img: "/pic/snehashish.jpeg" },
    { name: "Sneha Bhowmick", designation: "2nd Year BCA, SOET", img: "/pic/sneha.jpeg" },
    { name: "Prithwiraj Mazumdar", designation: "2nd Year BCA, SOET", img: "/pic/prithwi.jpeg" },
    { name: "Pritam Mondal", designation: "2nd Year BCA, SOET", img: "/pic/pritam.jpeg" },
    { name: "Leeza Bhowal", designation: "2nd Year B.Tech EE, SOET", img: "/pic/leeza.jpg" },
    { name: "Suvasree Sarkar", designation: "2nd Year B.Tech CSE, SOET", img: "/pic/suvasree.jpg" }
];


  return (
    <div id='committee' className="min-h-screen py-24 relative z-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-white mb-2 orbitron">Our Committee</h1>
          {/* <h2 className="text-2xl font-normal text-white/50 orbitron">Our Team</h2> */}
        </div>
        
        {/* Faculty Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-white/80 mb-10 text-center orbitron">Faculty</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {facultyMembers.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 w-full max-w-md flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-white/10 border border-white/10">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-white/30"
                />
                <h4 className="text-xl font-medium text-white mb-1">{member.name}</h4>
                <p className="text-white/60">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Core Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-white/80 mb-10 text-center orbitron">Core Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeamMembers.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-white/10 border border-white/10">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-white/30"
                />
                <h4 className="text-lg font-medium text-white mb-1 text-center">{member.name}</h4>
                <p className="text-sm text-white/60 text-center">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Organizing Team Section - Circle profiles only, no boxes */}
        <div>
          <h3 className="text-2xl font-medium text-white/80 mb-10 text-center orbitron">Organizing Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
            {organizingTeamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center transform transition-all duration-300 hover:scale-110">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-white/30"
                />
                <h4 className="text-md font-medium text-white mb-1 text-center">{member.name}</h4>
                <p className="text-xs text-white/60 text-center">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-white/40">Together, we make Signifiya 2025 possible!</p>
        </div>
      </div>
    </div>
  );
};

export default SignifiyaTeam;