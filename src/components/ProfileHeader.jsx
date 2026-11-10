// src/components/ProfileHeader.jsx
import React from 'react';

export default function ProfileHeader() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950 text-zinc-100 px-4 py-8 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Foto de Perfil com o gradiente clássico de "Stories" do Instagram */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 shrink-0">
          <div className="w-full h-full rounded-full bg-zinc-900 overflow-hidden flex items-center justify-center border-2 border-zinc-950">
            {/* Aqui depois você coloca a sua foto ou avatar */}
            <span className="text-xs text-zinc-400">Sua Foto</span>
          </div>
        </div>

        {/* Informações e Bio */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <h1 className="text-xl md:text-2xl font-light">geolobo.dev</h1>
            <div className="flex gap-2">
              <button className="bg-zinc-800 hover:bg-zinc-700 text-sm font-semibold px-4 py-1.5 rounded-lg transition">
                Contato
              </button>
              <button className="bg-zinc-800 hover:bg-zinc-700 text-sm font-semibold px-4 py-1.5 rounded-lg transition">
                Repositórios
              </button>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="flex justify-center md:justify-start gap-6 mb-4 text-sm md:text-base text-zinc-300">
            <span><strong className="text-white">--</strong> posts</span>
            <span><strong className="text-white">ADS</strong> Estácio</span>
            <span><strong className="text-white">Belém</strong> 📍</span>
          </div>

          {/* Bio do perfil */}
          <div className="space-y-1 text-sm md:text-base">
            <p className="font-semibold text-white">Geovani Lobo | Dev Front-End Jr.</p>
            <p className="text-zinc-400">
              Transformando ideias em código com React, Vite & Tailwind. 🚀
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}