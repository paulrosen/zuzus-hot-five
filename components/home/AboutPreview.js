import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import NativeImage from "../../components/general/NativeImage";
import { aboutContent, eventsPreviewContent } from "../../siteInfo";
import DecorativeHeader from "../general/DecorativeHeader";

const AboutPreview = () => {
    return (
        <Box className="section">
            <Container maxWidth="lg">
                <DecorativeHeader
                    text="ABOUT US"
                    image={eventsPreviewContent.bigDividerImage}
                />
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                height: "100%",
                                flexDirection: "column",
                                gap: "1rem",
                                justifyContent: "center",
                            }}
                        >
                            <Typography>
                                SNACKBAR was formed in 2021 by guitarist and
                                lead singer Greg Ochsenschlager, bassist Emily
                                Patterson, drummer Dave Sorensen, and
                                keyboardist Emma Bramer.
                            </Typography>
                            <Typography>
                                Playing a selection of covers ranging from The
                                Ramones to The Dandy Warhols, SNACKBAR is
                                guaranteed to liven any scene with their far-out
                                sound and take-no-shit worldview.
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "1rem",
                                    marginTop: "1rem",
                                }}
                            >
                                <Link href={"/about"}>
                                    <Button
                                        size="large"
                                        variant="contained"
                                        endIcon={<ArrowRightAlt />}
                                    >
                                        More About Us
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NativeImage
                            image={aboutContent.image}
                            maxSize={2000}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutPreview;
