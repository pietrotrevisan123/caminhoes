import { useState } from "react";

export default function App() {

  const [mostrarFoto1, setMostrarFoto1] = useState(false);
  const [mostrarFoto2, setMostrarFoto2] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-pink-950 text-white font-sans overflow-hidden relative">

      {/* FUNDO ANIMADO */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full animate-pulse"></div>

      {/* ESTRELAS */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-10 left-20 text-pink-400 animate-bounce text-3xl">
          ❣
        </div>

        <div className="absolute top-40 right-32 text-purple-400 animate-ping text-2xl">
          💝
        </div>

        <div className="absolute bottom-20 left-40 text-pink-300 animate-bounce text-4xl">
          🤍
        </div>

        <div className="absolute bottom-40 right-10 text-purple-300 animate-pulse text-3xl">
          💫
        </div>

      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10">

        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center px-8 py-32">

          <h1 className="text-7xl md:text-8xl font-extrabold text-pink-400 mb-8 animate-pulse drop-shadow-[0_0_30px_#ff4da6]">
            Eu Amo Você ❤️
          </h1>

          <p className="max-w-3xl text-2xl text-zinc-300 leading-10 mb-12 animate-fadeIn">

            Você mudou minha vida pra melhor.
            <br /><br />

            Cada segundo ao seu lado vale a pena,
            e eu quero continuar criando memórias incríveis com você.
            <br /><br />

            Seu sorriso é meu lugar favorito. 💖

          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-8 justify-center">

            <button
              onClick={() => setMostrarFoto1(!mostrarFoto1)}
              className="bg-pink-500 hover:bg-pink-400 px-12 py-5 rounded-full text-2xl font-bold shadow-[0_0_40px_#ff4da6] hover:scale-110 hover:rotate-2 transition duration-300 animate-bounce"
            >
              Nossa Foto ❤️
            </button>

            <button
              onClick={() => setMostrarFoto2(!mostrarFoto2)}
              className="bg-purple-500 hover:bg-purple-400 px-12 py-5 rounded-full text-2xl font-bold shadow-[0_0_40px_#a855f7] hover:scale-110 hover:-rotate-2 transition duration-300 animate-bounce"
            >
              Outro Momento 💜
            </button>

          </div>

        </section>

        {/* FOTO 1 */}
        {mostrarFoto1 && (

          <section className="flex justify-center px-8 pb-16 animate-bounce">

            <div className="bg-zinc-900/80 backdrop-blur-md border border-pink-500 rounded-[40px] p-8 shadow-[0_0_60px_#ff4da6] max-w-xl w-full text-center hover:scale-105 transition duration-500">

              <h2 className="text-5xl font-bold text-pink-400 mb-8 animate-pulse">
                Nosso Momento ❤️
              </h2>

              <img
                src="euevalen3.jpeg"
                alt="Nós"
                className="rounded-3xl w-full h-[450px] object-cover mb-8 hover:scale-105 transition duration-500"
              />

              <p className="text-zinc-300 text-xl leading-9">
                Você é meu lugar favorito no mundo. 💖
              </p>

            </div>

          </section>

        )}

        {/* FOTO 2 */}
        {mostrarFoto2 && (

          <section className="flex justify-center px-8 pb-24 animate-bounce">

            <div className="bg-zinc-900/80 backdrop-blur-md border border-purple-500 rounded-[40px] p-8 shadow-[0_0_60px_#a855f7] max-w-xl w-full text-center hover:scale-105 transition duration-500">

              <h2 className="text-5xl font-bold text-purple-400 mb-8 animate-pulse">
                Sempre Nós 💜
              </h2>

              <img
                src="/euevalen2.jpeg"
                alt="Casal"
                className="rounded-3xl w-full h-[450px] object-cover mb-8 hover:scale-105 transition duration-500"
              />

              <p className="text-zinc-300 text-xl leading-9">
                Quero continuar vivendo momentos incríveis ao seu lado. ✨
              </p>

            </div>

          </section>

        )}

      </div>

    </div>
  )
}