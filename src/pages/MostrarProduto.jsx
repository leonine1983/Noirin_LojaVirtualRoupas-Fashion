import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { API } from '../services';

const MostrarProduto = () => {
  const {id} = useParams()  
  const [produto, setProduto] = useState(null)  
  const [carregando, setCarregando] = useState(true)
  const Voltar = useNavigate();

  async function buscaProduto(){
    try{
      const response = await API.get(`/products/${id}`)
      setProduto(response.data)
      console.log('FAz a requisição do produto mesclado a url no API com o endereço /products/ com o id ', response.data)
    }
    catch (error){
      console.error("Error ao carregar o produto");
    } finally{
      setCarregando(false)
    }
  }
  useEffect(()=>{
    buscaProduto()
  }, [id])

  if (carregando) {
    return <p>Carregando o produto</p>    
  } 

  if (!produto) {
    return <p>Produto não encontraoo</p>    
  } 
  

  return (
    <div className="p-4 flex justify-content-center">
      <div className="col-11 md:col-8 lg:col-10 shadow-4 p-3 border-round-md text-left bg-white h-75 transition-all transition-duration-500 hover:shadow-8 hover:scale-105">
        <Button 
          label='Voltar'
          icon="pi pi-arrow-left" 
          aria-label="Filter" 
          className='bg-yellow-500' 
          onClick={() => Voltar(-1)}
         />
        <div className="relative">
          <img
            className="w-full"
            style={{ height: '300px', objectFit: 'contain' }}
            src={produto.image}
            alt={produto.title}
          />
          <h6 className="absolute top-0 right-0 bg-primary py-1 px-2 border-round-md">
            {produto.rating?.rate}
          </h6>
        </div>
        <h3 className="m-0 white-space-nowrap overflow-hidden text-overflow-ellipsis">
          {produto.title}
        </h3>
        <h6 className="m-0 uppercase text-primary">{produto.category}</h6>
        <h2>R$ {produto.price}</h2>
        <p>{produto.description}</p>
      </div>
    </div>
  );
};

export default MostrarProduto;