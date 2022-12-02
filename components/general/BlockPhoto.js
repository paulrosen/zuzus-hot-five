import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import NativeImage from "./NativeImage";

const BlockPhoto = ({ blockPhotoContent, reverse }) => {
    return (
        <Grid
            container
            wrap={reverse ? "wrap-reverse" : "wrap"}
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
                            className="block-photo-emphasis"
                            sx={{ marginBottom: ".25em", textAlign: "center" }}
                        >
                            {blockPhotoContent.content}
                        </Typography>
                        <Box>
                            <Link href={blockPhotoContent.button.href}>
                                <Button
                                    component="a"
                                    href={blockPhotoContent.button.href}
                                    variant={blockPhotoContent.button.variant}
                                    size="large"
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
