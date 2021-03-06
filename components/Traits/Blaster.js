import React from "react";
import {useSelector} from "react-redux";

const Blaster = ({onClickTheChamp}) => {
    const {blaster, champNameToKOR, trait} = useSelector(state => state.traits);
    return (
        <>
            <div id="총잽이" style={{margin: "10px"}}>
                <div style={{width: "86px", height: "86px", float: "left"}}>
                    <p style={{
                        fontSize: "13px",
                        float: "left",
                        paddingTop: "15px",
                        paddingLeft: "15px",
                        color: "#8f8d64",
                        fontWeight: "700"
                    }}>
                        총잽이
                        <br/>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["총잽이"] >= 2 ? 1 : 0.3}`,
                            color: "white"
                        }}>(2)</span>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["총잽이"] >= 4 ? 1 : 0.3}`,
                            color: "white"
                        }}>(4)</span>
                    </p>
                </div>
                {blaster.map((v) => {
                    const name = v.imagePaths.replace(".png", "");
                    return (
                        <div
                            id={name}
                            onClick={onClickTheChamp(name)}
                            key={v.id}
                            style={{
                                float: "left",
                                width: "86px", height: "86px", border: `3px solid ${v.color}`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundImage: `url(https://s3.ap-northeast-2.amazonaws.com/dorapalee/assets/${v.imagePaths})`,
                                margin: "0 3px", opacity: "0.5", cursor: "pointer",
                            }}
                        >
                            <span style={{color: "white", fontWeight: "600"}}>{champNameToKOR[name]}</span>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Blaster;