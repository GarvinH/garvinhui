import React from "react"
import classes from "./Linkedin.module.css"
import text from "text/home.json"

class Linkedin extends React.Component {
    render() {
        return <button className="social-button">
            <a target="_blank"
                rel="noopener noreferrer"
                href={text.linkedin}
                className={classes.linkedin}>
                in
            </a>
        </button>
    }
}

export default Linkedin;
