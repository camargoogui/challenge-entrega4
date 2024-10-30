import React from 'react';
import Spinner from '@/components/Spinner/Spinner';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="flex flex-col items-center">
        <Spinner />
        <p className="text-lg font-semibold mt-4">Carregando...</p>
      </div>
    </div>
  );
};

export default Loading;
