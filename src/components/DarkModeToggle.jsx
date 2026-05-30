import { useState } from "react";

function DarkModeToggle() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {

        setDarkMode(!darkMode);

        document.body.style.backgroundColor =
            darkMode ? "white" : "#121212";

        document.body.style.color =
            darkMode ? "black" : "white";
    };

    return (

        <button onClick={toggleDarkMode}>

            Toggle Dark Mode

        </button>
    );
}

export default DarkModeToggle;