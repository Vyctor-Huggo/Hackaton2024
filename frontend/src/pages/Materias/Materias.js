import React from 'react';
import Materia from '../../components/Materia'; // Importando o componente de matéria
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import atividade from '../../imagens/atividadesMaterias.png'


const Materias = () => {
  return (
    <> 
    <Header />
    <div className="container" style={{ maxWidth: '50%', height: '350px', border: '0px solid transparent' }}>
        <div className="row justify-content-center align-items-center">
          <h2 className="text-center">Atividades</h2>
          <img className="img-fluid" src={atividade} alt="Imagem de atividades" style={{ height: '300px', width: 'auto' }}/>
        </div>
      </div>  
    <div className="container-fluid d-flex flex-wrap mt-5" style={{ marginLeft: '5%' }}>
      <Materia
        imagem="https://files.passeidireto.com/614287cb-281d-4e6d-bd11-3833d7618c0e/614287cb-281d-4e6d-bd11-3833d7618c0e.jpeg"
        titulo="História"
        descricao="Estudando sobre o passado." />
      <Materia
        imagem="https://blog.etapa.com.br/hubfs/Not%C3%ADcias%202019%20-%20Curso/Home-Curso_Tendencias_0009_Qu%C3%ADmica.jpg"
        titulo="Química"
        descricao="Entendendo sobre o mundo em suas partes" />
      <Materia
        imagem="https://th.bing.com/th/id/OIP.HWzTPugXUslg5pFPFtaVxgHaEj?rs=1&pid=ImgDetMain"
        titulo="Ciências"
        descricao="Estudando a beleza do mundo" />
      <Materia
        imagem="https://th.bing.com/th/id/OIP.9HQI7T-cNV7zuPwlboXCCQHaE8?rs=1&pid=ImgDetMain"
        titulo="Língua Portuguesa"
        descricao="Entendendo nossa língua." />
      <Materia
        imagem="https://1.bp.blogspot.com/-98AP-ll1D7I/XwBH8Z2yUMI/AAAAAAAAASM/FJUd-D60YzUyg1iu-gCRBAhnstfHpGtlQCK4BGAsYHg/s320/15.jpg"
        titulo="Inglês"
        descricao="Estudando sobre uma das maiores línguas do mundo." />
      <Materia
        imagem="https://th.bing.com/th/id/R.c678b9511294df0cac6d9e52f787de63?rik=MAV3B447CuhldQ&riu=http%3a%2f%2fwecourses.mx%2fwp-content%2fuploads%2f2016%2f10%2fportadas-wecourse-11.jpg&ehk=1G%2fNgofIfdPB%2b99lk3NXRTNFdK4mwNNoqYhIytr4nmM%3d&risl=&pid=ImgRaw&r=0"
        titulo="Física"
        descricao="Estudo dos fenômenos da natureza." />
      <Materia
        imagem="https://i.ytimg.com/vi/2bZdLHYQPio/maxresdefault.jpg"
        titulo="Artes"
        descricao="Estudando a beleza de nossas criações." />
      <Materia
        imagem="https://diferenciando.com/wp-content/uploads/2020/06/Juguetes-de-biologia.png"
        titulo="Biologia"
        descricao="Estudando o mundo." />
    </div>
    <Rodape/>
    </>
  );
}

export default Materias;
