import React from "react";
import styled from "styled-components";
import styles from "./about-css-modules.module.css";
import Container from "../components/container";

console.table(styles);


const Button = styled.button `
    background-color: lightblue;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    margin-top: 1em;
`; 


const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
            <Button>Here is my CSS-in-JS button</Button>
        </div>
    </div>
)

export default () => (
    <Container>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
        <User 
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User 
             username="Bob Smith"
             avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
             excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
    </Container>
)

