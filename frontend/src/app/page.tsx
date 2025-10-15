import React from 'react';
import InfoCard from '../../components/InfoCard';

const Home: React.FC = () =>  {
  const infocards = [
    {
      title: "Most Common Cancer in Women",
      description: "Breast cancer is the most common cancer among women worldwide, affecting millions each year."
    },
    {
      title: "Early Detection Saves Lives",
      description: "Regular screenings and self-examinations can lead to early detection, significantly improving treatment outcomes."
    },
    {
      title: "Men Can Get Breast Cancer Too",
      description: "Although rare, men can also develop breast cancer, making up about 1% of all breast cancer cases."
    },
    {
      title: "Not Always Genetic",
      description: "Most breast cancer cases are not inherited — only about 5–10% are linked to known genetic mutations like BRCA1 or BRCA2."
    }
  ];

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="container">
        <h1 className='title text-[2rem] mb-8'>Breast Cancer Classifier</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
          {infocards.map((card, index) => (
            <InfoCard key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div>
    
  );
}


export default Home;