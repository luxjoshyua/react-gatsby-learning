import React from "react";

// props are properties supplied to React components
// props are how you make components dynamic, as it's how
// you supply them with different data
// using {} is how you can embed any JS expression within JSX
export default props => <h1>{props.headerText}</h1>