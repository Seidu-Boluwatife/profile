import {useTheme} from "./ThemedContex"

function ThemeToggleButton(){
    const{theme,toggleTheme} = useTheme();
    return(
        <button onClick={toggleTheme}>
            switch to {theme === "light" ? "dark": "light"} Mode
        </button>
    );
} ; export default ThemeToggleButton