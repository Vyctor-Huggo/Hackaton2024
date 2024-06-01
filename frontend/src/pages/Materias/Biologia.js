import React from 'react';
import PageLayout from '../../components/PageLayout';
import Section from '../../components/Section';
import LessonCard from '../../components/LessonCard';
import lessonsData from './lessonDatas'
// eslint-disable-next-line no-unused-vars
import biologiaWallpaper from '../../imagens/biologiaWalpaper.png'

const BiologiaPage = () => {
  const { lessons } = lessonsData.biologia;
  
  return (
    <PageLayout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', margin: '2% 0' }}>
          
          <div
            style={{
              marginLeft: '25%',
              width: '85vh',
              height: '45vh',
              backgroundColor: 'rgba(164, 203, 249, 1)',
              boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.1)',
              borderRadius: '5vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={biologiaWallpaper} alt="Biologia Wallpaper" style={{ width: '70vh', height: '45vh' }} />
          </div>
        </div>
        <Section title="Introdução a Biologia">
          <div className="row row-cols-1 row-cols-md-3 g-4" style={{ justifyContent: 'center' }}>
            {lessons.map((lesson, index) => (
              <LessonCard key={index} image={lesson.image} title={lesson.title} text={lesson.text} />
            ))}
          </div>
        </Section>
      </div>
    </PageLayout>
  );
};

export default BiologiaPage;