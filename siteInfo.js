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

const siteName = "SNACKBAR";
// const siteName = "Cosima Hewes";

// 2. Layout

const navbar = {
    buttonOne: {
        text: "book us!",
        href: "/contact",
        variant: "outlined",
    },
};

const header = {
    buttonOne: {
        text: "Contact",
        href: "/contact",
        variant: "outlined",
    },
};
// 3. Home

const heroContent = {
    image: {
        url: "/images/snackbarhero.webp",
        alt: "Greg and Emily rocking out",
    },
    title: "YOUR NAME",
    highlights: [
        "This is the first highlight.",
        "This is the second highlight",
        "This is the third highlight",
        "This is the fourth highlight",
    ],
    buttons: [
        { variant: "contained", href: "/curriculumvitae", text: "View cv" },
        {
            variant: "contained",
            href: "/publications",
            text: "View publications",
        },
    ],
};

const homeGalleryContent = {
    images: [
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
    ],
};

const servicesContent = [
    {
        title: "Service One!",
        price: "$200",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
        ],
    },
    {
        title: "Service Two",
        price: "$400-800",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Four",
                secondaryText: "Feature Description",
            },
        ],
    },
    {
        title: "Service Three",
        price: "Custom",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Four",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Five",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Six",
                secondaryText: "Feature Description",
            },
        ],
    },
];

const blockTextOne = {
    backgroundColor: "white",
    title: "BLOCK TEXT ONE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};
const blockTextTwo = {
    backgroundColor: "white",
    title: "BLOCK TEXT TWO",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};
const blockTextThree = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "BLOCK TEXT THREE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};

const mosaicSectionContentOne = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "Mosaic Section One",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/snackbar3.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar4.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar5.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar6.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar7.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar8.webp", alt: "alt snackbar2 text" },
    ],
};
const mosaicSectionContentTwo = {
    backgroundColor: "white",
    title: "Mosaic Section Two",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
    ],
};
const mosaicSectionContentThree = {
    backgroundColor: "white",
    title: "Mosaic Section Three",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
    ],
};
const musicPreviewContent = {
    backgroundColor: "white",
    title: "Basement Grunge Pop",
    songs: [
        { url: "/songs/muskrat-ramble.mp3", name: "Muskrat Ramble" },
        { url: "/songs/muskrat-ramble.mp3", name: "Muskrat Ramble" },
        { url: "/songs/muskrat-ramble.mp3", name: "Muskrat Ramble" },
    ],
    content:
        "SNACKBAR plays a selection of excellent music ranging from the 60s through to the 2000s.",
    button: {
        text: "More Songs",
        href: "/music",
        variant: "contained",
    },
    images: [
        { url: "/images/snackbar3.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar4.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar5.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar6.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar7.webp", alt: "alt snackbar2 text" },
        { url: "/images/snackbar8.webp", alt: "alt snackbar2 text" },
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
        url: "/images/snackbarhero.webp",
        alt: "SNACKBAR rocking out",
    },
};
const blockPhotoContentTwo = {
    background: lightTheme.palette.background.accentLight,
    title: "BLOCK PHOTO TITLE",
    content: "Block Photo Two",
    button: {
        text: "Button Text",
        href: "/about",
        variant: "contained",
    },
    image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
};

const showcaseContentOne = {
    title: "Cool Album Title",
    subTitle: "Coming Soon:",
    image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
    quote: "This can be some flavor text, like a line from one of your songs",
    description:
        "This is the showcase description. This is where you can talk about what you're showcasing and tell people why they should be interested.",
    buttons: [
        { variant: "contained", href: "/music", text: "listen" },
        { variant: "contained", href: "https://google.com", text: "Preorder" },
    ],
};

const musicContent = {
    songs: [
        { url: "/songs/muskrat-ramble.mp3", name: "Muskrat Ramble" },
        { url: "/songs/muskrat-ramble.mp3", name: "Muskrat Ramble" },
        { url: "/songs/muskrat-ramble.mp3", name: "Muskrat Ramble" },
    ],
};

const eventsPreviewContent = {
    image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
    bigDividerImage: {
        url: "/images/decorativeBorder2.svg",
        alt: "alt snackbar2 text",
    },
    dividerImage: {
        url: "/images/eventsBorder2.svg",
        alt: "alt snackbar2 text",
    },
    title: "Upcoming Events",
    buttons: [{ variant: "contained", href: "/shows", text: "All Shows" }],
};

// 4. Services
// 5. Projects

const galleryStylesCategories = [
    {
        name: "Black and White",
        href: "/gallery/styles/black%20and%20white",
        image: {
            url: "/images/snackbar2.webp",
            alt: "alt gallery image text",
        },
    },
    {
        name: "Mixed Media",
        image: { url: "/images/snackbar2.webp", alt: "alt text" },
    },
    {
        name: "Acrylic",
        image: { url: "/images/snackbar2.webp", alt: "alt text" },
    },
    {
        name: "Watercolor",
        image: { url: "/images/snackbar2.webp", alt: "alt text" },
    },
];

const galleryCategories = [
    {
        name: "fiction",
        href: "/publications/fiction",
        image: {
            url: "/images/snackbar2.webp",
            alt: "alt gallery image text",
        },
        subCategories: [
            {
                name: "short story",
                href: "/publications/fiction/shortstories",
                image: {
                    url: "/images/snackbar2.webp",
                    alt: "alt gallery image text",
                },
            },
            {
                name: "flash fiction",
                href: "/publications/fiction/flash",
                image: { url: "/images/snackbar2.webp", alt: "alt text" },
            },
            {
                name: "novella",
                href: "/publications/fiction/novellas",
                image: { url: "/images/snackbar2.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "poetry",
        href: "/publications/poetry",
        image: { url: "/images/snackbar2.webp", alt: "alt text" },
        subCategories: [],
    },
    {
        name: "article",
        href: "/publications/articles",
        image: { url: "/images/snackbar2.webp", alt: "alt text" },
        subCategories: [
            {
                name: "editorial",
                href: "/publications/articles/editorials",
                image: { url: "/images/snackbar2.webp", alt: "alt text" },
            },
            {
                name: "letter",
                href: "/publications/articles/letters",
                image: { url: "/images/snackbar2.webp", alt: "alt text" },
            },
            {
                name: "opinion",
                href: "/publications/articles/letters",
                image: { url: "/images/snackbar2.webp", alt: "alt text" },
            },
        ],
    },
];

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
        url: "/images/snackbar1.webp",
        alt: "Greg and Emily",
    },
    name: "Good times, great music",
    buttons: [
        {
            text: "Book us!",
            href: "/contact",
            variant: "contained",
        },
    ],
    content:
        "SNACK BAR plays all of the best music that cool thirty-somethings love and cherish. Whether you grew up listening to classic rock, punk, or quote-unquote alternative, SNACK BAR is sure to play something that will get your foot tapping and your lips reaching for that limited-edition craft beer. But it isn't just about the music: All of our members have neck-length or longer hair, except for Dave; and Greg, our guitarist/vocalist, has that rustic three-day-old beard you've all come to expect and associate with meaningful jams.\n\nFounded during the pandemic of '21-22, SNACK BAR is comprised of the aforementioned Greg, Emily on the bass, Dave on the muthafuckin' drums, and Emma rocking the keyboard and the tambourine, sometimes simultaneously. The best part? SNACK BAR also accepts requests, though please be aware that at this time we are limited to only songs we already know, most of which appear in the set list already--but we're happy to play them again!",
};

const leadProfile = {
    image: {
        url: "/images/snackbar3.webp",
        alt: "Self-Portrait, by Henri Fantin-Latour",
    },
    name: "David Sorensen",
    content:
        "David Sorensen is a writer, musician, and web developer living in central Virginia. His stories have appeared in a number of literary magazines, including New Reader Magazine, The Squawk Back, Infinite Rust, and, depending on how gullible you are, Harper's and The New Yorker. His upcoming novel, Unconventional Desire, will probably never actually be released or even finished. \n\nFor anyone who is interested, David's favorite writers include David Foster Wallace, Dave Eggers, Douglas Coupland, Kurt Vonnegut, Thomas Mann, T.S. Eliot, and Albert Camus. He also likes trashy memoirs, by anyone.",
};

const secondaryProfiles = [
    {
        image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        name: "Designer One",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.",
    },
    {
        image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        name: "Designer Two",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
    },
    {
        image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        name: "Designer Three",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
    },
];

// 7b. Studio

const studioContent = {
    imageOne: {
        url: "/images/missionStatement.webp",
        alt: "Venus Adorned by the Graces, by Annibale Carracci",
    },
    imageTwo: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
    imageThree: {
        url: "/images/snackbar2.webp",
        alt: "alt snackbar2 text",
    },
    header: "This is what we believe",
    content:
        "Literature can be a lot of things, but in terms of what it should be, we believe that there is only one: entertaining. Your time is valuable, and there is an incredible amount of literature out there, so to create something entertaining is in that sense a sign of courtesy and respect. We respect you, reader, and we are grateful for your decision to read SICKTOOTH, and to honor that we will do our best to keep you interested. \n\nLiterature as art, though, has a few additional responsibilities. These of course will change, and should change, but as far as SICKTOOTH is concerned, we aim to publish poetry, fiction, creative non-fiction, and art that connects people to one another as well as furthers people's knowledge of themselves. After all, what is a story but a chance to walk in someone else's shoes, and what is a poem but a fresh perspective on the familiar? \n\nAnd beyond all this, we want to support artists and writers. The future of SICKTOOTH depends on them, as does that of the human race.",
};

// 7c. Work

const workContent = {
    imageOne: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
    imageTwo: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
    imageThree: {
        url: "/images/snackbar2.webp",
        alt: "alt snackbar2 text",
    },
    header: "Work Header",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
};

// 8. Social Media

// 9. Process
// 10. Contact

const processSteps = [
    {
        title: "Step Title",
        name: "STEP ONE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP TWO",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
        image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        reverse: true,
    },
    {
        title: "Step Title",
        name: "STEP THREE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
        image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP FOUR",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: { url: "/images/snackbar2.webp", alt: "alt snackbar2 text" },
        reverse: true,
    },
];

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
    ],
    timeUploaded: new Date(),
};
const contributorConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Name", type: "text", value: "" },
        {
            name: "Description",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};

const textSubmissionsConfig = {
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Genre", type: "text", value: "" },
        { name: "Previously Published", type: "text", value: "" },
        {
            name: "Comment",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};
const imageSubmissionsConfig = {
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Genre", type: "text", value: "" },
        { name: "Previously Published", type: "text", value: "" },
        {
            name: "Comment",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
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

const videos = [
    {
        title: "Video One",
        description: "Video Description",
        date: "January 1, 1969",
        href: "https://www.youtube.com/embed/CzNjdaXleEM",
    },
];

const books = [
    {
        title: "Book One",
        publisher: "Name of publisher",
        date: "2003",
        description:
            "This is the description of the book. It contains many interesting facts and entertaining anecdotes. The book I mean, not this description.",
        button: {
            href: "https://google.com",
            variant: "contained",
            color: "secondary",
            text: "view listing",
        },

        image: { url: "/images/hundred.webp", alt: "alt snackbar2 text" },
    },
    {
        title: "Book Two",
        publisher: "Name of publisher",
        date: "2003",
        description:
            "This is the description of the book. It contains many interesting facts and entertaining anecdotes. The book I mean, not this description.",
        button: {
            href: "https://google.com",
            variant: "contained",
            color: "secondary",
            text: "view listing",
        },
        image: { url: "/images/israel.webp", alt: "alt snackbar2 text" },
    },
    {
        title: "Book Three",
        publisher: "Name of publisher",
        date: "2003",
        description:
            "This is the description of the book. It contains many interesting facts and entertaining anecdotes. The book I mean, not this description.",
        button: {
            href: "https://google.com",
            variant: "contained",
            color: "secondary",
            text: "view listing",
        },
        image: { url: "/images/strange.webp", alt: "alt snackbar2 text" },
    },
];

const articles = [
    { title: "Article one", href: "https://google.com", date: "Jan 1, 2022" },
    { title: "Article two", href: "https://google.com", date: "Jan 1, 2022" },
    { title: "Article three", href: "https://google.com", date: "Jan 1, 2022" },
    { title: "Article four", href: "https://google.com", date: "Jan 1, 2022" },
    { title: "Article five", href: "https://google.com", date: "Jan 1, 2022" },
];

const publicationsContent = {
    title: "Books and Articles by Your Name",
    body: "This is the body of the page. It can be as long or as short as you like",
    image: { url: "/images/strange.webp", alt: "alt snackbar2 text" },
};

export {
    siteName,
    pages,
    navbar,
    header,
    videos,
    books,
    articles,
    galleryCategories,
    galleryStylesCategories,
    galleryConfig,
    eventConfig,
    subscribeConfig,
    contributorConfig,
    textSubmissionsConfig,
    imageSubmissionsConfig,
    contactConfig,
    heroContent,
    homeGalleryContent,
    blockTextOne,
    blockTextTwo,
    blockTextThree,
    blockPhotoContentOne,
    blockPhotoContentTwo,
    showcaseContentOne,
    mosaicSectionContentOne,
    mosaicSectionContentTwo,
    mosaicSectionContentThree,
    servicesContent,
    aboutContent,
    leadProfile,
    secondaryProfiles,
    studioContent,
    workContent,
    processSteps,
    publicationsContent,
    eventsPreviewContent,
    musicContent,
    musicPreviewContent,
};
