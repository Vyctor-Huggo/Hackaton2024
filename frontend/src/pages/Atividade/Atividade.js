import React from 'react';
import './atividade.css'; // Importar o CSS separado
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import matematicaAtividade from '../../imagens/matematicaAtividade.png'
const Atividade = () => {
  const atividades = [
    { id: 1, title: 'Geometria', professor: 'Prof. João', image: 'https://via.placeholder.com/50' },
    { id: 2, title: 'Álgebra', professor: 'Prof. Maria', image: 'https://via.placeholder.com/50' },
    { id: 3, title: 'Trigonometria', professor: 'Prof. Ana', image: 'https://via.placeholder.com/50' },
  ];

  const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  return (
    <>
      <Header />
      <div className="container">

        <div className="atividades-section">
          <h2 style={{ color: "#4F8FBA"}}>Atividades Disponíveis</h2>
          {/* Adicionando a imagem após o título com classe Bootstrap */}
          <img src={matematicaAtividade} alt="Matemática" className="img-fluid mx-auto d-block mb-5" style={{height: '150px'}}/>
          {atividades.map((atividade) => (
            <div key={atividade.id} className="atividade-card">
              <img src={atividade.image} alt={atividade.title} className="atividade-image" />
              <div className="atividade-info">
                <h3>{atividade.title}</h3>
                <p>Professor: {atividade.professor}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="info-section">
          <div className="info-card">
            <p><strong>Professora:</strong> Prof. João</p>
            <div className="dias-container">
              {dias.map((dia, index) => (
                <span key={index} className="dia">{dia}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
      <Rodape />
    </>
  );
};

export default Atividade;
