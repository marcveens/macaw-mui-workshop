import { createTheme, ThemeProvider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useContext } from "react";
import { PaletteModes, ThemeContext } from "./ThemeContext";

export const ThemeSwitch = () => {
    const themeContext = useContext(ThemeContext);

    const handleChange = (_: unknown, value: PaletteModes) => {
        themeContext.setPaletteMode(value);
    };

    const theme = createTheme({ 
        palette: {
            mode: 'dark'
        },
        components: {
            MuiToggleButton: {
                styleOverrides: {
                    root: {
                        fontWeight: 'normal'
                    }
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <ToggleButtonGroup
                value={themeContext.paletteMode}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="light">Light</ToggleButton>
                <ToggleButton value="dark">Dark</ToggleButton>
                <ToggleButton value="surprise">?</ToggleButton>
            </ToggleButtonGroup>
        </ThemeProvider>
    );
};