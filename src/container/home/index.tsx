import React, { useState } from 'react'
import style from "./index.module.css"
import en from "../../utils/en.json"
import hn from "../../utils/hn.json"

const Home = () => {

    const [lang, setLang] = useState(en)

    const lanChange = () => {
        if (lang === en) {
            setLang(hn)
        } else {
            setLang(en)
        }
    }

    return (
        <div>
            <div className={style?.button} onClick={() => lanChange()}>Change</div>
            <div className={style?.home_roort}>{lang?.wellcome}</div>
        </div>
    );
};

export default Home