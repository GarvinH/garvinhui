import React from "react"
import classes from "./Home.module.css"

const japaneseName = ["ガ", "ー", "ビ", "ン ", "フ", "イ"];

class Home extends React.Component {
    render() {
        return <div>
            <div className={classes["name-sign"]}>
                <h1 className={`english ${classes["english-title"]}`}>Garvin H<span className={classes.flicker}>ui</span></h1>
                <h1 className={`japanese ${classes["japanese-title"]}`}>
                    {japaneseName.map((character, i) => <span className={`${classes["progressive-lightup"]} ${classes[`lightup-${i+1}`]}`}>{character}</span>)}
                </h1>
            </div>
        </div>
    }
}

export default Home;