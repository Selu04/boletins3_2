'use client'
import { createContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }){
    const [language, setLanguage] = useState('es');
    const changeLanguage = () => setLanguage(lenguage === 'es' ? 'en' : 'es');
    
    return(
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
export default LanguageContext;