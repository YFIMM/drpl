import React from "react";
import {useSelector} from "react-redux";

const MechPilot = ({onClickTheChamp}) => {
    const {mechPilot, champNameToKOR, trait} = useSelector(state => state.traits);
    return (
        <>
            <div id="메카파일럿" style={{margin: "10px"}}>
                <div style={{width: "86px", height: "86px", float: "left"}}>
                    <p style={{
                        fontSize: "13px",
                        float: "left",
                        paddingTop: "15px",
                        paddingLeft: "15px",
                        color: "#801c1b",
                        fontWeight: "700"
                    }}>
                        메카 파일럿
                        <br/>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["메카파일럿"] >= 3 ? 1 : 0.3}`,
                            color: "white"
                        }}>(3)</span>
                    </p>
                </div>
                {mechPilot.map((v) => {
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

export default MechPilot;