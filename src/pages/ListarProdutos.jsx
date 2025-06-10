import { useState, useEffect } from "react";
import { API } from "../services";
import { ProgressBar } from 'primereact/progressbar';
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';




const ListarProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [barraCarregamento, setBarraCarregamento] = useState(true);

  async function buscaProdutos() {
    try {
      const response = await API.get('/products');
      setProdutos(response.data);
    } catch (error) {
      console.error("Error ao buscar produtos:", error.message);
    } finally {
      setBarraCarregamento(false);
    }
  }

  useEffect(() => {
    buscaProdutos();
  }, []);

  // Barra de carregamento, mas não funciona. Já tentei e não sei como fazer funcionar no react
  // Nem sei se é com useState mesmo. 
  let progress = null;
  if (barraCarregamento) {
    progress = (
      <div className="card w-full p-4 flex justify-content-center">
        <ProgressBar mode="indeterminate" style={{ height: '6px', width: '50%' }} />
      </div>
    );
  } 

 
  const opcoesOrdena = [
    { label: 'A-Z', value: 'asc' },
    { label: 'Z-A', value: 'desc' },
    { label: 'Mais recente', value: 'recent' },
    { label: 'Mais antiga', value: 'antigo' },
  ];
  return (  
    <div>

      {progress}

      <div className="w-5 m-auto flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 justify-end">
        <span className="col p-input-icon-left w-full md:w-auto ">
          <i className="pi pi-search pl-1" />         
          <InputText
            placeholder="   Filtrar por nome..."
            className="w-full md:w-64"
          />
          
        </span>

        <span className="col p-input-icon-left w-full md:w-auto">
          <i className="pi pi-sort-amount-down" />
          <Dropdown
            options={opcoesOrdena}
            placeholder="Ordenar por"
            className="w-full md:w-56"
          />
        </span>
      </div> 
      
      <ul className="flex gap-3 flex-wrap list-none p-0 justify-content-center">
        {produtos.map((product) => (
          <li key={product.id} className="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2">
            <div className="shadow-4 p-3 border-round-md text-left bg-white h-75 transition-all transition-duration-500 hover:shadow-8 hover:scale-105">
              <div className="relative">
                <img className="w-full" style={{ height: '300px', objectFit: 'contain' }} src={product.image} alt={product.title} />
                <h6 className="absolute top-0 right-0 bg-primary py-1 px-2 border-round-md">{product.rating.rate}</h6>
              </div>
              <Link to={`/produtos/${product.id}`}>
                  <h3 className="m-0 white-space-nowrap overflow-hidden text-overflow-ellipsis" >{product.id} {product.title}   </h3>            
                  <h6 className="m-0 uppercase text-primary">{product.category}</h6>
              </Link>
              <h2>R$ {product.price}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarProdutos;
