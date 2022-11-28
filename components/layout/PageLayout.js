import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Meta from "../home/Meta";
import { eventsPreviewContent } from "../../siteInfo";
import DecorativeHeader from "../general/DecorativeHeader";
const PageLayout = ({ name, children }) => {
    return (
        <>
            {/* <Header /> */}
            <main id="main">
            <Box sx={{ padding: "8rem 0 0 0" }}>
                <Meta />
                <DecorativeHeader
                    image={eventsPreviewContent.bigDividerImage}
                    text={name}
                />
                <Container maxWidth="xl" sx={{ paddingTop: "4rem" }}>
                    {children}
                </Container>
            </Box>
            </main>
        </>
    );
};

export default PageLayout;
