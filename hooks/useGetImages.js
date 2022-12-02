import { useState, useEffect } from "react";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function useGetImages(updateCounter, folder, onlyShown) {
    const [images, setImages] = useState(null);

    useEffect(() => {
        async function getImages() {
            let q;
            if (onlyShown) {
                q = query(
                    collection(db, folder),
                    where("shown", "==", true),
                    orderBy("order", "asc")
                );
            } else {
                q = query(
                    collection(db, folder),
                    orderBy("order", "asc")
                );
            }
            const docsSnap = await getDocs(q);
            let newImages = [];
            docsSnap.docs.forEach((doc, index) => {
                const d = doc.data()
                d.id = doc.id
                newImages = [...newImages, d];
            });
            setImages(newImages);
        }

        getImages();
    }, [folder, updateCounter]);
    return [images];
}

export default useGetImages;
