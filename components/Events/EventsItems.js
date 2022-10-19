import { Container } from "@mui/system";
import React from "react";
import EventItem from "./EventItem";

const EventsItems = ({ events }) => {
    return (
        <Container maxWidth="lg">
            {events &&
                events.map((event, index) => {
                    return (
                        <EventItem key={index} fields={event.data().fields} />
                    );
                })}
        </Container>
    );
};

export default EventsItems;
