import { useState, useEffect } from "react";
import {
    collection,
    query,
    orderBy,
    getDocs,
    where,
    limit,
} from "firebase/firestore";
import { db } from "../firebase";

function useGetEvents(folder) {
    const [currentEvents, setCurrentEvents] = useState(null);
    const [pastEvents, setPastEvents] = useState(null);

    useEffect(() => {
        async function getEvents() {
            const today = new Date().toJSON().slice(0, 10);

            const eventsRef = collection(db, "events");
            const q1 = query(
                eventsRef,
                orderBy("startDate", "asc"),
                where("startDate", ">=", today),
                limit(20)
            );
            const q2 = query(
                eventsRef,
                orderBy("startDate", "asc"),
                where("startDate", "<", today),
                limit(20)
            );

            const currentEventsQuery = await getDocs(q1);
            const pastEventsQuery = await getDocs(q2);
            let currentEvents = [];
            let pastEvents = [];
            currentEventsQuery.docs.forEach((doc, index) => {
                currentEvents = [...currentEvents, doc];
            });
            pastEventsQuery.docs.forEach((doc, index) => {
                pastEvents = [...pastEvents, doc];
            });
            setCurrentEvents(currentEvents);
            setPastEvents(pastEvents);
        }

        getEvents();
    }, [folder]);
    return [currentEvents, pastEvents];
}

export default useGetEvents;
