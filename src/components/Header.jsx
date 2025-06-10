import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';


function Header() {

    const navigate = useNavigate();   

    //Peguei esse Menubar lá no site do PrimeReact
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate('/')
        },
        {
            label: 'Produtos',
            icon: 'pi pi-star',
            command: () =>navigate('/produtos')
        }
    ];  

  return <Menubar model={items} className='w-full  flex items-center justify-between' style={{
      backgroundColor: '#8B4A57',
      color: 'white',
      padding: '1rem',
      fontWeight: '500',
    }}
    
     />
    
}
export default Header