import React from "react";
import {useSelector} from "react-redux";

const Celestial = ({onClickTheChamp}) => {
    const {celestial, champNameToKOR, trait} = useSelector(state => state.traits);
    return (
        <>
            <div id="천상" style={{margin: "10px"}}>
                <div style={{width: "86px", height: "86px", float: "left"}}>
                    <p style={{
                        fontSize: "13px",
                        float: "left",
                        paddingTop: "15px",
                        paddingLeft: "15px",
                        color: "#b7ba35",
                        fontWeight: "700"
                    }}>
                        천상
                        <br/>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["천상"] >= 2 ? 1 : 0.3}`,
                            color: "white"
                        }}>(2)</span>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["천상"] >= 4 ? 1 : 0.3}`,
                            color: "white"
                        }}>(4)</span>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["천상"] >= 6 ? 1 : 0.3}`,
                            color: "white"
                        }}>(6)</span>
                    </p>
                </div>
                {celestial.map((v) => {
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
                                backgroundImage: `url(http://localhost:3000/assets/${v.imagePaths})`,
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

export default Celestial;