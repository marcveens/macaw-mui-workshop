import { Theme } from "@mui/material";
import { createContext, useState } from "react";
import { darkTheme, lightTheme, surpriseTheme } from "./Theme";

export type PaletteModes = "light" | "dark" | "surprise";

type ThemeContextProps = {
    theme: Theme,
    paletteMode: PaletteModes;
    setPaletteMode: (paletteMode: PaletteModes) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    const [paletteMode, setPaletteMode] = useState<PaletteModes>("light");

    let theme = lightTheme;

    if (paletteMode === 'dark') {
        theme = darkTheme;
    } else if (paletteMode === 'surprise') {
        theme = surpriseTheme;
    }

    const context: ThemeContextProps = {
        theme,
        paletteMode,
        setPaletteMode
    };

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
};