import React, { useEffect, useState } from 'react'
import style from "./index.module.css"
import en from "../../utils/en.json"
import hn from "../../utils/hn.json"
import { Link } from 'react-router-dom';
import useCount from '../../hooks/useCount';
import { useDispatch } from 'react-redux';
import { CountNum } from '../../redux/CountReducer';

const Home = (props: any) => {

    const dispatch = useDispatch();

    const { data, InCrement, DiCrement } = useCount();

    const [lang, setLang] = useState(en)

    const [age, setAge] = useState("19")
    const [count, setCount] = useState(0)

    const lanChange = (text: any) => {
        console.log(text.text, "__text__")
        if (lang === en) {
            setLang(hn)
        } else {
            setLang(en)
        }
    }

    // useEffect(() => {
    //     setCount(data)
    //     console.log(data, "___data__")
    // }, [data])


    // let data = props?.homeData

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

    useEffect(() => {
        dispatch(CountNum(data))
    }, [data])

    return (
        <div>
            {/* <div className={style?.button} onClick={() => lanChange({ text: "hii" })}>Change</div>
            <div className={style?.home_roort}>{lang?.wellcome}</div> */}
            {/* <Link to={"/about-us"} >about us</Link> */}
            {/* <Link to={"/about-us/my-car"} >about us</Link> */}
            {/* {data?.length ?
                data.filter((val: any) => val?.age === age).map((v: any, idx: number) =>
                <Link key={idx} to={`/about-us/${JSON.stringify(v)}`}>
                <p>name: {v?.name}</p>
                <p>age: {v?.age}</p>
                <p>gender: {v?.gender}</p>
                </Link>
                )
                :
                null} */}
            <div
                onClick={() => InCrement(20)}
                style={{
                    border: "5px solid #fff",
                    width: "10rem",
                    height: "10rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >+</div>
            {data}
            <div onClick={() => DiCrement(20)}
                style={{
                    border: "5px solid #fff",
                    width: "10rem",
                    height: "10rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>-</div>

            <Link to={`/about-us/jdhfbnfd`}>
                about us
            </Link>


            {/* <div className={style.card_main_root}>
                {["","","","","","","","","","","","","","","","","","","",""].map((v,i)=> <div key={i} className={style.card_root}>{i}</div>)}
            </div> */}
        </div>
    );
};

export default Home