import React from 'react';
import styled from 'styled-components';

import professorImage1 from '../../imagens/professor1.png';
import professorImage2 from '../../imagens/professor2.png';
import professorImage3 from '../../imagens/professor3.png';

const ProfessorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease; /* Efeito de transição */
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2); /* Efeito de hover */
  }
`;

const ProfessorTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333333;
`;

const ProfessorRow = styled.div`
  display: flex;
  justify-content: space-between; /* Espaçamento entre os cards */
  flex-wrap: wrap; /* Permite que os cards quebrem para a próxima linha */
`;

const ProfessorContent = styled.div`
  text-align: center;
`;

const ProfessorImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #ddd; /* Adicionando uma borda sutil */
  object-fit: cover;
  margin-bottom: 10px;
  transition: transform 0.3s ease; /* Efeito de transição */
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactProfessor = () => {
  const professors = [
    { name: 'Prof. João', subject: 'Matemática', email: 'joao@escola.com', image: professorImage1 },
    { name: 'Prof. Maria', subject: 'Ciências', email: 'maria@escola.com', image: professorImage2 },
    { name: 'Prof. Ana', subject: 'Português', email: 'ana@escola.com', image: professorImage3 },
  ];

  return (
    <ProfessorCard>
      <ProfessorTitle>Fale com algum professor</ProfessorTitle>
      <ProfessorRow>
        {professors.map((professor, index) => (
          <ProfessorCard key={index}>
            <ProfessorContent>
              <ProfessorImage src={professor.image} alt={`Foto do professor ${professor.name}`} />
              <p>Nome: {professor.name}</p>
              <p>Disciplina: {professor.subject}</p>
              <p>Email: {professor.email}</p>
              <ContactButton>Contato</ContactButton>
            </ProfessorContent>
          </ProfessorCard>
        ))}
      </ProfessorRow>
    </ProfessorCard>
  );
};

export default ContactProfessor;
