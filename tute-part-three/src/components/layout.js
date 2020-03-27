import React from "react"
import { Link } from "gatsby";
import styled from "styled-components";
import img1 from "../assets/keithharing1.jpg";

const BodyCopy = styled.div `
    background-color: lightblue;
    border: 2px solid red;
    margin: 1rem .5rem;
`

const BodyCopyText = styled.p `
    font-size: 3rem;
    line-height: 3rem;
    color: yellow;
    font-weight: 500;
    padding: 1rem;
`

const BodyCopyImage = styled.img `
    padding-top: 2rem;
    border: 2px solid pink;
    max-width: 100%;
    background-color: mediumspringgreen;
`

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>    
)

export default ({ children }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h3 style={{display: `inline`}}>MySweetSite</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about">About</ListLink>
              <ListLink to="/contact">Contact</ListLink>
          </ul>
      </header>
      {children}
      <BodyCopy>
        <BodyCopyText>
           I'm learning CSS-in-JS here, practicing some very funky styling mods!
        </BodyCopyText>
         <BodyCopyImage src={img1} />
      </BodyCopy>
    </div>
)