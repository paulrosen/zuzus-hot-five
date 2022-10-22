import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useGetEvents from "../../hooks/useGetEvents";
import EventsItems from "../Events/EventsItems";
import PageLayout from "../layout/PageLayout";

const Shows = () => {
    const [currentEvents, pastEvents] = useGetEvents("events");
    return (
        <PageLayout name="SHOWS">
            <Grid
                container
                className="section"
                spacing={4}
                sx={{ position: "relative" }}
            >
                <Grid item xs={12} md={5}>
                    <Box
                        className="sticky"
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "end" },
                            // paddingTop: "1rem",
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="body1"
                            sx={{
                                marginBottom: ".5em",
                                fontSize: { xs: "2rem", md: "4rem" },
                            }}
                        >
                            Upcoming:
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    {currentEvents && <EventsItems events={currentEvents} />}
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        className="sticky"
                        sx={{
                            display: "flex",
                            paddingTop: "1rem",
                            justifyContent: { xs: "center", md: "end" },
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="body1"
                            sx={{
                                marginBottom: ".5em",
                                fontSize: { xs: "2rem", md: "4rem" },
                            }}
                        >
                            Past:
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    {pastEvents && <EventsItems events={pastEvents} />}
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default Shows;
