import marca from '../assets/img/marca.png';

function Home() {
  return (
    <div className="flex flex-column align-items-center justify-content-center text-center px-4 py-8 md:py-10" >
      <img src={marca} alt="Marca" className="w-3 md:w-4 lg:w-5 mb-5" />

      {/* Título */}
      <h1 className="text-3xl md:text-5xl font-bold text-900 mb-3 tracking-wide">
        Bem-vindo à <span style={{ color: '#D48E9C' }}>Noirin</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-color-secondary text-sm md:text-lg max-w-30rem mb-5 text-700">
        Descubra o universo da moda com peças exclusivas, design moderno e a elegância que você merece.
      </p>

      {/* Botão */}
      <a
        href="/produtos"
        className="px-5 py-3 border-round-md text-white text-sm md:text-base font-semibold transition-all duration-200"
        style={{ backgroundColor: '#D48E9C' }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#bb6f81')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#D48E9C')}
      >
        Ver Coleção
      </a>
    </div>
  );
}

export default Home;
