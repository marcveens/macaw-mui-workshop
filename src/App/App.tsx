import { MyPage } from "../MyPage/MyPage";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { ThemeContext, ThemeContextProvider } from "../Theme/ThemeContext";

export const App = () => {
    return (
        <ThemeContextProvider>
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <MyPage />
                    </ThemeProvider>
                )}
            </ThemeContext.Consumer>
        </ThemeContextProvider>
    );
};