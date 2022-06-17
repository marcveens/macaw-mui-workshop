import { AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ThemeSwitch } from "../Theme/ThemeSwitch";

export const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <ShoppingCartIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Maction
                </Typography>

                <ThemeSwitch />
            </Toolbar>
        </AppBar>
    );
};