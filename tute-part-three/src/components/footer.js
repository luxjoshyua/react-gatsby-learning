import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

const Footer = styled.footer `
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: light-blue;
    min-height: 80px;
`

const FooterInner = styled.div `
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterLink = styled.a `
    text-decoration: none;
    font-style: italic;
    color: lightgreen;
    font-size: 1.5rem;
    line-height: 2rem;

    ${FooterLink}:hover {
        color: black;
    }
`

const Footer = () => {
    return (
        <Footer>
        <FooterInner>
            <FooterLink href="https://www.google.com/">
                Link One
            </FooterLink>

        </FooterInner>
    </Footer>
    )
} 

export default Footer; 
  


