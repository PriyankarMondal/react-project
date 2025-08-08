import React, { useState } from 'react'
import style from "./index.module.css"
import en from "../../utils/en.json"
import hn from "../../utils/hn.json"
import { Link } from 'react-router-dom';

const Home = (props: any) => {

    const [lang, setLang] = useState(en)

    const [age, setAge] = useState("19")

    const lanChange = () => {
        if (lang === en) {
            setLang(hn)
        } else {
            setLang(en)
        }
    }

    let data = props?.homeData

    // const Cdata = (v: any) => {
    //     return (
    //         <div>
    //             <p>name: {v?.name}</p>
    //             <p>age: {v?.age}</p>
    //             <p>gender: {v?.gender}</p>
    //             <Cdata data={v?.data}/>
    //         </div>
    //     )
    // }

    return (
        <div>
            {/* <div className={style?.button} onClick={() => lanChange()}>Change</div>
            <div className={style?.home_roort}>{lang?.wellcome}</div>
            <Link to={"/about-us"} >about us</Link> */}
            {/* <Link to={"/about-us/my-car"} >about us</Link> */}
            <div onClick={() => setAge("19")} style={{color: "#000", width: "fit-content", background: "#ffffff", padding: "8px 16px", marginRight: "4px" }}>19</div>
            <div onClick={() => setAge("25")} style={{color: "#000", width: "fit-content", background: "#ffffff", padding: "8px 16px", marginRight: "4px" }}>25</div>
            <div onClick={() => setAge("27")} style={{color: "#000", width: "fit-content", background: "#ffffff", padding: "8px 16px", marginRight: "4px" }}>27</div>
            <div onClick={() => setAge("39")} style={{color: "#000", width: "fit-content", background: "#ffffff", padding: "8px 16px", marginRight: "4px" }}>39</div>
            {data?.length ?
                data.filter((val: any) => val?.age === age).map((v: any, idx: number) =>
                    <Link key={idx} to={`/about-us/${JSON.stringify(v)}`}>
                        <p>name: {v?.name}</p>
                        <p>age: {v?.age}</p>
                        <p>gender: {v?.gender}</p>
                    </Link>
                )
                :
                null}
        </div>
    );
};

export default Home