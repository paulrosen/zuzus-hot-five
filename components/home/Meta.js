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
                    data-n-head="ssr"
                    data-hid="description"
                    name="description"
                    content="Charlottesville Virginia Hot Trad Jazz Band"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:card"
                    content="Charlottesville Virginia Hot Trad Jazz Band"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:title"
                    content="Zuzu's Hot Five"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:description"
                    content="Charlottesville Virginia Hot Trad Jazz Band"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:creator"
                    content="Susanna Rosen"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:image"
                    content="https://zuzushotfive.com/_nuxt/img/zuzu-artsy-header.806b53e.png"
                />
                {/* <meta data-n-head="ssr" name="og:title" content="Zuzu's Hot Five"> */}
                <meta data-n-head="ssr" name="og:type" content="website" />
                <meta
                    data-n-head="ssr"
                    name="og:url"
                    content="https://zuzushotfive.com"
                />
                <meta
                    data-n-head="ssr"
                    name="og:image"
                    content="https://zuzushotfive.com/_nuxt/img/zuzu-artsy-header.806b53e.png"
                />
                <meta
                    data-n-head="ssr"
                    name="og:description"
                    content="Charlottesville Virginia Hot Trad Jazz Band"
                />
                <meta
                    data-n-head="ssr"
                    name="og:site_name"
                    content="Zuzu's Hot Five"
                />
                <link
                    data-n-head="ssr"
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/favicons/apple-touch-icon.png"
                />
                <link
                    data-n-head="ssr"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicons/favicon-32x32.png"
                />
                <link
                    data-n-head="ssr"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicons/favicon-16x16.png"
                />
                <link
                    data-n-head="ssr"
                    rel="icon"
                    type="image/x-icon"
                    href="/images/favicons/favicon.ico"
                ></link>
            </Head>
        </div>
    );
};

export default Meta;
