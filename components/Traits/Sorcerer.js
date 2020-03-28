import React from "react";
import {useSelector} from "react-redux";

const Sorcerer = ({onClickTheChamp}) => {
    const {sorcerer, champNameToKOR, trait} = useSelector(state => state.traits);
    return (
        <>
            <div id="마법사" style={{margin: "10px"}}>
                <div style={{width: "86px", height: "86px", float: "left"}}>
                    <p style={{
                        fontSize: "13px",
                        float: "left",
                        paddingTop: "15px",
                        paddingLeft: "15px",
                        color: "#b98da1",
                        fontWeight: "700"
                    }}>
                        마법사
                        <br/>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["마법사"] >= 2 ? 1 : 0.3}`,
                            color: "white"
                        }}>(2)</span>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["마법사"] >= 4 ? 1 : 0.3}`,
                            color: "white"
                        }}>(4)</span>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["마법사"] >= 6 ? 1 : 0.3}`,
                            color: "white"
                        }}>(6)</span>
                    </p>
                </div>
                {sorcerer.map((v) => {
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
                                backgroundImage: `url(http://localhost:${process.env.PORT || 3000}/assets/${v.imagePaths})`,
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

export default Sorcerer;