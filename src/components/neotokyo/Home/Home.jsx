import React from "react"
import classes from "./Home.module.css"
import Marquee from "react-fast-marquee"
import text from "text/home.json"

const japaneseName = ["ガ", "ー", "ビ", "ン ", "フ", "イ"];

class Home extends React.Component {
    render() {
        return <div style={{ width: "100%" }}>
            <div className={classes["name-sign"]}>
                <h1 className={`english ${classes["english-title"]}`}>Garvin H<span className={classes.flicker}>ui</span></h1>
                <h1 className={`japanese ${classes["japanese-title"]}`}>
                    {japaneseName.map((character, i) => <span className={`${classes["progressive-lightup"]} ${classes[`lightup-${i + 1}`]}`}>{character}</span>)}
                </h1>
            </div>
            <div className={`${classes["marquee-descriptions"]} ${classes["marquee-sign"]}`}>
                <div className={classes.crt}>
                    <hr className={classes["marquee-borders"]} />
                    <Marquee gradient={false} speed={250}>
                        {/* <div>TEST</div> */}
                        {text.descriptors.map(pair => <span style={{ marginRight: "256px" }}>
                            <span className={classes["marquee-english"]}>{pair.en}</span>・<span className={classes["marquee-japanese"]}>{pair.jp}</span>
                            </span>)}
                    </Marquee>
                    <hr className={classes["marquee-borders"]} />
                </div>
            </div>
        </div>
    }
}

export default Home;