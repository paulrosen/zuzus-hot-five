import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import useGetImages from "../../hooks/useGetImages";
import FirestoreListingItem from "./FirestoreGalleryListingItem";

const FirestoreGalleryListing = ({ folder, updateCounter, setUpdateCounter }) => {
    const [images] = useGetImages(updateCounter, folder);
    const [shownImages, setShownImages] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");

    const handleSearchChange = (e) => {
        setCurrentSearch(e.target.value)
        if (e.target.value === "") {
            setShownImages(images);
            return;
        }
        let newShownImages = images.filter((image) =>
            image.fields[0].value
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
        );
        setShownImages(newShownImages);
    };

    setTimeout(() => {
        if (!currentSearch && shownImages && shownImages.length === 0)
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
                Update item in {folder}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "end", gap: ".5em" }}>
                <Typography>Search by alt text:</Typography>
                <Input
                    color="secondary"
                    type="text"
                    onChange={handleSearchChange}
                />
            </Box>
            <br />
            {shownImages &&
                shownImages.length > 0 &&
                shownImages.map((image, index) => {
                    return (
                        <FirestoreListingItem
                            folder={folder}
                            key={index}
                            image={image}
                            updateCounter={updateCounter}
                            setUpdateCounter={setUpdateCounter}
                            setShownImages={setShownImages}
                        />
                    );
                })}
            {shownImages && shownImages.length === 0 && (
                <Typography>Nothing to show.</Typography>
            )}
        </Box>
    );
};

export default FirestoreGalleryListing;
