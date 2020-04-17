import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import styled from 'styled-components'

const Body = styled.body`
margin: 0;
`

const Html = styled.html`
width: 100%;
position: absolute;
overflow-x: hidden;
overflow-y: hidden;
-webkit-overflow-scrolling: auto;
`

export default class extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage();
        const styles = flush();
        return { html, head, errorHtml, chunks, styles };
    }

    render() {
        return (
            <Html>
                <Head />
                <Body>
                    <Main />
                    <NextScript />
                </Body>
            </Html>
        );
    }
}