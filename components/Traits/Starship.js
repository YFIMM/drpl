import React from "react";
import {useSelector} from "react-redux";

const Starship = ({onClickTheChamp}) => {
    const {starship, champNameToKOR, trait} = useSelector(state => state.traits);
    return (
        <>
            <div id="우주선" style={{margin: "10px"}}>
                <div style={{width: "86px", height: "86px", float: "left"}}>
                    <p style={{
                        fontSize: "13px",
                        float: "left",
                        paddingTop: "15px",
                        paddingLeft: "15px",
                        color: "#8e5428",
                        fontWeight: "700"
                    }}>
                        우주선
                        <br/>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["우주선"] >= 1 ? 1 : 0.3}`,
                            color: "white"
                        }}>(1)</span>
                    </p>
                </div>
                {starship.map((v) => {
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
                                margin: "0 9px", opacity: "0.5", cursor: "pointer",
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

export default Starship;