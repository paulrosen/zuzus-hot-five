// Table of Contents:
// 1. Meta
// 2. Layout
// 3. Home
// 4. Services
// 5. Projects
// 6. Studio
// 7. About
// 8. Social Media
// 9. The Process
// 10. Contact

import lightTheme from "./styles/themes/theme";

// 1. Meta

const siteName = "Zuzu's Hot 5";
// const siteName = "Cosima Hewes";

// 2. Layout

const navbar = {
    buttonOne: {
        text: "book us!",
        href: "/contact",
        variant: "outlined",
    },
};

// 3. Home

const heroContent = {
    image: {
        url: "/images/zuzus5.webp",
        alt: "zuzu's hot five",
    },
};

const musicContent = {
    backgroundColor: "white",
    title: "1920's Trad Jazz",
    songs: [
        { url: "/songs/muskrat-ramble.mp3", name: "Muskrat Ramble" },
        {
            url: "/songs/i-cant-give-you-anything-but-love.mp3",
            name: "I Can't Give You Anything But Love",
        },
        { url: "/songs/dark-eyes.mp3", name: "Dark Eyes" },
        { url: "/songs/love.mp3", name: "Love" },
    ],
    content:
        "SNACKBAR plays a selection of excellent music ranging from the 60s through to the 2000s.",
    button: {
        text: "More Songs",
        href: "/music",
        variant: "contained",
    },
    images: [
        { url: "/images/zuzus2.webp", alt: "alt zuzus2 text" },
        { url: "/images/zuzus4.webp", alt: "alt zuzus2 text" },
        { url: "/images/zuzus6.webp", alt: "alt zuzus2 text" },
        { url: "/images/zuzus3.webp", alt: "alt zuzus2 text" },
        { url: "/images/zuzus7.webp", alt: "alt zuzus2 text" },
        { url: "/images/zuzus8.webp", alt: "alt zuzus2 text" },
    ],
};

const blockPhotoContentOne = {
    background: lightTheme.palette.background.accentLight,
    title: "Looking to jazz up your next event?",
    content: "Book Us Today!",
    button: {
        text: "Book Us!",
        href: "/contact",
        variant: "contained",
    },
    image: {
        url: "/images/zuzus1.webp",
        alt: "people dancing",
    },
};

const eventsPreviewContent = {
    image: { url: "/images/zuzus10.webp", alt: "alt snackbar2 text" },
    bigDividerImage: {
        url: "/images/eventsBorder.svg",
        alt: "alt snackbar2 text",
    },
    dividerImage: {
        url: "/images/separator.svg",
        alt: "alt snackbar2 text",
    },
    title: "Upcoming Events",
    buttons: [{ variant: "contained", href: "/shows", text: "All Shows" }],
};

// 4. Services
// 5. Projects

const galleryConfig = {
    categories: [],
    subCategories: [],
    fields: [{ name: "Title", type: "text", value: "" }],
};

const subscribeConfig = {
    website: "SICKTOOTH",
    category: "contact",
    fields: [{ name: "Email", type: "text", value: "" }],
};
const contactConfig = {
    website: "SICKTOOTH",
    category: "contact",
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "Comment", type: "text", value: "", multiline: true, rows: 4 },
    ],
};

// 7. About

// 7a. About

const aboutContent = {
    image: {
        url: "/images/zuzus4.webp",
        alt: "Zuzu's Hot Five",
    },
    name: "Zuzu's Hot 5",
    buttons: [
        {
            text: "Book us!",
            href: "/contact",
            variant: "contained",
        },
    ],
    content:
        "is Pete Vigour (acoustic guitar), Brandon Rose (trumpet, cornet), Aaron Ollwell (clarinet), Sam Green (upright bass), Paul Rosen (tenor banjo), Gary Elwell (trombone), and Susanna Rosen (voals, uke).\n\nYou'll hear stomps, Dixieland, blues, and ballads from the 1900s to the early 1930s. Think Fats Waller, Louis Armstrong's Hot 5s and 7s, and bessie Smith.",
};

const secondaryProfiles = [
    {
        image: { url: "/images/zuzus6.webp", alt: "alt zuzus6 text" },
        name: "Pete Vigour",
    },
    {
        image: { url: "/images/zuzus6.webp", alt: "alt zuzus6 text" },
        name: "Gary Elwell",
    },
    {
        image: { url: "/images/zuzus6.webp", alt: "alt zuzus6 text" },
        name: "Brandon Rose",
    },
    {
        image: { url: "/images/zuzus6.webp", alt: "alt zuzus6 text" },
        name: "Aaron Olwell",
    },
    {
        image: { url: "/images/zuzus6.webp", alt: "alt zuzus6 text" },
        name: "Paul Rosen",
    },
    {
        image: { url: "/images/zuzus6.webp", alt: "alt zuzus6 text" },
        name: "Sam Green",
    },
    {
        image: { url: "/images/zuzus6.webp", alt: "alt zuzus6 text" },
        name: "Susanna Rosen",
    },
];

// 7b. Studio

// 7c. Work

// 8. Social Media

// 9. Process
// 10. Contact

const eventConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Title", type: "text", value: "" },
        { name: "Start Date", type: "date", value: "" },
        { name: "End Date", type: "date", value: "" },
        { name: "Venue", type: "text", value: "" },
        { name: "Time", type: "text", value: "" },
        {
            name: "Description",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Venue Website", type: "text", value: "https://" },
        { name: "Facebook URL", type: "text", value: "https://" },
    ],
    timeUploaded: new Date(),
};

const pages = [
    {
        name: "shows",
        href: "/shows",
        subPages: [],
    },
    {
        name: "music",
        href: "/music",
        subPages: [],
    },
    {
        name: "gallery",
        href: "/gallery",
        subPages: [],
    },

    {
        name: "about",
        href: "/about",
        subPages: [],
    },
];

export {
    siteName,
    pages,
    navbar,
    galleryConfig,
    eventConfig,
    subscribeConfig,
    contactConfig,
    heroContent,
    aboutContent,
    secondaryProfiles,
    eventsPreviewContent,
    musicContent,
    blockPhotoContentOne,
};
