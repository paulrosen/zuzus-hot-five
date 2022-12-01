import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import useGetEvents from "../../hooks/useGetEvents";
import FirestoreEventsListingItem from "./FirestoreEventsListingItem";

const FirestoreEventsListing = ({ folder, updateCounter, setUpdateCounter }) => {
    const [currentEvents, pastEvents] = useGetEvents(updateCounter, "events");
    const [shownEvents, setShownEvents] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");

    const handleSearchChange = (e) => {
        const eventFilter = (event) => {
            const fields = event.data().fields;
            let field = fields.find(f => f.name === "Title")
            if (field && field.value.toLowerCase().includes(e.target.value.toLowerCase()))
                return true
            field = fields.find(f => f.name === "Venue")
            if (field && field.value.toLowerCase().includes(e.target.value.toLowerCase()))
                return true
            field = fields.find(f => f.name === "Description")
            if (field && field.value.toLowerCase().includes(e.target.value.toLowerCase()))
                return true
            return false;
        }
        setCurrentSearch(e.target.value)
        if (e.target.value === "") {
            setShownEvents(currentEvents);
            return;
        }
        let newShownCurrentEvents = currentEvents.filter((event) =>
            eventFilter(event)
        );
        let newShownPastEvents = pastEvents.filter((event) =>
            eventFilter(event)
        );
        let newShownEvents = newShownCurrentEvents.concat(newShownPastEvents);
        setShownEvents(newShownEvents);
    };
    setTimeout(() => {
        if (!currentSearch && shownEvents && shownEvents.length === 0)
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
            <Typography variant="h2" sx={{ color: "black" }}>
                Update Event
            </Typography>
            <Box sx={{ display: "flex", alignItems: "end", gap: ".5em" }}>
                <Typography>Search for event:</Typography>
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
                            key={event.id}
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

export default FirestoreEventsListing;
