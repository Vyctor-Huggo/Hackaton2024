import React from 'react';
import styled from 'styled-components';
import malala from '../../imagens/malala.png'
import monica from '../../imagens/monica.png'
import monica2 from '../../imagens/monica2.png'
import metafisica from '../../imagens/metafisica.png'
import nietzsche from '../../imagens/nietzsche.png'
import hobbit from '../../imagens/hobbit.png'
import bauman from '../../imagens/bauman.png'
import teologica from '../../imagens/teologica.png'

const ReadingCard = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ReadingTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333333;
`;

const ReadingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center; /* Centraliza os itens horizontalmente */
`;

const ReadingImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  max-width: 150px; /* Largura máxima */
`;

const RecommendedReadings = () => {
  // Exemplo de leituras recomendadas
  const readings = [
    malala,
    monica,
    monica2,
    metafisica,
    nietzsche,
    hobbit,
    bauman,
    teologica
  ];

  return (
    <ReadingCard>
      <ReadingTitle>Leituras Recomendadas</ReadingTitle>
      <ReadingGrid>
        {readings.map((image, index) => (
          <ReadingImage key={index} src={image} alt={`Leitura Recomendada ${index + 1}`} className="img-fluid" />
        ))}
      </ReadingGrid>
    </ReadingCard>
  );
};

export default RecommendedReadings;
