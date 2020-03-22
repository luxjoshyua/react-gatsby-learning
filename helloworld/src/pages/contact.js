import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div style={{ color: `teal` }}>
        {/* Link component is for linking within a site, use a tags for external */}
        <Link to="/">Home</Link>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
    </div>
)