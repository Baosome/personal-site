import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1));
      setIsFading(false);
    }, 300);
  };

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1));
      setIsFading(false);
    }, 300);
  };

  const currentProject = PROJECTS[currentIndex];

  return (
    <>
      <section id="projects" ref={sectionRef} className="py-20 bg-gray-800/50">
        <div className={`container mx-auto px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 flex flex-col min-h-[580px] md:min-h-[550px] transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-emerald-500/20">
            <div className={`p-8 transition-opacity duration-300 ease-in-out flex flex-col min-h-[500px] md:min-h-[480px] ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-emerald-400">{currentProject.title}</h3>
                <p className="text-gray-400 text-right shrink-0 ml-4">{currentProject.duration}</p>
              </div>
              
              <div className="flex-grow">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {currentProject.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-3 text-white">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <span key={tech} className="bg-emerald-900/50 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                {currentProject.link && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-emerald-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-600 transition-colors shadow-md"
                  >
                    View on GitHub
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <div className="bg-gray-900/50 px-8 py-4 flex justify-between items-center">
              <button onClick={handlePrev} className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
                &larr; Prev
              </button>
              <div className="text-sm text-gray-400">
                {currentIndex + 1} / {PROJECTS.length}
              </div>
              <button onClick={handleNext} className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors">
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
