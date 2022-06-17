import { AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <ShoppingCartIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Maction
                </Typography>
            </Toolbar>
        </AppBar>
    );
};