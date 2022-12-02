import React, { useState } from "react";
import PageLayout from "../../components/layout/PageLayout";
import Gallery from "../../components/gallery/Gallery";
import useGetImages from "../../hooks/useGetImages";

const Projects = () => {
    const [updateCounter, setUpdateCounter] = useState(0);
    let [images] = useGetImages(updateCounter, "gallery", true);
    return (
        <PageLayout name="GALLERY">
            {images && <Gallery images={images} />}
        </PageLayout>
    );
};

export default Projects;
