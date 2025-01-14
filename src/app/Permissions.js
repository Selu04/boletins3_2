import { useContext } from "react";
import PermissionContext from "./PermissionContext";

export default function Permissions(){
    const { permissions, fetchPermissions} = useContext(PermissionContext);
    const updatePermissions = () => {
        fetchPermissions();
    };
    return(
        <div>
            {permissions.admin ? 
                (<div><h1>Panel de Admin</h1><button onClick={updatePermissions}>Actualizar permisos</button></div>)
                :
                (<h1>No tienes permiso admin</h1>)}
        </div>
    )
}