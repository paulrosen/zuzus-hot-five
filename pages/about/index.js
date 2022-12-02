import {
    Box,
    Grid,
    Link,
    List,
    Typography,
} from "@mui/material";
import SizedImage from "../../components/general/SizedImage";
import { aboutContent, secondaryProfiles } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import { Container } from "@mui/system";
import BioItem from "../../components/about/BioItem";

const index = () => {
    return (
        <PageLayout name="ABOUT">
            <Grid container spacing={10} sx={{ position: "relative" }}>
                <Grid item xs={12} md={6}>
                    <Box className="sticky">
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={aboutContent.image}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h2">{aboutContent.name}</Typography>
                    <br />
                    <Typography sx={{ whiteSpace: "pre-wrap" }}>
                        {aboutContent.content}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1em",
                            marginTop: "1rem",
                        }}
                    >
                        {aboutContent.buttons.map((button, index) => {
                            return (
                                <Link className="about-book" key={index} href={button.href}>
                                    {button.text}
                                </Link>
                            );
                        })}
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Container maxWidth="md">
                        <List className="bio-list" dense>
                        {secondaryProfiles.map((profile) => {
                            return (
                            <BioItem
                                key="profile.alt"
                                profile={profile}
                            ></BioItem>
                            );
                        })}
                        </List>
                    </Container>
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default index;
