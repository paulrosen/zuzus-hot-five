import {
    Box,
    Button,
    Grid,
    Link,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import SizedImage from "../../components/general/SizedImage";
import { aboutContent, secondaryProfiles } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import Profile from "../../components/about/Profile";
import { Container } from "@mui/system";

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
                        <Typography variant="caption">
                            {aboutContent.image.alt}
                        </Typography>
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
                        <List dense sx={{ paddingLeft: "1rem" }}>
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
                                        Prairie Home Companion. He also plays
                                        swing and Old Time music with The
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
                                    <strong>Brandon Rose</strong> has provided his excellent trumpet and cornet skills for Baaba Seth, Conjunto Sason, The UVA Jazz Ensemble, The Crozet Symphony, and Mami Gato. He also plays with The Queen City Porch Swingers.
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
                                        Band and ACME Swing Mfg. Co. She
                                        currently also appears with The Bob
                                        Bennetta Trio and Jelly Street Jazz.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Container>
                </Grid>
                {/* <Grid item xs={12} md={4}>
                    <Profile profile={secondaryProfiles[0]}>
                        <Typography>
                            <strong>Pete Vigour</strong> is a
                            multi-instrumentalist rooted in traditional music
                            and turn-of-the-century genres. Longtime local music
                            teacher, his band of 30 years, Uncle Henry&apos;s
                            Favorites, was featured on Garrison Keillor&apos;s A
                            Prarie Home Companion. He also plays swing and Old
                            Time musice with The Lovell Coleman Band.
                        </Typography>
                    </Profile>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Profile profile={secondaryProfiles[1]}>
                        <Typography>
                            Trombonist <strong>Gary Elwell</strong> spend 27
                            years in the Army Band in DC. He has performed with
                            the Charlottesville and Waynesboro Symphonies and
                            with Bill Carrol&apos;s BC Big Rhythm Sound of
                            Lynchburg, VA.
                        </Typography>
                    </Profile>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Profile profile={secondaryProfiles[0]}>
                        <Typography>
                            For over 20 years, string and wind instrumentalist{" "}
                            <strong>Aaron Olwell</strong> has been steeped in
                            Irish and Appalachian traditional music, but
                            recently discovered the thrills of trad-jazz and the
                            clarinet. He works with his father making 19th c.
                            style wood flutes for musicians around the world.
                            Aaron also tours with The Big Dixie Swingers from
                            New Orleans, and was a founding member of Boxcar
                            Speakeasy.
                        </Typography>
                    </Profile>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Profile profile={secondaryProfiles[0]}>
                        <Typography>
                            Multi-instrumentalist <strong>Paul Rosen</strong>{" "}
                            has a life-long passion for traditional jazz, blues,
                            cajun, and roots music. He is a founding member of
                            Bayou Faux Pas, The Buzzard Rock Bayou Boys, and
                            Floorplay. He plays with Cajun Punk group, Jolie
                            Fille and with Joel Rubin&apos;s UVa Klezmer
                            Ensemble.
                        </Typography>
                    </Profile>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Profile profile={secondaryProfiles[0]}>
                        <Typography>
                            Bassist <strong>Sam Green</strong> is also a member
                            of two powerhouse rock bands: Blue State and Second
                            Opinion. He is also our sound engineer (
                            <em>Thank you!</em>)
                        </Typography>
                    </Profile>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Profile profile={secondaryProfiles[0]}>
                        <Typography>
                            <strong>Susanna Rosen</strong> (vocals, ukuleles)
                            has toured with The Alex Caton Band and ACME Swing
                            Mfg. Co. She currently also appears with The Bob
                            Bennetta Trio and Jelly Street Jazz.
                        </Typography>
                    </Profile>
                </Grid> */}
            </Grid>
        </PageLayout>
    );
};

export default index;

{
    /* <Typography variant="h3">{aboutContent.name}</Typography>
                    <br />
                    <Typography sx={{ whiteSpace: "pre-wrap" }}>
                        {aboutContent.content}
                    </Typography>
                    <List dense sx={{ paddingLeft: "1rem" }}>
                        <ListItem
                            sx={{
                                listStyleType: "disc",
                                display: "list-item",
                            }}
                        >
                            <ListItemText>
                                <Typography>
                                    <strong>Pete Vigour</strong> is a
                                    multi-instrumentalist rooted in traditional
                                    music and turn-of-the-century genres.
                                    Longtime local music teacher, his band of 30
                                    years, Uncle Henry&apos;s Favorites, was
                                    featured on Garrison Keillor&apos;s A Prarie
                                    Home Companion. He also plays swing and Old
                                    Time musice with The Lovell Coleman Band.
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
                                    spend 27 years in the Army Band in DC. He
                                    has performed with the Charlottesville and
                                    Waynesboro Symphonies and with Bill
                                    Carrol&apos;s BC Big Rhythm Sound of
                                    Lynchburg, VA.
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
                                    steeped in Irish and Appalachian traditional
                                    music, but recently discovered the thrills
                                    of trad-jazz and the clarinet. He works with
                                    his father making 19th c. style wood flutes
                                    for musicians around the world. Aaron also
                                    tours with The Big Dixie Swingers from New
                                    Orleans, and was a founding member of Boxcar
                                    Speakeasy.
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
                                    <strong>Paul Rosen</strong> has a life-long
                                    passion for traditional jazz, blues, cajun,
                                    and roots music. He is a founding member of
                                    Bayou Faux Pas, The Buzzard Rock Bayou Boys,
                                    and Floorplay. He plays with Cajun Punk
                                    group, Jolie Fille and with Joel
                                    Rubin&apos;s UVa Klezmer Ensemble.
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
                                    Bassist <strong>Sam Green</strong> is also a
                                    member of two powerhouse rock bands: Blue
                                    State and Second Opinion. He is also our
                                    sound engineer (<em>Thank you!</em>)
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
                                    Band and ACME Swing Mfg. Co. She currently
                                    also appears with The Bob Bennetta Trio and
                                    Jelly Street Jazz.
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </List> */
}
