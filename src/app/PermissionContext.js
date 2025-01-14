'use client'
import { createContext, useEffect, useState } from "react";

const PermissionContext = createContext();  

export function PermissionProvider({children}){
    const [permission, setPermissions] = useState({});
    useEffect(() => {
        fetchPermissions();
    }, []);

    return(
        <PermissionContext.Provider value={{ permission, fetchPermissions}}>
            {children}
        </PermissionContext.Provider>
    );
} 
export default PermissionContext;