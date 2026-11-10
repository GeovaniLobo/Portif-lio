import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ProjectGrid from './components/ProjectGrid';
import './App.css'; // ou o seu arquivo de estilo com as diretivas do tailwind

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Aqui entra o nosso cabeçalho do perfil */}
      <ProfileHeader />
      <ProjectGrid/>

      {/* Em breve: a barra de Destaques e o Grid de Projetos! */}
    </div>
  );
}

export default App;