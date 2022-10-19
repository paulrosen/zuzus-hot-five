import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useGetEvents from "../../hooks/useGetEvents";
import EventsItems from "../Events/EventsItems";
import PageLayout from "../layout/PageLayout";

const Shows = () => {
    const [currentEvents, pastEvents] = useGetEvents("events");
    return (
        <PageLayout name="SHOWS">
            <Container maxWidth="lg">
                <Grid
                    container
                    className="section"
                    spacing={4}
                    sx={{ position: "relative" }}
                >
                    <Grid item xs={12} md={5}>
                        <Typography
                            className="sticky"
                            variant="h2"
                            component="body1"
                            sx={{ marginBottom: ".5em" }}
                        >
                            Upcoming:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        {currentEvents && (
                            <EventsItems events={currentEvents} />
                        )}
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography
                            className="sticky"
                            variant="h2"
                            component="body1"
                            sx={{ marginBottom: ".5em" }}
                        >
                            Past:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        {pastEvents && <EventsItems events={pastEvents} />}
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default Shows;
