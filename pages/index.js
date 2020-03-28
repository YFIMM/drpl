import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import AdSense from 'react-adsense';
import {Col, Row} from "antd";
import Blademaster from "../components/Traits/Blademaster";
import Chrono from "../components/Traits/Chrono";
import Sorcerer from "../components/Traits/Sorcerer";
import Rebel from "../components/Traits/Rebel";
import Cybernetic from "../components/Traits/Cybernetic";
import StarGuardian from "../components/Traits/StarGuardian";
import DarkStar from "../components/Traits/DarkStar";
import Celestial from "../components/Traits/Celestial";
import Vanguard from "../components/Traits/Vanguard";
import Infiltrator from "../components/Traits/Infiltrator";
import Blaster from "../components/Traits/Blaster"
import SpacePirate from "../components/Traits/SpacePirate";
import Protector from "../components/Traits/Protector";
import Mystic from "../components/Traits/Mystic";
import Brawler from "../components/Traits/Brawler";
import ManaReaver from "../components/Traits/ManaReaver";
import Void from "../components/Traits/Void";
import MechPilot from "../components/Traits/MechPilot";
import Valkyrie from "../components/Traits/Valkyrie";
import Sniper from "../components/Traits/Sniper";
import Demolitionist from "../components/Traits/Demolitionist";
import Mercenary from "../components/Traits/Mercenary";
import Starship from "../components/Traits/Starship";
import General from "../components/Traits/General";
import {MINUS_TOTAL, MINUS_TRAIT, PLUS_TOTAL, PLUS_TRAIT} from "../reducers/traits";

const Home = () => {
    const dispatch = useDispatch();

    const onClickTheChamp = useCallback((champ) => () => {
        const theChamps = document.querySelectorAll(`#${champ}`);
        let plusCount = 0;
        let minusCount = 0;
        for (let i = 0; i < theChamps.length; i++) {
            const parentID = theChamps[i].parentNode.id;
            console.log("Test : ", theChamps[i].parentNode.id);
            if (theChamps[i].style.opacity === "4") {
                theChamps[i].style.opacity = 0.5;
                dispatch({
                    type: MINUS_TRAIT,
                    data: parentID,
                });
                if (minusCount === 0) {
                    dispatch({
                        type: MINUS_TOTAL,
                    });
                    minusCount += 1;
                }
                continue;
            } else {
                theChamps[i].style.opacity = 4;
                dispatch({
                    type: PLUS_TRAIT,
                    data: parentID,
                });
                if (plusCount === 0) {
                    dispatch({
                        type: PLUS_TOTAL,
                    });
                    plusCount += 1;
                }
                continue;
            }
        }
    }, []);

    return (
        <>
            <Row>
                <Col xs={24} md={12}>
                    <Row>
                        <Blademaster onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Chrono onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Sorcerer onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Rebel onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Cybernetic onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <StarGuardian onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <DarkStar onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Celestial onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Vanguard onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <General onClickTheChamp={onClickTheChamp}/>
                    </Row>
                </Col>
                <Col xs={24} md={12}>
                    <Row>
                        <MechPilot onClickTheChamp={onClickTheChamp}/>
                        <Valkyrie onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Void onClickTheChamp={onClickTheChamp}/>
                        <Sniper onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <ManaReaver onClickTheChamp={onClickTheChamp}/>
                        <Mercenary onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Demolitionist onClickTheChamp={onClickTheChamp}/>
                        <Starship onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Infiltrator onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Blaster onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <SpacePirate onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Protector onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Mystic onClickTheChamp={onClickTheChamp}/>
                    </Row>
                    <Row>
                        <Brawler onClickTheChamp={onClickTheChamp}/>
                    </Row>
                </Col>
            </Row>
            <div style={{height: "250px",textAlign:"center",padding:"30px auto"}}>
                <div style={{marginTop:"90px"}}>
                    Made by YFIMM
                    (yfimm1275@gmail.com)
                </div>
                {/*<AdSense.Google*/}
                {/*    client="ca-pub-2491090505738410"*/}
                {/*    slot="7806394673"*/}
                {/*    format="auto"*/}
                {/*    responsive="true"*/}
                {/*/>*/}
            </div>
        </>
    );
};

export default Home;