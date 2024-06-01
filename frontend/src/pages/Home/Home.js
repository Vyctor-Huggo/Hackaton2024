import React from 'react';
import imagemAutismo from '../../imagens/imagem_autismo.png';
import aulas from '../../imagens/aulas.png';
import centralDuvidas from '../../imagens/duvidas.png';
import listaDeExercicios from '../../imagens/lista_exercicios.png';
import imagem1 from '../../imagens/image-1.png';
import imagem2 from '../../imagens/image-2.png';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';

const HomePage = () => {
  return (
    <div className="content-wrap">
      {/* Header Component */}
      <Header />

      {/* Apresentacao Component */}
      <div className="container mt-5" style={{ minHeight: '70vh' }}>
        <div className="row">
          <div className="col-md-6 col-12 apresentacao">
            <h2 className="h2">Um site voltado ao aprendizado</h2>
            <p>Adotamos o poderoso método de estudo ativo, permitindo que pessoas com espectro aprendam mais.</p>
          </div>
          <div className="col-md-6 col-12">
            <img src={imagemAutismo} alt="Imagem" className="imagem img-fluid" />
          </div>
        </div>
      </div>

      {/* Section Component */}
      <div className="container mt-2" style={{ minHeight: '100vh' }}>
        <div className="row">
          <div className="col-12 section">
            <h3 className="text-center mb-4">Pare de estudar errado</h3>
            <p className="text-center mb-5">O Spectrum foi pensado de forma estratégica para que você portador do espectro autista consiga estudar de forma inteligente.</p>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="card">
                  <img src={aulas} alt="Imagem 1" className="card-img-top img-fluid" />
                  <div className="card-body">
                    <h5 className="card-title">Aulas</h5>
                    <p className="card-text">Aulas voltadas a dinâmicas de aprendizado de pessoas com espectro</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="card">
                  <img src={centralDuvidas} alt="Imagem 2" className="card-img-top img-fluid" />
                  <div className="card-body">
                    <h5 className="card-title">Central de dúvidas</h5>
                    <p className="card-text">Central de dúvidas integrando o aluno ao professor</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="card">
                  <img src={listaDeExercicios} alt="Imagem 3" className="card-img-top img-fluid" />
                  <div className="card-body">
                    <h5 className="card-title">Lista de exercícios</h5>
                    <p className="card-text">Lista de exercícios para reforçar o conteúdo conforme o aluno avança</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MaisQueVideoAulas Component */}
      <div className="container mb-5" style={{ height: '150vh' }}>
        <div className="row mb-5">
          <div className="col-md-6 col-12 align-self-center">
            <h4>Muito mais que videoaulas:</h4>
            <p>Aqui no Spectrum você estuda por mapas mentais, podcasts, flashcards e textos chaves e as videoaulas. Você escolhe a melhor forma de aprender o conteúdo teórico.</p>
          </div>
          <div className="col-md-6 col-12">
            <img src={imagem1} alt="Imagem da Seção" className="imagem img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 align-self-center">
            <h4>Simulados estratégicos, listas hackers e provas</h4>
            <p>As listas hackers de matemática, os simulados de questões padrões ENEM e as provas modelo estão te esperando. Com isso, você aprenderá de forma rápida e inteligente.</p>
          </div>
          <div className="col-md-6 col-12">
            <img src={imagem2} alt="Imagem da Seção" className="imagem img-fluid" />
          </div>
        </div>
      </div>

      {/* Rodape Component */}
      <Rodape />
    </div>
  );
}

export default HomePage;
