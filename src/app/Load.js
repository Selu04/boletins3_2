import { useContext } from 'react';
import LoadingContext from './LoadingContext';

export default function Load() {
    const { loading, startLoading, stopLoading } = useContext(LoadingContext);

    function loadData(){
        startLoading();  
        setTimeout(() => {
          stopLoading();  
          alert('Datos cargados'); 
        }, 2000);
    }

    return (
        <div>
            <button onClick={loadData}>Cargar datos</button>
            {loading && <div>Cargando...</div>}
        </div>
    );
}