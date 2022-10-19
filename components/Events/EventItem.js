import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";
import { ArrowRightAlt } from "@mui/icons-material";
import Image from "next/image";
import { eventsPreviewContent } from "../../siteInfo";
import { formatHtmlDate } from "../../utility/general.js";

const EventItem = ({ fields, isPreview }) => {
    const title = fields[0].value;
    const start = fields[1].value;
    const end = fields[2].value;
    const venue = fields[3].value;
    const time = fields[4].value;
    const description = fields[5].value;
    const website = fields[6].value;

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                    }}
                >
                    <Box>
                        <Typography variant="h2">{title}</Typography>
                        <Typography variant="h4">
                            {`${formatHtmlDate(start)}`}
                            {end && ` - ${formatHtmlDate(end)}`}
                        </Typography>
                        {
                            <Typography variant="h5">{`${venue}${
                                time && ","
                            } ${time}`}</Typography>
                        }
                        <br />
                        <Typography
                            sx={{
                                color: theme.palette.custom.darkM,
                            }}
                        >
                            {description}
                        </Typography>
                        <br />
                    </Box>
                    <Box sx={{ display: "flex", gap: "1em" }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            href={website}
                            size="large"
                            endIcon={<ArrowRightAlt />}
                        >
                            details
                        </Button>
                        {isPreview && (
                            <Button
                                variant="contained"
                                color="secondary"
                                href="/events"
                                size="large"
                                endIcon={<ArrowRightAlt />}
                            >
                                all events
                            </Button>
                        )}
                    </Box>
                </Box>

                {!isPreview && (
                    <Box sx={{ opacity: "70%", marginBottom: "1rem" }}>
                        <Image
                            src={eventsPreviewContent.dividerImage.url}
                            height={80}
                            width={1000}
                            alt="divider"
                        />
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default EventItem;
