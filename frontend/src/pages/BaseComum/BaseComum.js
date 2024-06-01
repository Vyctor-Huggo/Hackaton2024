import React from 'react';
import './BaseComum.css'; 
import { Link } from 'react-router-dom'; // Importando o componente Link
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import historia from '../../imagens/histIcon.png'
import biologia from '../../imagens/biologiaIcon.png'
import quimica from '../../imagens/quimicaIcon.png'
import portugues from '../../imagens/portuIcon.png'
import geografia from '../../imagens/geoIcon.png'
import matematica from '../../imagens/matIcon.png'

const Pagina = () => {
  return (
    <>
      <Header />
      <div className="container mb-5" style={{height: "70vw"}}>
        <div className="row" id="row01">
          <div className="col-md-8" id="principal">
            <div id="titulo">
              <h1>Base Comum:</h1>
            </div>

            {/* Adicionando o componente Link para cada matéria */}
            <Link to="/biologia" className="link-materia">
              <div className="materias">
                <img src={biologia} alt="" className="iconeMateria" />
                <h2>Biologia</h2>
              </div>
            </Link>

            <Link to="/matematica" className="link-materia">
              <div className="materias">
                <img src={matematica} alt="" className="iconeMateria" />
                <h2>Matemática</h2>
              </div>
            </Link>

            <Link to="/quimica" className="link-materia">
              <div className="materias">
                <img src={quimica} alt="" className="iconeMateria" />
                <h2>Química</h2>
              </div>
            </Link>

            <Link to="/portugues" className="link-materia">
              <div className="materias">
                <img src={portugues} alt="" className="iconeMateria" />
                <h2>Português</h2>
              </div>
            </Link>

            <Link to="/geografia" className="link-materia">
              <div className="materias">
                <img src={geografia} alt="" className="iconeMateria" />
                <h2>Geografia</h2>
              </div>
            </Link>

            <Link to="/historia" className="link-materia">
              <div className="materias">
                <img src={historia} alt="" className="iconeMateria" />
                <h2>História</h2>
              </div>
            </Link>

          </div>
        </div>
      </div>
      <Rodape/>
    </>
  );
}

export default Pagina;
