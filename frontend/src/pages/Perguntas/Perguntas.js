/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './pergunta.css';
import logo from '../../imagens/logo.png'
import home from '../../imagens/homeIcon.png'
import curso from '../../imagens/cursosIcon.png'
import atividade from '../../imagens/atividadesIcon.png'
import duvida from '../../imagens/duvidasIcon.png'
import config from '../../imagens/configIcon.png'
import duvidaPessoa from '../../imagens/duvidas copy.png'
import perfil from '../../imagens/fotoPerfil01.png'
import Rodape from '../../components/Rodape';

const Perguntas = () => {
  // Lista de dúvidas com cinco pessoas e seus respectivos textos
  const duvidas = [
    {
      nome: 'João Silva',
      imagemPerfil: perfil,
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      nome: 'Maria Oliveira',
      imagemPerfil: perfil,
      texto: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      nome: 'Carlos Souza',
      imagemPerfil: perfil,
      texto: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      nome: 'Ana Santos',
      imagemPerfil: perfil,
      texto: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      nome: 'Pedro Almeida',
      imagemPerfil: perfil,
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  return (
    <>
      <div className="container" style={{border: '0px solid transparent'}}>
        <div className="row" id="row01">
          <div className="col-md-4" id="barraNavegacao">
            <img src={logo} alt="" id="logo" />
            <table className="table table-borderless">
              <thead></thead>
              <tbody>
                <a href="#" className="linkExterno">
                  <tr>
                    <th scope="row"><img src={home} alt="" className="homeIcon" /></th>
                    <td>Home</td>
                  </tr>
                </a>
                <a href="#" className="linkExterno">
                  <tr>
                    <th scope="row"> <img src={curso} alt="" className="homeIcon" /></th>
                    <td>Cursos</td>
                  </tr>
                </a>
                <a href="#" className="linkExterno">
                  <tr>
                    <th scope="row"><img src={atividade} alt="" className="homeIcon" /></th>
                    <td colSpan="2">Atividades</td>
                  </tr>
                </a>
                <a href="#" className="linkExterno">
                  <tr>
                    <th scope="row"><img src={duvida} alt="" className="homeIcon" /></th>
                    <td colSpan="2">Duvidas</td>
                  </tr>
                </a>
                <a href="#" className="linkExterno">
                  <tr>
                    <th scope="row"><img src={config} alt="" className="homeIcon" /></th>
                    <td colSpan="2">Config.</td>
                  </tr>
                </a>
              </tbody>
            </table>
          </div>

          <div className="col-md-8" id="principal">
            <div id="titulo">
              <img src={duvidaPessoa} alt="" id="duvidas" />
              <h2 id="txtDuvidas">Dúvidas...</h2>
            </div>

            {/* Mapeando e renderizando as dúvidas */}
            {duvidas.map((duvida, index) => (
              <div key={index} className="duvida">
                <div className="imgNome">
                  <img src={duvida.imagemPerfil} alt="" className="imgPerfil" />
                  <h5>{duvida.nome}</h5>
                </div>
                <p>{duvida.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Rodape />
    </>
  );
}

export default Perguntas;
