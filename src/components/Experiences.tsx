import React, { useRef, useState, useEffect } from 'react';
import { EXPERIENCES } from '../constants';
import type { Experience as ExperienceType } from '../types';

const ExperienceItem: React.FC<{ experience: ExperienceType; index: number }> = ({ experience, index }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the item is visible
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    const isRightSide = index % 2 === 0;

    return (
        <div ref={itemRef} className={`mb-8 flex justify-between ${isRightSide ? 'flex-row-reverse' : ''} items-center w-full`}>
            {/* Date / Spacer */}
            <div className={`order-1 w-5/12 px-2 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'} ${isRightSide ? 'text-left' : 'text-right'}`}>
                 <p className="font-bold text-lg text-gray-400">{experience.duration}</p>
            </div>
            
            {/* Timeline Circle */}
            <div className="z-20 flex items-center order-1 bg-emerald-500 shadow-xl w-12 h-12 rounded-full transform transition-transform duration-500 ease-in-out" style={{ transitionDelay: '200ms', transform: isVisible ? 'scale(1)' : 'scale(0)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Card */}
            <div className={`order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-gray-700 transform transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-emerald-500/20 ${isVisible ? 'opacity-100 translate-x-0' : (isRightSide ? 'translate-x-10 opacity-0' : '-translate-x-10 opacity-0')}`}>
                <h3 className="mb-2 font-bold text-emerald-400 text-xl">{experience.role}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 mb-3">{experience.company} | {experience.location}</p>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                  {experience.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                {experience.technologies && experience.technologies.length > 0 && (
                    <div className="mt-4">
                        <h4 className="font-semibold text-sm mb-2 text-gray-200">Skills & Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                                <span key={tech} className="bg-emerald-900/50 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Work Experience</h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
          {EXPERIENCES.map((exp, index) => (
             <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
