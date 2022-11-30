import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import useGetEvents from "../../hooks/useGetEvents";
import FirestoreEventsListingItem from "./FirestoreEventsListingItem";

const FirestoreListing = ({ folder, updateCounter, setUpdateCounter }) => {
    const [currentEvents, pastEvents] = useGetEvents(updateCounter, "events");
    const [shownEvents, setShownEvents] = useState([]);

    const handleSearchChange = (e) => {
        if (e.target.value === "") {
            setShownEvents(currentEvents);
            return;
        }
        let newShownCurrentEvents = currentEvents.filter((event) =>
            event
                .data()
                .fields[0].value.toLowerCase()
                .includes(e.target.value.toLowerCase())
        );
        let newShownPastEvents = pastEvents.filter((event) =>
            event
                .data()
                .fields[0].value.toLowerCase()
                .includes(e.target.value.toLowerCase())
        );
        let newShownEvents = newShownCurrentEvents.concat(newShownPastEvents);
        setShownEvents(newShownEvents);
    };
    setTimeout(() => {
        handleSearchChange({target: { value: ""}})
    }, 500)

    return (
        <Box
            sx={{
                backgroundColor: "lightblue",
                padding: "1em",
                borderRadius: "5px",
                height: "100%",
            }}
        >
            <Typography variant="h3" sx={{ color: "black" }}>
                Update Event
            </Typography>
            <Box sx={{ display: "flex", alignItems: "end", gap: ".5em" }}>
                <Typography>Search by event title:</Typography>
                <Input
                    color="secondary"
                    type="text"
                    onChange={handleSearchChange}
                />
            </Box>
            <br />
            {shownEvents &&
                shownEvents.length > 0 &&
                shownEvents.map((event, index) => {
                    return (
                        <FirestoreEventsListingItem
                            folder={folder}
                            key={index}
                            event={event}
                            updateCounter={updateCounter}
                            setUpdateCounter={setUpdateCounter}
                            setShownEvents={setShownEvents}
                        />
                    );
                })}
            {shownEvents && shownEvents.length === 0 && (
                <Typography>Nothing to show.</Typography>
            )}
        </Box>
    );
};

export default FirestoreListing;
