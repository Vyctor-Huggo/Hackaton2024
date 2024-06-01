/* eslint-disable no-unused-vars */
import React from 'react';
import VideoLesson from './videoLesson';
import LessonTitle from './LessonTitle';
import VisualReinforcement from './VisualReinforcement';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import './style.css'



const VideoLessonPage = () => {
  const videoSrc = "https://www.youtube.com/watch?v=NbFFMlXlm3o"; // Exemplo de vídeo do YouTube
  const title = "Matemática - Funções Quadráticas";
  const images = [
    { src: 'https://via.placeholder.com/150', alt: 'Gráfico de função quadrática' },
    { src: 'https://via.placeholder.com/150', alt: 'Equação quadrática' },
    { src: 'https://via.placeholder.com/150', alt: 'Aplicações de funções quadráticas' }
  ];

  return (
    <><Header /><div className="video-lesson-page container mt-3">

          <LessonTitle title={title} />
          <VideoLesson videoSrc={videoSrc} />
          <VisualReinforcement images={images} />
      </div>
      
      </>
  );
};

export default VideoLessonPage;
