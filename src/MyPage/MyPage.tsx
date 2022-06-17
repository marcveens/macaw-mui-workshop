import { Box, Container, Grid, useTheme } from "@mui/material";
import { Navigation } from "./Navigation";
import { ShopItem } from "./ShopItem";

export const MyPage = () => {
    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: theme.palette.background.default }}>
            <Navigation />

            <main>
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="md">
                        <Grid container spacing={4}>
                            <ShopItem
                                title="Waterpistool"
                                description="24 cm | diverse varianten"
                                imageUrl="https://www.action.com/_next/image/?url=https%3A%2F%2Fwww.action.com%2Fglobalassets%2Fcmsarticleimages%2F05%2F35%2F2582194_8718964123339-110_01.png&w=384&q=25"
                                price={.79}
                            />

                            <ShopItem
                                title="Re-load powerbank"
                                description="10.000 mAh"
                                imageUrl="https://www.action.com/_next/image/?url=https%3A%2F%2Fwww.action.com%2Fglobalassets%2Fcmsarticleimages%2F74%2F53%2F3006718_5054061350791-110_02.png&w=640&q=75"
                                price={9.95}
                            />

                            <ShopItem
                                title="Denver sport smartwatch SW-153AC"
                                description="8.1 x 8.8 x 12.5 cm"
                                imageUrl="https://www.action.com/_next/image/?url=https%3A%2F%2Fwww.action.com%2Fglobalassets%2Fcmsarticleimages%2F00%2F28%2F3010990_5706751063299-110_01.png&w=640&q=75"
                                price={9.95}
                            />

                            <ShopItem
                                title="Fietspomp"
                                description="60 cm | diverse varianten"
                                imageUrl="https://www.action.com/_next/image/?url=https%3A%2F%2Fwww.action.com%2Fglobalassets%2Fcmsarticleimages%2F94%2F55%2F2561081_8718964102464-110_01.png&w=640&q=75"
                                price={6.98}
                            />

                            <ShopItem
                                title="Walfort fietscomputer"
                                description="15 functies"
                                imageUrl="https://www.action.com/_next/image/?url=https%3A%2F%2Fwww.action.com%2Fglobalassets%2Fcmsarticleimages%2F86%2F89%2F2582095_5709386393014-110_01.png&w=640&q=75"
                                price={6.98}
                            />

                            <ShopItem
                                title="Mini-ledlampjes"
                                description="2 stuks"
                                imageUrl="https://www.action.com/_next/image/?url=https%3A%2F%2Fwww.action.com%2Fglobalassets%2Fcmsarticleimages%2F21%2F30%2F2507568_8718964007189-110_02.png&w=640&q=75"
                                price={0.95}
                            />
                        </Grid>
                    </Container>
                </Box>
            </main>
        </Box>
    );
};