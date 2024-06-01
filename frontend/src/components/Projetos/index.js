import React from 'react';
import styled from 'styled-components';
import projeto1 from '../../imagens/image 45.png';
import projeto2 from '../../imagens/image 46.png';

const ProjectCard = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; /* Centralizando horizontalmente */
  margin: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h5`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px; /* Definindo uma altura fixa */
  object-fit: cover; /* Para garantir que a imagem preencha o espaço */
  border-radius: 0.25rem;
`;

const AvailableProjects = () => {
  const projects = [
    { name: 'Projeto 1', image: projeto1, link: '#' },
    { name: 'Projeto 2', image: projeto2, link: '#' },
  ];

  return (
    <div className="row">
      {projects.map((project, index) => (
        <div key={index} className="col-md-6">
          <ProjectCard>
            <ProjectImage src={project.image} alt={project.name} />
            <div className="card-body">
              <ProjectTitle>{project.name}</ProjectTitle>
              <a href={project.link} className="btn btn-primary">Veja Mais</a>
            </div>
          </ProjectCard>
        </div>
      ))}
    </div>
  );
};

export default AvailableProjects;
