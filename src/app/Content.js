'use client'
import { useContext } from 'react';
import ThemeProvider from './ThemeContext';
import Login from './Login';
import ProductList from './ProductList';
import Language from './Language';
import Notificaciones from './Notificaciones';
import Settings from './Setting';
import Load from './Load';
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
        <Language></Language>
        <ProductList></ProductList>
        <Notificaciones></Notificaciones>
        <Settings></Settings>
        <Load></Load>

        </div>
    );
  }