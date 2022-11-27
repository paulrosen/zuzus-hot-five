import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();
    const currentPage = router.pathname.split("/")[1];
    return (
        <footer data-page={currentPage}>
            <Link href="/contact">
                <a data-contact variant="outlined" color="secondary">
                    contact
                </a>
            </Link>
        </footer>
    );
};

export default Footer;
