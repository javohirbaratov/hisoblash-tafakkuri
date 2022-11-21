import { React, useContext, useState, useRef,useEffect} from 'react';
import { exportComponentAsPNG } from "react-component-export-image";
import { StateContext } from '../StateProvider';
import { Link } from "react-router-dom";

import Confetti from 'react-confetti';
import useSound from 'use-sound';
import qarsak from './sound/qarsak.mp3';
import Trophy from './img/trophy.png';
import thinker from './img/thinker.png';
import sertifikat1 from './img/1-darajali.png';
import sertifikat2 from './img/2-darajali.png';
import sertifikat3 from './img/3-darajali.png';

import jsonData from "./Json/mentality.json";
import shuffle from '../utils/shuffle';

const Mentality = () => {
    const componentRef = useRef();
    const [name, setName] = useState("");
    const [play] = useSound(qarsak);
    const [data, setData] = useContext(StateContext);
    
    const [savolNum, setSavolNum] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    
    const [quest,setQuests] = useState([]);
    const [doneQuest, setDoneQuest] = useState([]);

    let nextQuist = 0;

    useEffect(() => {
        setQuests(shuffle(jsonData));
    }, []);

    useEffect(() => {
        if(quest.length) {
            let filQuest = [];
            quest.map(item => {
                if(filQuest.length <5){
                    filQuest.push(item);
                }
            })
            setDoneQuest(filQuest);
            console.log(doneQuest);
        }
    }, [quest]);

    const ansverResponse = (isCorrect) => {
        if (isCorrect) {
            setData(pre => pre + 10);
        }
        nextQuist = savolNum + 1;
        if (nextQuist < 5) {
            setSavolNum(nextQuist);
        } else {
            setShowScore(true);
            setData(pre => {
                if (pre > 70) {
                    setTimeout(play, 600);
                    console.log(data);
                }
                return pre;
            })
        }
    }

    const modal = () =>{
        if(openModal){
            console.log(name);
        }else{
            setOpenModal(!openModal);
        }
    }

    const reset = () => {
        setShowScore(false);
        setSavolNum(0);
        setData(0);
    }

    return (
        <div className='container question'>
            {
                showScore ? (

                    <div className='show_container'>
                        <div className='show_score border'>
                            {
                                (data > 85)?
                                    (
                                        (openModal)?
                                        (
                                            <div className='sertificate'>
                                                <label className='name'>Ism sharfingizni kiriting </label>
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input_name'></input>
                                                <div id='sertificate1' ref={componentRef}>
                                                    <p className='serteficate_name'>{name}</p>
                                                    <img className='sertifikat' src={sertifikat1}></img>
                                                </div>
                                            </div>
                                        ):(
                                            <div className='result'>
                                                <Confetti
                                                    width={10000}
                                                    height={1000}
                                                    numberOfPieces={3000}
                                                    gravity={.2}
                                                    recycle={false}
                                                />
                                                <img className='trophy' src={Trophy}></img>
                                                <div className='score_text'>
                                                    <h3 className='score_status'>Ajoyib</h3>
                                                    <p className='score_ball'>Siz 100 baldan {data} ball tupladingiz</p>
                                                </div>
                                            </div>
                                        )
                                    )
                                    :(data>70)?(
                                        (openModal)?
                                        (
                                            <div className='sertificate'>
                                                <div className='sertificate'>
                                                    <label className='name'>Ism sharfingizni kiriting </label>
                                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input_name'></input>
                                                </div>
                                                <div id='sertificate2' ref={componentRef}>
                                                    <p className='serteficate_name'>{name}</p>
                                                    <img className='sertifikat' src={sertifikat2}></img>
                                                </div>
                                            </div>
                                        ):(
                                            <div className="result">
                                                <div className='score_text'>
                                                    <h3 className='score_status'>Yaxshi</h3>
                                                    <p className='score_ball'>Siz 100 baldan {data} ball tupladingiz</p>
                                                </div>
                                            </div>
                                        )
                                    ):(
                                        (openModal)?
                                        (
                                            <div className='sertificate'>
                                                <div className='sertificate'>
                                                    <label className='name'>Ism sharfingizni kiriting </label>
                                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input_name'></input>
                                                </div>
                                                <div id='sertificate2' ref={componentRef}>
                                                    <p className='serteficate_name'>{name}</p>
                                                    <img className='sertifikat' src={sertifikat3}></img>
                                                </div>
                                            </div>
                                        ):(
                                            <div className="result">
                                                <div className='score_text'>
                                                    <h3 className='score_status'>Yaxshi</h3>
                                                    <p className='score_ball'>Siz 100 baldan {data} ball tupladingiz</p>
                                                </div>
                                            </div>
                                        )
                                    )
                            }
                            <Link to="/select">
                                <button className={`${openModal? 'none':'reset_btn'}`} type='submit' onClick={reset}>Qaytadan boshlash</button>
                            </Link>
                                <button className={`${openModal? 'none':'reset_btn'}`} type='button' onClick={modal}>Sertifikatni yuklab olish</button>
                            <Link to="/">
                                <button 
                                    className={`${openModal? 'reset_btn':'none'}`} 
                                    onClick={() => exportComponentAsPNG(componentRef)}
                                    type='submit'>
                                        Yuklab olish
                                </button>
                            </Link>
                        </div>
                    </div>
                )
                :
                (
                    (doneQuest.length)?(
                        <>
                            <h1>Hisoblash tafakkuri</h1>

                            <div className='question_box' key={savolNum}>
                                <div className='question_num'>
                                    <span>{savolNum+1}/ </span><span>5</span>
                                </div>
                                <div className='question_text'>
                                    <h3>{doneQuest[savolNum].savol}</h3>
                                </div>
                                <div className='answer grid'>
                                    {shuffle(doneQuest[savolNum].variantlar).map((variants)=>
                                        <button className='answer_button' key={variants.num} onClick={()=>ansverResponse(variants.isCorrect)}>{variants.variant}</button>
                                    )}
                                </div>
                            </div>
                        </>
                    ):(
                        <>Loading....</>
                    ) 
                )
            }
            <img className='tests_imeges' src={thinker}/>
        </div>
    );
};

Mentality.propTypes = {};

export default Mentality;