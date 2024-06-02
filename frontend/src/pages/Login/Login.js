/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import googleIcon from '../../imagens/googleIcon.png';
import logo from '../../imagens/logo.jpg';

const Login = () => {
  	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
  	const navigate = useNavigate();

  	const handleSubmit = async (e) => {
      e.preventDefault();

      const response = await fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          navigate('/desenvolvedores');
      } else {
          console.error('Erro ao fazer login');
      }
  	};


  return (
    <>
      <Header />
      <div className="container my-5" style={{height: '100vh', border: '0px solid transparent'}}>
        <div className="row justify-content-center">
          <div className="col-md-6" style={styles.principal}>
            <img src={logo} alt="logo" style={styles.logo} />
            <a href="#" style={styles.googleA}>
              <div style={styles.google}>
                <img src={googleIcon} alt="" style={styles.googleIcon} />
                <p style={styles.googleText}>Entrar com o Google</p>
              </div>
            </a>

			{/* Forms de login */}
			<form onSubmit={handleSubmit}>
				<div className="input-group mb-3" style={styles.inputGroup}>
					<span className="input-group-text" id="basic-addon1"></span>
					<input 
						type="text" 
						className="form-control" 
						placeholder="Email" 
						name="email" 
						aria-label="Username" 
						aria-describedby="basic-addon1" 
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="input-group mb-3" style={styles.inputGroup}>
					<span className="input-group-text" id="basic-addon1"></span>
					<input 
							type="text" 
							className="form-control" 
							placeholder="Senha" 
							name="password" 
							aria-label="Username" 
							aria-describedby="basic-addon1"
							value={password}
							onChange={(e) => setPassword(e.target.value)} 
						/>
				</div>

				<button type="submit" className="btn btn-success btn-lg" style={styles.logarBtn}>Logar</button>
			</form>
            
            <div id="textoFinal">
              <a href="#" style={styles.txtEnd}>
                <p style={styles.txtEndText}>Não tem uma conta? Crie uma grátis</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
}

const styles = {
  principal: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
    padding: '30px',
    maxWidth: '500px',
    width: '100%',
  },
  logo: {
    width: '100%',
    maxWidth: '200px',
    display: 'block',
    margin: '0 auto',
  },
  googleA: {
    textDecoration: 'none',
  },
  google: {
    backgroundColor: '#1b9bff',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  googleIcon: {
    width: '50px',
  },
  googleText: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  logarBtn: {
    width: '100%',
  },
  txtEnd: {
    textDecoration: 'none',
    color: '#1b9bff',
  },
  txtEndText: {
    textAlign: 'center',
    margin: '0',
  },
};

export default Login;
