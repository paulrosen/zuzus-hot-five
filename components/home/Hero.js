import { Box, Typography } from "@mui/material";
import { heroContent } from "../../siteInfo";
import SocialMediaIcons from "../general/SocialMediaIcons";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroContent.image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Box
                sx={{
                    padding: "10vh 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h1">SNAC</Typography>
                <Typography variant="h1">KBAR</Typography>
                <br />
                <SocialMediaIcons />
            </Box>
        </Box>
    );
};

export default Hero;
