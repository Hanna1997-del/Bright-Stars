"use client";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface AppProviderProps {
    children: ReactNode  | ReactNode[] | undefined;
}
export const AppContext = createContext({}as {
    mounted: boolean;
    setMounted: Dispatch<SetStateAction<boolean>>
}) 
const AppProvider:React.FC<AppProviderProps> = ({children}) => {
    const[mounted,setMounted] = useState<boolean>(false);
    useEffect(()=>{
        setMounted(true)
    },[])
    return ( 
        <AppContext.Provider value={{mounted,setMounted}}>
          {children}
        </AppContext.Provider>
     );
}
 
export default AppProvider;