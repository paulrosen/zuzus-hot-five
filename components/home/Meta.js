import Head from "next/head";
import { useRouter } from "next/router";
import { siteName } from "../../siteInfo";

const Meta = () => {
    const router = useRouter();
    const basePath = router.pathname.split("/")[1];
    return (
        <div>
            <Head>
                {router.pathname === "/" ? (
                    <title>{siteName}</title>
                ) : (
                    <title>{`${basePath.toUpperCase()} - ${siteName}`}</title>
                )}
                <meta
                    name="keywords"
                    content="music, grunge, pop, alternative, live music, concert, gig, guitar, rock, band, group, show"
                />
                <link rel="icon" href="/images/zuzuLogoCropped.png" />
                <link
                    rel="apple-touch-icon"
                    href="/images/zuzuLogoCropped.png"
                />
                <meta
                    name="description"
                    content="Basement Pop Cover Band"
                ></meta>
            </Head>
        </div>
    );
};

export default Meta;
