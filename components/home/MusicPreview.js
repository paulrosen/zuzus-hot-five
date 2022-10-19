import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import Mosaic from "../mosaic/Mosaic";
import ReactAudioPlayer from "react-audio-player";
import DecorativeHeader from "../general/DecorativeHeader";
import { eventsPreviewContent } from "../../siteInfo";
import { ArrowRightAlt } from "@mui/icons-material";

const MusicPreview = ({ musicPreviewContent, reverse, variation }) => {
    return (
        <Box
            className="section"
            sx={{ backgroundColor: musicPreviewContent.backgroundColor }}
        >
            <Container maxWidth="xl">
                <DecorativeHeader
                    image={eventsPreviewContent.bigDividerImage}
                    text="MUSIC"
                />
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
                                    {musicPreviewContent.title}
                                </Typography>
                                {/* <br />
                                <Typography
                                    sx={{
                                        textAlign: {
                                            xs: "center",
                                            lg: reverse ? "start" : "end",
                                        },
                                    }}
                                >
                                    {musicPreviewContent.content}
                                </Typography> */}
                                <br />
                                {musicPreviewContent.songs.map(
                                    (song, index) => {
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
                                    }
                                )}
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
                                images={musicPreviewContent.images}
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
                    <Link href={musicPreviewContent.button.href}>
                        <Button
                            size="large"
                            color="secondary"
                            sx={{ width: "fit-content" }}
                            variant={musicPreviewContent.button.variant}
                            endIcon={<ArrowRightAlt />}
                        >
                            {musicPreviewContent.button.text}
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default MusicPreview;
