import { createTheme } from "@mui/material";
import shadows, { Shadows } from "@mui/material/styles/shadows";

export const baseTheme = createTheme({
    palette: {
        primary: {
            main: "#fbd200"
        }
    }
});

export const darkTheme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'dark',
    }
});

export const lightTheme = createTheme({
    ...baseTheme,
    palette: {
        background: {
            default: "#ECF6FC"
        }
    }
});

export const surpriseTheme = createTheme({
    ...baseTheme,
    typography: {
        fontFamily: '"Courier New", "Helvetica", "Arial", sans-serif',
    },
    palette: {
        primary: {
            main: '#09b945',
        },
        secondary: {
            main: '#ff9e58',
        },
        background: {
            default: "#ddffe8"
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    border: '2px solid #000',
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    borderTop: '2px solid #000'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(45deg, hsl(140deg 91% 38%) 0%, hsl(100deg 72% 41%) 11%, hsl(81deg 100% 33%) 22%, hsl(68deg 100% 31%) 33%, hsl(55deg 100% 32%) 44%, hsl(44deg 100% 36%) 56%, hsl(34deg 100% 41%) 67%, hsl(26deg 100% 44%) 78%, hsl(18deg 100% 47%) 89%, hsl(0deg 100% 56%) 100%)',
                }
            }
        }
    },
    shape: {
        borderRadius: 0,
    },
    shadows: shadows.map(() => `none`) as Shadows,
});