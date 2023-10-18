// ./components/TwitterCard.tsx
import React from 'react';

interface TwitterCardProps {
  title: string;
  description: string;
  imageUrl: string;
  twitterHandle: string;
}

const TwitterCard: React.FC<TwitterCardProps> = ({ title, description, imageUrl, twitterHandle }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <div className="flex items-center space-x-4">
        <img src={imageUrl} alt={title} className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <a href={`https://twitter.com/${twitterHandle}`} className="text-blue-500 hover:underline">View on Twitter</a>
    </div>
  );
};

export default TwitterCard;