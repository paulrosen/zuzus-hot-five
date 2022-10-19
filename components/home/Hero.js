import { Box, Typography } from "@mui/material";
import { heroContent } from "../../siteInfo";
import theme from "../../styles/themes/theme";
import SocialMediaIcons from "../general/SocialMediaIcons";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroContent.image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "0% 10%",
            }}
        >
            <Box
                sx={{
                    padding: "22vh 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="h1">
                    Z
                    <span
                        style={{
                            fontSize: "clamp(4.5rem, 15vw, 24rem)",
                            verticalAlign: "top",
                        }}
                    >
                        uzu
                    </span>
                    &#39;s
                </Typography>
                <Typography
                    variant="h3"
                    sx={{ color: theme.palette.primary.main }}
                >
                    Hot Five
                </Typography>
                <br />
                <SocialMediaIcons />
            </Box>
        </Box>
    );
};

export default Hero;
