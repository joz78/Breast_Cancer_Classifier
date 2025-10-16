import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className='bg-white rounded-md border-none text-center m-6'>
      <h3 className='!text-[1.2rem] p-4 font-bold text-pink-500'>{title}</h3>
      <p className='p-4'>{description}</p>
    </div>
  );
};

export default InfoCard;