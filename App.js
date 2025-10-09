import React from "react";
import ReactDOM from "react-dom/client"

const heading=<h1 id="heading">JSX Heading</h1>
// const heading= React.createElement("h1",{id:"heading"},"Heading")


// React functional component below

const Title = ()=> (<h2 className="title">
    Title component</h2>)
const HeadingComponent= ()=>(
    <div>
    <Title/>
    <h1 className="header">JSX---- from funtional component</h1>
    </div>)


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)

//  use JSX from here
