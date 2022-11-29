import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";
import Link from "next/link";
import { formatHtmlDate } from "../../utility/general";
import { eventsPreviewContent } from "../../siteInfo";
import NativeImage from "../../components/general/NativeImage";
import Image from "next/image";

const EventItem = ({ fields, isPreview }) => {
    const fieldObj = {}
    if (fields) {
        fields.forEach(field => {
            fieldObj[field.name.toLowerCase()] = field.value
        })
    }
    const title = fieldObj.title
    const subtitle = fieldObj.subtitle
    const venue = fieldObj.venue
    const address = fieldObj.address
    const date = fieldObj.date ? fieldObj.date : "1970-01-01"
    const time = fieldObj.time
    const description = fieldObj.description
    const website = fieldObj['venue website']
    const facebook = fieldObj['facebook url']

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    margin: { xs: "0", md: "0 2rem" },
                }}
            >
                <Box>
                    <Typography
                        variant="h3"
                        component="p"
                        sx={{ fontWeight: "500", fontFamily: "Raleway" }}
                    >
                        {title}
                    </Typography>
                    <Typography>{venue}</Typography>
                    <Typography>{`${formatHtmlDate(date)}, ${time}`}</Typography>

                    <br />
                    <Typography>{description}</Typography>
                    <br />
                </Box>
                <Typography
                    sx={{
                        fontStyle: "italic",
                        marginBottom: ".5em",
                        fontWeight: "300",
                    }}
                >
                    {address}
                </Typography>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                {website ? (
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1em",
                            textDecoration: "underline",
                        }}
                    >
                        <Link href={website}>Venue Website</Link>
                    </Box>
                     ) : ''}
                         {facebook ? (
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1em",
                            textDecoration: "underline",
                        }}
                    >
                       <Link href={facebook}>Facebook Page</Link>
                    </Box>
                     ) : ''}
                </Box>
            </Box>
            <Box sx={{ opacity: "70%", margin: "1rem 0" }}>
                <Image
                    src={eventsPreviewContent.dividerImage.url}
                    height={100}
                    width={1000}
                    alt="divider"
                />
            </Box>
        </Box>
    );
};

export default EventItem;
