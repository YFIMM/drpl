import React, {useEffect} from "react";

const Adsense = () => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);
    return (
        <>
            <ins className="adsbygoogle"
                 style={{display: "block"}}
                 data-ad-client="ca-pub-7268777113992602"
                 data-ad-slot="4969624332"
                 data-ad-format='auto'
                 data-full-width-responsive="true"
            />
        </>
    );
};

export default Adsense;