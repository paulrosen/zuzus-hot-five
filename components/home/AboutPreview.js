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
                <Box sx={{ marginBottom: "4rem" }}>
                    <DecorativeHeader
                        text="ABOUT US"
                        image={eventsPreviewContent.bigDividerImage}
                    />
                </Box>
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
                                For over 10 years, the Hot 5, fueled by the
                                Traditioinal Jazz of Buddy Bolden, King Oliver,
                                and Louis Armstrong, has supplied stomps, viper
                                blues, and struts, summoning the rich musical
                                history of NOLA and the roots of <em>Jass.</em>
                            </Typography>
                            <Typography>
                                Add a Swing dance or a romantic ballad and
                                you&apos;ve got High-Octane Gilded Age Madness!
                            </Typography>
                            <Typography>
                                They&apos;ll blow your top until the last
                                call&mdash;or until the joint&apos;s raided!
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
