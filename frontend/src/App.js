import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesenvolvedoresPage from "./pages/Desenvolvedores/Desenvolvedores";
import HomePage from "./pages/Home/Home";
import MateriasPage from "./pages/Materias/Materias";
import PerfilAluno from "./pages/PerfilAluno/PerfilAluno";
import Login from "./pages/Login/Login";
import Perguntas from "./pages/Perguntas/Perguntas";
import BaseComum from './pages/BaseComum/BaseComum'
import BiologiaPage from './pages/Materias/Biologia'
import MatematicaPage from './pages/Materias/Matematica'
import Atividade from "./pages/Atividade/Atividade";
import GeografiaPage from "./pages/Materias/Geografia";
import HistoriaPage from "./pages/Materias/Historia";
import PortuguesPage from "./pages/Materias/Portugues";
import VideoLessonPage from "./pages/VideoLessonPage/VisualLessonPage";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/desenvolvedores" element={<DesenvolvedoresPage/>}/>
        <Route path="/materias" element={<MateriasPage/>}/>
        <Route path="/perfil" element={<PerfilAluno/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/perguntas" element={<Perguntas/>}/>
        <Route path="/basecomum" element={<BaseComum/>}/>
        <Route path="/basecomum/biologia" element={<BiologiaPage/>}/>
        <Route path="/basecomum/matematica" element={<MatematicaPage/>}/>
        <Route path="/basecomum/geografia" element={<GeografiaPage/>}/>
        <Route path="/basecomum/historia" element={<HistoriaPage/>}/>
        <Route path="/basecomum/portugues" element={<PortuguesPage/>}/>
        <Route path="/materias/matematica" element={<MatematicaPage/>}/>
        <Route path="/atividade" element={<Atividade/>}/>
        <Route path="/video" element={<VideoLessonPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;