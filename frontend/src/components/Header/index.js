/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../imagens/logo.png';
import usuario from '../../imagens/usuario.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" style={{ width: '125px' }} />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/materias" className="nav-link">Matérias<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link to="/desenvolvedores" className="nav-link">Cursos</Link>
          </li>
          <li className="nav-item">
            <Link to="/atividade" className="nav-link">Atividades</Link>
          </li>
          <li className="nav-item">
            <Link to="/perguntas" className="nav-link">Dúvidas</Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link">Configurações</Link>
          </li>
        </ul>
      </div>
      <Link to="/perfil" className="usuario-box ms-auto d-flex align-items-center" style={{ textDecoration: 'none', borderRadius: '5px' }}>
        <img src={usuario} alt="Usuário" className="usuario-img" style={{ width: '40px', height: 'auto', marginRight: '10px' }} />
        <span className="text-muted">Sou aluno(a)</span>
      </Link>
    </nav>
  );
}

export default Header;
