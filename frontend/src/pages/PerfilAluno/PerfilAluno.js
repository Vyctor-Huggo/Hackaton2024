import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Rodape';
import ContactProfessor from '../../components/ContatarProfessor';
import RecommendedReadings from '../../components/LeiturasRecomendadas';
import AvailableProjects from '../../components/Projetos';
import StudentPerformanceChart from '../../components/PerfomanceChart';
import StudentAttendanceChart from '../../components/Grafico';

const PerfilAluno = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ flex: 1, maxWidth: '50%', padding: '0 10px' }}>
          <StudentAttendanceChart />
        </div>
        <div style={{ flex: 1, maxWidth: '50%', padding: '0 10px' }}>
          <StudentPerformanceChart/>
        </div>
      </main>
      <ContactProfessor />
      <RecommendedReadings />
      <AvailableProjects />
      <Footer />
    </div>
  );
};

export default PerfilAluno;
