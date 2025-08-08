import { createContext,useState,useContext } from "react";

const ThemeContext = createContext();       // create the portal

export const ThemeProvider =({children})=>{         // we ant to pass theme everywher
    const [theme,setTheme] =useState('light');      // create use state to change ligt

    const toggleTheme = () =>{
        setTheme(prev => ( prev =='light'? 'dark ':'light'));
    };

    //call provider
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>        
            {children}
        </ThemeContext.Provider>
    );


};

//Custom hook

export const useTheme = () => useContext(ThemeContext);