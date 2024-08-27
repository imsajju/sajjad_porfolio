import React from 'react';

const Education = () => {
  return (
    <div className="section" id="education">
      <div className="container mx-auto py-12 px-4 md:px-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-200">My Education</h1>
          <div className="h-12 sm:h-16 md:h-20"></div>
        </div>
        <div className="flex justify-center">
          <ul className="timeline w-full">
            <li className="timeline-event" data-aos="fade-up">
              <span className="timeline-event-icon bg-blue-600 transform rotate-45"></span>
              <div className="timeline-event-copy ml-4 sm:ml-8 md:ml-12">
                <p className="timeline-event-thumbnail bg-black font-bold text-white rounded-full py-1 px-4 inline-block mb-3">
                  Aug 2022 - July 2025
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-sans mb-2 text-slate-200">Gl Bajaj Institute of Management and Technology</h2>
                <p className="text-gray-300">Greater Noida, Uttar Pradesh</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="h-[3px] w-10 bg-[#4872ce] mt-4"></div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-sans mb-2 text-[#acc4f8]">B.Tech in Computer Science</h4>
                </div>
              </div>
            </li>
            <li className="timeline-event" data-aos="fade-up" data-aos-delay=".2">
              <span className="timeline-event-icon bg-blue-600 transform rotate-45"></span>
              <div className="timeline-event-copy ml-4 sm:ml-8 md:ml-12">
                <p className="timeline-event-thumbnail bg-black text-white rounded-full py-1 px-4 inline-block mb-3">
                  Mar 2019 - July 2022
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-sans mb-2 text-slate-200">Amity University</h3>
                <p className="text-gray-300"> Noida, Uttar Pradesh</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="h-[3px] w-10 bg-[#2f55a6] mt-4"></div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-sans mb-2 text-[#acc4f8]">Diploma In Computer Engineering</h4>
                </div>
                <p className="text-gray-300">
                  Percentage: 73%
                </p>
              </div>
            </li>
            <li className="timeline-event" data-aos="fade-up" data-aos-delay=".2">
              <span className="timeline-event-icon bg-blue-600 transform rotate-45"></span>
              <div className="timeline-event-copy ml-4 sm:ml-8 md:ml-12">
                <p className="timeline-event-thumbnail bg-black text-white rounded-full py-1 px-4 inline-block mb-3">
                  April 2019 
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-sans mb-2 text-slate-200">Woodbine Modern School</h3>
                <p className="text-gray-300">Darbhanga, Bihar</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="h-[3px] w-10 bg-[#99b3ec] mt-4"></div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-sans mb-2 text-[#acc4f8]">Matriculation</h4>
                </div>
                <p className="text-gray-300">
                  Percentage: 66%
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
