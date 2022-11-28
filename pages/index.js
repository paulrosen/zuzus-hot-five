import { Box } from "@mui/material";
import { Container } from "@mui/system";

import Meta from "../components/home/Meta";
import Hero from "../components/home/Hero";
import { blockPhotoContentOne, musicPreviewContent } from "../siteInfo";
import AboutPreview from "../components/home/AboutPreview";
import EventsPreview from "../components/home/EventsPreview";
import BlockPhoto from "../components/general/BlockPhoto";
import MusicPreview from "../components/home/MusicPreview";

export default function Home() {
    return (
        <main id="main">
        <Box>
            <Meta />
            <Hero />
            <Container maxWidth="xl" disableGutters>
                <section>
                <MusicPreview
                    musicPreviewContent={musicPreviewContent}
                    variation={1}
                />
                </section>
                <section>
                <EventsPreview />
                </section>
                <section>
                <AboutPreview />
                </section>
                <BlockPhoto blockPhotoContent={blockPhotoContentOne} />
            </Container>
        </Box>
        </main>
    );
}
