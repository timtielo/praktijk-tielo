import React, { useState, useEffect, useRef } from 'react';
import { Users, PawPrint } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';

interface PeopleCounterProps {
  peopleCount: number;
  animalsCount: number;
  className?: string;
}

export function PeopleCounter({ peopleCount, animalsCount, className }: PeopleCounterProps) {
  const { t } = useTranslation();
  const [displayedPeopleCount, setDisplayedPeopleCount] = useState(0);
  const [displayedAnimalsCount, setDisplayedAnimalsCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          // Animate people count
          let peopleStartValue = 0;
          const peopleAnimationDuration = 4000; // 4 seconds
          const peopleStepTime = Math.abs(Math.floor(peopleAnimationDuration / peopleCount));
          
          const peopleTimer = setInterval(() => {
            peopleStartValue += 1;
            setDisplayedPeopleCount(peopleStartValue);
            
            if (peopleStartValue === peopleCount) {
              clearInterval(peopleTimer);
            }
          }, peopleStepTime);
          
          // Animate animals count with a slight delay
          setTimeout(() => {
            let animalsStartValue = 0;
            const animalsAnimationDuration = 1500; // 1.5 seconds
            const animalsStepTime = Math.abs(Math.floor(animalsAnimationDuration / animalsCount));
            
            const animalsTimer = setInterval(() => {
              animalsStartValue += 1;
              setDisplayedAnimalsCount(animalsStartValue);
              
              if (animalsStartValue === animalsCount) {
                clearInterval(animalsTimer);
              }
            }, animalsStepTime);
          }, 500); // Start after 500ms
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [peopleCount, animalsCount]);
  
  return (
    <div 
      ref={counterRef}
      className={cn(
        "bg-white rounded-lg px-4 py-3 shadow-sm flex items-center justify-between max-w-xs",
        className
      )}
    >
      {/* People counter */}
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-full">
          <Users className="w-5 h-5 text-white" />
        </div>
        <div>
          <span className="block text-2xl font-bold text-gray-800">{displayedPeopleCount}</span>
          <span className="block text-xs text-gray-600">{t('statistics.peopleHelped')}</span>
        </div>
      </div>
      
      {/* Divider */}
      <div className="h-10 w-px bg-gray-200 mx-2"></div>
      
      {/* Animal counter */}
      <div className="flex items-center gap-3">
        <div className="bg-blue-400 p-2 rounded-full">
          <PawPrint className="w-5 h-5 text-white" />
        </div>
        <div>
          <span className="block text-2xl font-bold text-gray-800">{displayedAnimalsCount}</span>
          <span className="block text-xs text-gray-600">{t('statistics.animalsHelped')}</span>
        </div>
      </div>
    </div>
  );
}