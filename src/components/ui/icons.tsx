import React from 'react';

export const Spine = ({ className = "w-6 h-6", ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...props}
    >
      <path d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Z" />
      <path d="M12 18a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1Z" />
      <path d="M12 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      <path d="M12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
    </svg>
  );
};