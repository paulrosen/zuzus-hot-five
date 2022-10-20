import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import Mosaic from "../mosaic/Mosaic";
import ReactAudioPlayer from "react-audio-player";
import DecorativeHeader from "../general/DecorativeHeader";
import { eventsPreviewContent, musicContent } from "../../siteInfo";
import { ArrowRightAlt } from "@mui/icons-material";

const MusicPreview = ({ reverse, variation }) => {
    return (
        <Box>
            <Container className="section" maxWidth="lg">
                <Box sx={{ marginBottom: "4rem" }}>
                    <DecorativeHeader
                        image={eventsPreviewContent.bigDividerImage}
                        text="MUSIC"
                    />
                </Box>
                <Grid
                    container
                    spacing={10}
                    wrap={reverse ? "wrap-reverse" : "wrap"}
                >
                    <Grid item xs={12} lg={4} order={reverse ? "1" : "0"}>
                        <Box
                            className="flex-1"
                            sx={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    maxWidth: "45ch",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: {
                                        xs: "center",
                                        lg: reverse ? "start" : "end",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        textAlign: {
                                            xs: "center",
                                            lg: reverse ? "start" : "end",
                                        },
                                    }}
                                >
                                    {musicContent.title}
                                </Typography>

                                <br />
                                {musicContent.songs
                                    .slice(0, 3)
                                    .map((song, index) => {
                                        return (
                                            <Box
                                                key={index}
                                                sx={{
                                                    margin: ".5rem 0",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "end",
                                                }}
                                            >
                                                <Typography variant="caption">
                                                    {song.name}
                                                </Typography>
                                                <ReactAudioPlayer
                                                    key={index}
                                                    src={song.url}
                                                    controls
                                                />
                                            </Box>
                                        );
                                    })}
                                <br />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8} order={reverse ? "0" : "1"}>
                        <Box
                            sx={{
                                display: "flex",
                                height: "100%",
                                alignItems: "center",
                            }}
                        >
                            <Mosaic
                                images={musicContent.images}
                                variation={variation}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "3rem",
                    }}
                >
                    <Link href={musicContent.button.href}>
                        <Button
                            size="large"
                            color="secondary"
                            sx={{ width: "fit-content" }}
                            variant={musicContent.button.variant}
                            endIcon={<ArrowRightAlt />}
                        >
                            {musicContent.button.text}
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default MusicPreview;
