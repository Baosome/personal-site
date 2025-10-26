import React, { useRef, useState, useEffect } from 'react';
import { CERTIFICATIONS } from '../constants';
import { CertificationStatus } from '../types';
import type { Certification as CertificationType } from '../types';

const getStatusClasses = (status: CertificationStatus) => {
    switch(status) {
        case CertificationStatus.InProgress:
            return {
                bg: 'bg-yellow-500',
                text: 'text-yellow-100',
                border: 'border-yellow-500',
                pillBg: 'bg-yellow-900/50',
                pillText: 'text-yellow-300'
            };
        case CertificationStatus.Planned:
            return {
                bg: 'bg-blue-500',
                text: 'text-blue-100',
                border: 'border-blue-500',
                pillBg: 'bg-blue-900/50',
                pillText: 'text-blue-300'
            };
        case CertificationStatus.Completed:
             return {
                bg: 'bg-green-500',
                text: 'text-green-100',
                border: 'border-green-500',
                pillBg: 'bg-green-900/50',
                pillText: 'text-green-300'
            };
        default:
            return {
                bg: 'bg-gray-500',
                text: 'text-gray-100',
                border: 'border-gray-500',
                pillBg: 'bg-gray-900/50',
                pillText: 'text-gray-300'
            };
    }
}

const CertificationCard: React.FC<{ cert: CertificationType; isVisible: boolean; index: number }> = ({ cert, isVisible, index }) => {
    const classes = getStatusClasses(cert.status);

    return (
        <div 
            className={`bg-gray-800 p-6 rounded-lg border-l-4 ${classes.border} shadow-lg flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-white">{cert.name} ({cert.acronym})</h3>
                    <p className="text-sm text-gray-400 mt-1">{cert.timeline}</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${classes.pillBg} ${classes.pillText}`}>
                    {cert.status}
                </span>
            </div>
            <p className="mt-4 text-gray-300 flex-grow">
                {cert.description}
            </p>
            <div className="mt-6">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-400">Progress</span>
                    <span className={`text-sm font-bold ${classes.pillText}`}>{cert.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className={`${classes.bg} h-2.5 rounded-full transition-all duration-500 ease-out`} style={{ width: `${cert.progress}%` }}></div>
                </div>
            </div>
        </div>
    )
};


const Certifications: React.FC = () => {
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

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Certification Journey</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
                <CertificationCard key={cert.acronym} cert={cert} isVisible={isVisible} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
