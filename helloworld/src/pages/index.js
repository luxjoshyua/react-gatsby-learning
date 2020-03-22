import React from "react"
// import the link component
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
 <div style={{ color: `purple`}}>
     {/* use the component, define the pathname */}
     <Link to="/contact/">Contact</Link>
     {/* import the Header component */}
     <Header headerText="Hello Gatsby!" />
     <p>What a world we live in!</p>
     <img src="https://source.unsplash.com/random/400x200" alt="Random unsplash" />
</div>
)


