import { useContext } from "react";
import AuthContext from "./AuthContext";
export default function Login() {
    const { user, login, logout } = useContext(AuthContext);

    return (
        <div>
            {user ? (<><p>Hola, {user.username}</p><button onClick={logout}>Cerrar Sesión</button></>) 
            : 
            (<button onClick={() => login("Usuario")}>Iniciar Sesión</button>)}
        </div>
    );
}