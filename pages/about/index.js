import {
    Box,
    Button,
    Grid,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import SizedImage from "../../components/general/SizedImage";
import { aboutContent } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";

const index = () => {
    return (
        <PageLayout name="ABOUT">
            <Box className="section">
                <Grid container spacing={10} sx={{ position: "relative" }}>
                    <Grid item xs={12} md={6}>
                        <Box className="sticky">
                            <SizedImage
                                height="30rem"
                                width="100%"
                                image={aboutContent.image}
                            />
                            <Typography variant="caption">
                                {aboutContent.image.alt}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">
                            {aboutContent.name}
                        </Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {aboutContent.content}
                        </Typography>
                        <List dense>
                            <ListItem
                                sx={{
                                    listStyleType: "disc",
                                    display: "list-item",
                                }}
                            >
                                <ListItemText>
                                    <Typography>
                                        <strong>Pete Vigour</strong> is a
                                        multi-instrumentalist rooted in
                                        traditional music and
                                        turn-of-the-century genres. Longtime
                                        local music teacher, his band of 30
                                        years, Uncle Henry&apos;s Favorites, was
                                        featured on Garrison Keillor&apos;s A
                                        Prarie Home Companion. He also plays
                                        swing and Old Time musice with The
                                        Lovell Coleman Band.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                sx={{
                                    listStyleType: "disc",
                                    display: "list-item",
                                }}
                            >
                                <ListItemText>
                                    <Typography>
                                        Trombonist <strong>Gary Elwell</strong>{" "}
                                        spend 27 years in the Army Band in DC.
                                        He has performed with the
                                        Charlottesville and Waynesboro
                                        Symphonies and with Bill Carrol&apos;s
                                        BC Big Rhythm Sound of Lynchburg, VA.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                sx={{
                                    listStyleType: "disc",
                                    display: "list-item",
                                }}
                            >
                                <ListItemText>
                                    <Typography>
                                        For over 20 years, string and wind
                                        instrumentalist{" "}
                                        <strong>Aaron Olwell</strong> has been
                                        steeped in Irish and Appalachian
                                        traditional music, but recently
                                        discovered the thrills of trad-jazz and
                                        the clarinet. He works with his father
                                        making 19th c. style wood flutes for
                                        musicians around the world. Aaron also
                                        tours with The Big Dixie Swingers from
                                        New Orleans, and was a founding member
                                        of Boxcar Speakeasy.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                sx={{
                                    listStyleType: "disc",
                                    display: "list-item",
                                }}
                            >
                                <ListItemText>
                                    <Typography>
                                        Multi-instrumentalist{" "}
                                        <strong>Paul Rosen</strong> has a
                                        life-long passion for traditional jazz,
                                        blues, cajun, and roots music. He is a
                                        founding member of Bayou Faux Pas, The
                                        Buzzard Rock Bayou Boys, and Floorplay.
                                        He plays with Cajun Punk group, Jolie
                                        Fille and with Joel Rubin&apos;s UVa
                                        Klezmer Ensemble.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                sx={{
                                    listStyleType: "disc",
                                    display: "list-item",
                                }}
                            >
                                <ListItemText>
                                    <Typography>
                                        Bassist <strong>Sam Green</strong> is
                                        also a member of two powerhouse rock
                                        bands: Blue State and Second Opinion. He
                                        is also our sound engineer (
                                        <em>Thank you!</em>)
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                sx={{
                                    listStyleType: "disc",
                                    display: "list-item",
                                }}
                            >
                                <ListItemText>
                                    <Typography>
                                        <strong>Susanna Rosen</strong> (vocals,
                                        ukuleles) has toured with The Alex Caton
                                        Band and Acme Swing Mfg. Co. She
                                        currently also appears with The Bob
                                        Bennetta Trio and Jelly Street Jazz.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Box
                            sx={{
                                display: "flex",
                                gap: "1em",
                                marginTop: "1rem",
                            }}
                        >
                            {aboutContent.buttons.map((button, index) => {
                                return (
                                    <Link key={index} href={button.href}>
                                        <Button
                                            size="large"
                                            variant="contained"
                                        >
                                            {button.text}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
