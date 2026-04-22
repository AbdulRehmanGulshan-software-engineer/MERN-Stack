import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

export function useTheme() {
    const [isDark, setIsDark] = useContext(ThemeContext)

    return [isDark, setIsDark]
}