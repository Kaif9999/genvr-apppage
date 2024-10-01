'use client';

import React from 'react';

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, altText, title, description, link }) => {
  return (
    <div
      className="card bg-light-blue bg-opacity-30 p-4 rounded backdrop-filter backdrop-blur-sm cursor-pointer"
      onClick={() => window.location.href = link}
    >
      <img src={imageSrc} alt={altText} className="rounded mb-4" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
