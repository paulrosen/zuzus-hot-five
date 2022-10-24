import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useGetEvents from "../../hooks/useGetEvents";
import Event from "../Events/Event";
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
                    {currentEvents &&
                        currentEvents.map((event, index) => {
                            return (
                                <Event
                                    key={index}
                                    fields={event.data().fields}
                                />
                            );
                        })}
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        className="sticky"
                        sx={{
                            display: "flex",
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
                    {pastEvents &&
                        pastEvents.map((event, index) => {
                            return (
                                <Event
                                    key={index}
                                    fields={event.data().fields}
                                />
                            );
                        })}
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default Shows;
