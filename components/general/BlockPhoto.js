import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import theme from "../../styles/themes/theme";
import NativeImage from "./NativeImage";

const BlockPhoto = ({ blockPhotoContent, reverse }) => {
    return (
        <Grid
            container
            wrap={reverse ? "wrap-reverse" : "wrap"}
            sx={{ backgroundColor: theme.palette.background.accent }}
        >
            <Grid item xs={12} md={6} order={reverse ? 1 : 0}>
                <NativeImage image={blockPhotoContent.image} maxSize={2000} />
            </Grid>
            <Grid item xs={12} md={6} order={reverse ? 0 : 1}>
                <Container sx={{ height: "100%" }}>
                    <Box
                        className="flex-1"
                        sx={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                            padding: "2rem 0",
                        }}
                    >
                        <Typography sx={{ textAlign: "center" }}>
                            {blockPhotoContent.title}
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h6"
                            sx={{ marginBottom: ".25em", textAlign: "center" }}
                        >
                            {blockPhotoContent.content}
                        </Typography>
                        <Box>
                            <Link href={blockPhotoContent.button.href}>
                                <Button
                                    component="a"
                                    variant={blockPhotoContent.button.variant}
                                    size="large"
                                    color="secondary"
                                >
                                    {blockPhotoContent.button.text}
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    );
};

export default BlockPhoto;
