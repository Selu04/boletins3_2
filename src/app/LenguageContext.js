import { useState, createContext } from "react";

const LenguageContext = createContext();

export function LenguageProvider({children}){
    const [lenguage, setLenguage] = useState('es');
    const changeLanguage = () => setLenguage(lenguage === 'es' ? 'en' : 'es')
    return(
        <LenguageContext.Provider value={{lenguage, changeLanguage}}>
            {children}
        </LenguageContext.Provider>
    );
}
export default LenguageContext;