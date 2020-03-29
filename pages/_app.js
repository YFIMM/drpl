import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";
import {createStore} from "redux";
import MainLayout from "../components/MainLayout";
import reducer from "../reducers";

const LOLCHESS = ({Component, store}) => {
    return (
        <>
            <Provider store={store}>
                <Head>
                    <title>롤토체스</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Gotu|Nanum+Myeongjo&display=swap"
                          rel="stylesheet"/>
                    <script data-ad-client="ca-pub-7268777113992602" async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
                </Head>
                <body style={{
                    backgroundColor: "black",
                    margin: "0",
                    padding: "0",
                    boxSizing: "border-box",
                    color: "white",
                }}>
                <MainLayout>
                    <Component/>
                </MainLayout>
                </body>
            </Provider>
        </>
    );
};

LOLCHESS.propTypes = {
    Component: PropTypes.elementType.isRequired,
    store: PropTypes.object,
};

const configureStore = (initialState, options) => {
    const store = createStore(reducer, initialState);
    return store;
};

export default withRedux(configureStore)(LOLCHESS);