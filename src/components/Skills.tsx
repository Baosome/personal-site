import React, { useState, useRef, useEffect } from 'react';
import { SKILLS } from '../constants';

type Category = 'Software' | 'Cybersecurity';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('Software');
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

  const filteredSkills = SKILLS.filter(skill => skill.category === activeTab);

  const TabButton: React.FC<{ category: Category; label: string }> = ({ category, label }) => (
    <button
      onClick={() => setActiveTab(category)}
      className={`px-6 py-2 text-sm md:text-base font-semibold transition-colors duration-300 focus:outline-none ${
        activeTab === category
          ? 'text-emerald-400 border-b-2 border-emerald-400'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className={`container mx-auto px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Proficiencies & Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center border-b border-gray-700 mb-12">
            <TabButton category="Software" label="Software Engineering" />
            <TabButton category="Cybersecurity" label="Cybersecurity" />
          </div>
          <div key={activeTab} className="flex flex-wrap justify-center items-start gap-4 md:gap-6 md:min-h-[320px]">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center text-center w-28 h-28 md:w-32 md:h-32 bg-gray-800 rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-emerald-500/20 border border-gray-700 hover:border-emerald-500 animate-pop-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="h-10 w-10 md:h-12 md:w-12 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
                  {skill.icon}
                </div>
                <p className="mt-3 text-xs md:text-sm font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
