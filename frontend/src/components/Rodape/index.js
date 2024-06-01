import React from 'react';
import { FaHeadset, FaRegHandshake, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import './style.css'

function Rodape() {
  return (
    <footer className="footer py-4 mt-3 bg-light">
      <div className="container" style={{ height: '15vh', border: '0px solid transparent' }}>
        <div className="row">
          {/* Coluna Atendimento */}
          <div className="col-md-4">
            <h5>Atendimento</h5>
            <ul className="list-unstyled">
              <li><FaHeadset /> Central de Ajuda</li>
              <li><FaHouseChimney /> Área de Alunos</li>
              <li><FaRegHandshake /> Trabalhe Conosco</li>
            </ul>
          </div>

          {/* Coluna Redes Sociais */}
          <div className="col-md-4">
            <h5>Redes Sociais</h5>
            <ul className="list-unstyled">
              <li><FaInstagram /> Instagram</li>
              <li><FaLinkedin /> Linkedin</li>
            </ul>
          </div>

          {/* Coluna Termos e Política */}
          <div className="col-md-4">
            <h5>Termos e Política</h5>
            <ul className="list-unstyled">
              <li><CiSettings /> Termos de Uso</li>
              <li><RiGitRepositoryPrivateLine /> Política de Privacidade</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
