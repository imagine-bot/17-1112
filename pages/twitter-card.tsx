// ./pages/twitter-card.tsx
import React from 'react';
import TwitterCard from '../components/TwitterCard';
import Link from 'next/link';

const TwitterCardPage: React.FC = () => {
  return (
    <div className="p-4">
      <TwitterCard
        title="John Doe"
        description="This is a sample twitter card."
        imageUrl="https://example.com/image.jpg"
        twitterHandle="johndoe"
      />
      <Link href="/">
        <a className="text-blue-500 hover:underline">Back to home</a>
      </Link>
    </div>
  );
};

export default TwitterCardPage;