import { Box, Typography } from "@mui/material";
import { heroContent } from "../../siteInfo";
import theme from "../../styles/themes/theme";

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
                <div className="hero-title" aria-label="Zuzu's Hot Five">
                    <span className="init">Z</span>
                    <span className="word">uzu</span>
                    <span className="init">&#39;s</span>
                    <span className="sec">Hot 5</span>
                </div>
            </Box>
        </Box>
    );
};

export default Hero;
