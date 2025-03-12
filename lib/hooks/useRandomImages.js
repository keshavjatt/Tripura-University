import { useState, useEffect } from "react";

const useRandomImages = (imageList) => {
    const [images, setImages] = useState({ firstImage: "", secondImage: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!imageList || imageList.length < 2) {
            setError("Image list must have at least two images.");
            setLoading(false);
            return;
        }

        const getTwoRandomImages = () => {
            let index1 = Math.floor(Math.random() * imageList.length);
            let index2;

            do {
                index2 = Math.floor(Math.random() * imageList.length);
            } while (index1 === index2);

            return {
                firstImage: imageList[index1].imgSrc,
                secondImage: imageList[index2].imgSrc,
            };
        };

        setImages(getTwoRandomImages());
        setLoading(false);
    }, [imageList]);

    return { images, loading, error };
};

export default useRandomImages;
