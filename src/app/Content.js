import { useContext } from 'react';
import ThemeProvider from './ThemeContext';
import Login from './Login';
/* import Ejercicio2 from './Ejercicio2';
import Ejercicio3 from './Ejercicio3';
import Ejercicio4 from './Ejercicio4';
import Ejercicio6 from './Ejercicio6';
import Ejercicio7 from './Ejercicio7';
import Ejercicio8 from './Ejercicio8';
 */
export default function Content() {
    const { theme, toggleTheme } = useContext(ThemeProvider); 
  
    return (
      <div
        style={{
          backgroundColor: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
          height: '100vh',
        }}
        
      >
        <button onClick={toggleTheme}>Cambiar Tema</button>
        <Login></Login>
        </div>
    );
  }