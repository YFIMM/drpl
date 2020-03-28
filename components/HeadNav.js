import {Menu} from "antd";
import Link from "next/link";
import React from "react";


const HeadNav = () => {
    return (
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
                        가수는 김나박이 방송은 도랄팤이
                    </a>
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export default HeadNav;