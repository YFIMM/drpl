import React from "react";
import {useSelector} from "react-redux";

const Valkyrie = ({onClickTheChamp}) => {
    const {valkyrie, champNameToKOR, trait} = useSelector(state => state.traits);
    return (
        <>
            <div id="발키리" style={{margin: "10px"}}>
                <div style={{width: "86px", height: "86px", float: "left"}}>
                    <p style={{
                        fontSize: "13px",
                        float: "left",
                        paddingTop: "15px",
                        paddingLeft: "15px",
                        color: "#9d9283",
                        fontWeight: "700"
                    }}>
                        발키리
                        <br/>
                        <span style={{
                            fontSize: "16px",
                            opacity: `${trait["발키리"] >= 3 ? 1 : 0.3}`,
                            color: "white"
                        }}>(3)</span>
                    </p>
                </div>
                {valkyrie.map((v) => {
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

export default Valkyrie