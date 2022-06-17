import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type ShopItemProps = {
    title: string;
    imageUrl: string;
    description: string;
    price: number;
};

export const ShopItem: React.FC<ShopItemProps> = ({ title, description, imageUrl, price }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={imageUrl}
                        alt={title}
                    />
                </CardActionArea>
                <CardContent sx={{ flex: '1' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>€ {price}</span>
                    <Button size="small" variant="contained" endIcon={<AddShoppingCartIcon />}>Buy</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};