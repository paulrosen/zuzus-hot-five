import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";

const GalleryImage = ({ image, category, subCategory }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9

    return (
        <Box sx={{ position: "relative" }}>
            <figure>
                <Image
                    src={image.URLs[0]}
                    blurDataURL={image}
                    placeholder="blur"
                    //has to be unoptimized to work with firebase storage, apparently
                    unoptimized
                    width="100"
                    height={100 / ratio}
                    onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                        setRatio(naturalWidth / naturalHeight)
                    }
                    layout="responsive"
                    alt={image.fields[0].value}
                />
                <Typography variant="caption">
                    <figcaption>
                        {image.fields[1] && image.fields[1].value
                            ? `Photo by ${image.fields[1].value}`
                            : ""}
                    </figcaption>
                </Typography>
            </figure>
            <Box
                component="a"
                href={image.URLs[0]}
                sx={{
                    padding: "1em",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    opacity: "0",
                    transition: "300ms",
                    "&:hover": {
                        opacity: "100%",
                    },
                }}
            >
                <ArrowForward sx={{ color: "white", fontSize: "40px" }} />
            </Box>
        </Box>
    );
};

export default GalleryImage;
