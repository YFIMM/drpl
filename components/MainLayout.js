import React from "react";
import {useSelector} from "react-redux";
import {Col, Menu, Row} from "antd";
import Link from "next/link";

const MainLayout = ({children}) => {
    const {trait} = useSelector(state => state.traits);
    return (
        <>
            <Menu mode="horizontal" style={{backgroundColor: "black"}}>
                <Menu.Item key="main-logo">
                    <Link href="/">
                        <a
                            style={{
                                fontFamily: "Gotu, sans-serif",
                                fontSize: "25px",
                                color: "white"
                            }}
                        >
                            DRPL
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="drpl" style={{float: "right"}}>
                    <Link href="/">
                        <a style={{
                            fontFamily: "Nanum Myeongjo, serif",
                            fontSize: "25px",
                            color: "white",
                        }}>
                            가수는 나얼박이 방송은 도랄팤이
                        </a>
                    </Link>
                </Menu.Item>
            </Menu>
            <div style={{margin: "10px auto", textAlign: "center", height: "90px"}}>
                <div style={{fontSize: "20px",}}>Total : {trait["total"].toString()}</div>
                <Row style={{margin: "10px"}}>
                    <Col xs={24} md={1}>
                        {trait["검사"] !== 0 ? <div style={{color: "#45ddba"}}>검사: {trait["검사"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["시공간"] !== 0 ?
                            <div style={{color: "#008bff"}}>시공간: {trait["시공간"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["마법사"] !== 0 ?
                            <div style={{color: "#b98da1"}}>마법사: {trait["마법사"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["반군"] !== 0 ? <div style={{color: "#357788"}}>반군: {trait["반군"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["사이버네틱스"] !== 0 ?
                            <div style={{color: "#343181"}}>사이버네틱스: {trait["사이버네틱스"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["별수호자"] !== 0 ?
                            <div style={{color: "#6da6b4"}}>별수호자: {trait["별수호자"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["암흑의별"] !== 0 ?
                            <div style={{color: "#00be00"}}>암흑의별: {trait["암흑의별"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["천상"] !== 0 ? <div style={{color: "#b7ba35"}}>천상: {trait["천상"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["선봉대"] !== 0 ?
                            <div style={{color: "#71c891"}}>선봉대: {trait["선봉대"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["사황"] !== 0 ? <div style={{color: "red"}}>사황: {trait["사황"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["메카파일럿"] !== 0 ? <div style={{color: "#801c1b"}}>메카파일럿: {trait["메카파일럿"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["발키리"] !== 0 ? <div style={{color: "#9d9283"}}>발키리: {trait["발키리"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["공허"] !== 0 ? <div style={{color: "#631fd4"}}>공허: {trait["공허"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["저격수"] !== 0 ? <div style={{color: "#f3e46e"}}>저격수: {trait["저격수"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["마나약탈자"] !== 0 ? <div style={{color: "#4346c1"}}>마나약탈자: {trait["마나약탈자"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["용병"] !== 0 ? <div style={{color: "#3c3f41"}}>용병: {trait["용병"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["폭파광"] !== 0 ? <div style={{color: "#b8bcbd"}}>폭파광: {trait["폭파광"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["우주선"] !== 0 ? <div style={{color: "#8e5428"}}>우주선: {trait["우주선"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["잠입자"] !== 0 ? <div style={{color: "#816a2f"}}>잠입자: {trait["잠입자"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["총잽이"] !== 0 ? <div style={{color: "#8f8d64"}}>총잽이: {trait["총잽이"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["우주해적"] !== 0 ? <div style={{color: "#797899"}}>우주해적: {trait["우주해적"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["수호자"] !== 0 ? <div style={{color: "#e70a0f"}}>수호자: {trait["수호자"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["신비술사"] !== 0 ? <div style={{color: "#66178b"}}>신비술사: {trait["신비술사"].toString()}</div> : null}
                    </Col>
                    <Col xs={24} md={1}>
                        {trait["싸움꾼"] !== 0 ? <div style={{color: "#ab6043"}}>싸움꾼: {trait["싸움꾼"].toString()}</div> : null}
                    </Col>
                </Row>
            </div>
            {children}
        </>
    );
};

export default MainLayout;