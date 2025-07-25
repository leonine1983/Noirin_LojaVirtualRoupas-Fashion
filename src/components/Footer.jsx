const Footer = () => {
  return (
    <footer className="w-full bg-red-900 text-white py-2 mt-1 shadow-inner text-center">
      <div className="max-w-6xl mx-auto px-2 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="text-center md:text-left border-right-2  px-5">
          <h3 className="text-lg font-semibold mb-1">Cauan's Solutions</h3>
          <div className="flex justify-center md:justify-end items-center gap-2 text-sm">
            <i className="pi pi-envelope text-white text-lg" />
            <a
              href="mailto:rogerleonino@gmail.com"
              className="underline hover:text-blue-300 transition-colors no-underline text-50"
            >
              rogerleonino@gmail.com
            </a>
          </div>
        </div>

        
        <div className="border-50  px-1 pt-1">
          <h2 className="text-3xl font-bold m-0 flex "><img src="public/logo.png" height={50} alt="" /><div className="mt-2">oirin</div></h2>
          <small className="">
            Descubra o universo da moda com peças exclusivas, design moderno e a elegância que você merece.
          </small>
        </div>        
      </div>
      <p className="text-xs mt-2 opacity-70">
            © 2025 Todos os direitos reservados.
          </p>
    </footer>
  );
};

export default Footer;
