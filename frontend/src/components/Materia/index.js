import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './materia.css'

// Estilo para o card de matéria
const Card = styled.div`
  width: calc(25% - 30px); /* Calcula a largura de cada card com o espaçamento horizontal */
  margin-right: 15px; /* Adiciona espaçamento à direita */
  margin-bottom: 20px;
  float: left; /* Alinha os cards lado a lado */
`;

// Estilo para a imagem
const CardImage = styled.img`
  width: 100%;
  height: 250px; /* Altura fixa para a imagem */
  object-fit: cover; /* Redimensiona a imagem para cobrir todo o espaço disponível */
`;

// Estilo para o conteúdo do card
const CardBody = styled.div`
  padding: 1rem;
`;

const Materia = ({ imagem, titulo, descricao }) => {
  return (
    <Card className="card">
      <CardImage className="card-img-top" src={imagem} alt={`Imagem de ${titulo}`} />
      <CardBody className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descricao}</p>
        <Link to="/basecomum/biologia" className="btn btn-primary">Entrar</Link>
      </CardBody>
    </Card>
  );
}

export default Materia;
