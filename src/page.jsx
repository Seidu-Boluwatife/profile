import React from "react";
import { useTheme } from "./ThemedContex";

const Page = () =>{ 

    const {theme} = useTheme();

    const styles ={
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme ==="light"? "#000" :"#fff",
    };

    return(
        <div>
            This is a theme pages
        { theme ==="light"? "#000" :"#fff"}
               
        </div>
    );

};export default Page