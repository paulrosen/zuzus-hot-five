import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import ContactForm from "../../components/contact/ContactForm";
import { contactConfig } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="Contact Form">
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            sx={{
                                textAlign: "center",
                                fontFamily: "Raleway",
                                fontWeight: "600",
                            }}
                        >
                            We&apos;ll take you there!
                        </Typography>
                        <br />
                        <Typography>
                            You name it&mdash;we&rsquo;ll kick your event into
                            high gear. Galas, balls, beer and cider tastings,
                            wine releases, street parties, barbecues, antique
                            car shows, speakeasies, and festivals. Imagine your
                            own little brass combo at your oyster roast,
                            birthday, garden party or Oktoberfest, serenading
                            your loved ones at Mother&rsquo;s or Father&rsquo;s
                            Day, or on the bandstand on the 4th of July.
                        </Typography>
                        <br />
                        <Typography>
                            Of course, The Hot 5 is always up for dances,
                            engagements, weddings, and anniversaries!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactForm config={contactConfig} />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
