import React from "react"
import classes from "./Home.module.css"
import Marquee from "react-fast-marquee"
import text from "text/home.json"
import Linkedin from "./logo/Linkedin/Linkedin";
import Github from "./logo/Github/Github";

const japaneseName = ["ガ", "ー", "ビ", "ン ", "フ", "イ"];

class Home extends React.Component {
    render() {

        return <div style={{ width: "100%", height: "100%" }}>
            <div className={classes["name-sign"]}>
                <h1 className={`english ${classes["english-title"]}`}>Garvin H<span className={classes.flicker}>ui</span></h1>
                <h1 className={`japanese ${classes["japanese-title"]}`}>
                    {japaneseName.map((character, i) => <span key={i} className={`${classes["progressive-lightup"]} ${classes[`lightup-${i + 1}`]}`}>{character}</span>)}
                </h1>
            </div>
            <div className={`${classes["marquee-descriptions"]} ${classes["marquee-sign"]}`}>
                <div className={classes.crt}>
                    <hr className={classes["marquee-borders"]} />
                    <Marquee gradient={false} speed={250}>
                        {text.descriptors.map((pair, ix) => <span key={ix} style={{ marginRight: "256px" }}>
                            <span className={classes["marquee-english"]}>{pair.en}</span>・<span className={classes["marquee-japanese"]}>{pair.jp}</span>
                        </span>)}
                    </Marquee>
                    <hr className={classes["marquee-borders"]} />
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", flexDirection: "column", marginTop: 32}}>
                <h4>
                    <a
                        href="https://drive.google.com/file/d/1QOW_dkKfpCT_TsJds_hiv2pR7BTqBcmT/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {text.resume.en}・{text.resume.jp}
                    </a>
                </h4>
                <h4>
                    {text.phone}
                </h4>
                <h4>
                    {text.email}
                </h4>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 32 }}>
                <Linkedin />
                <Github />
            </div>
        </div>
    }
}

export default Home;