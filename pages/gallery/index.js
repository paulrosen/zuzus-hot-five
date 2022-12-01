import React, { useState } from "react";
import PageLayout from "../../components/layout/PageLayout";
import Gallery from "../../components/gallery/Gallery";
import useGetImages from "../../hooks/useGetImages";

const Projects = () => {
    const [updateCounter, setUpdateCounter] = useState(0);
    let [images] = useGetImages(updateCounter, "gallery");
    function filterImages() {
        if (!images) {
            setTimeout(filterImages, 100)
            return;
        }
        images = images.filter(image => {
            console.log(image)
            return image.fields[2] ? image.fields[2].value === "true" || image.fields[2].value === true : false;
        })    
    }
    filterImages()
    return (
        <PageLayout name="GALLERY">
            {images && <Gallery images={images} />}
        </PageLayout>
    );
};

export default Projects;
