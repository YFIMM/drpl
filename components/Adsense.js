import React, {useEffect} from "react";

const Adsense = () => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);
    return (
        <>
            <ins className="adsbygoogle"
                 style={{display: "block"}}
                 data-ad-client='ca-pub-6526927663678536'
                 data-ad-format='auto'
            />
        </>
    );
};

export default Adsense;