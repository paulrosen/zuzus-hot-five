import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";
import Event from "../Events/Event";
import NativeImage from "../../components/general/NativeImage";
import { eventsPreviewContent } from "../../siteInfo";
import DecorativeHeader from "../general/DecorativeHeader";
import useGetEvents from "../../hooks/useGetEvents";
import Link from "next/link";
import { ArrowRightAlt } from "@mui/icons-material";

const EventsPreview = () => {
    const [currentEvents] = useGetEvents("events");
    return (
        <Box
            className="section"
            sx={{ background: theme.palette.background.accent }}
        >
            <Container maxWidth="lg">
                <Box sx={{ marginBottom: "4rem" }}>
                    <DecorativeHeader
                        text="UPCOMING EVENTS"
                        image={eventsPreviewContent.bigDividerImage}
                    />
                </Box>
                <Grid container spacing={6} sx={{ position: "relative" }}>
                    <Grid item xs={12} md={5}>
                        <Box className="sticky">
                            <NativeImage
                                image={eventsPreviewContent.image}
                                maxSize={800}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        {currentEvents &&
                            currentEvents.length > 0 &&
                            currentEvents.slice(0,3).map((event, index) => {
                                return (
                                    <Event
                                        key={index}
                                        fields={event.data().fields}
                                        isPreview
                                    />
                                );
                            })}
                    <Link href={"/shows"}>
                        <Button
                            size="large"
                            component="a"
                            href="/shows"
                            variant="contained"
                            color="secondary"
                            sx={{ width: "fit-content", marginLeft: "30px" }}
                            endIcon={<ArrowRightAlt />}
                        >
                            See All Events
                        </Button>
                    </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default EventsPreview;
