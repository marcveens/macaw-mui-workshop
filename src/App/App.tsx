import { MyPage } from "../MyPage/MyPage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: "#ECF6FC"
        },
        primary: {
            main: "#fbd200"
        }
    }
});


export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MyPage />
        </ThemeProvider>
    );
};