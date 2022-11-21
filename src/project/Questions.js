import {React, useContext, useState, useRef,useEffect} from 'react';
import { StateContext } from '../StateProvider';
import {Link} from "react-router-dom";
import mentality from './img/mentality.png';
import jsonData from "./Json/quest.json";
import shuffle from '../utils/shuffle';

const Questions = () => {

    const [data,setData] = useContext(StateContext);
    const [savolNum,setSavolNum] = useState(0);
    const [ball,setBall] = useState(0);
    const [showScore,setShowScore] = useState(false);
    const [quest,setQuests] = useState([]);
    const [doneQuest, setDoneQuest] = useState([]);
    const resRef = useRef();
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
            console.log(filQuest);
        }
    }, [quest]);


    const Submit = e =>{
        e.preventDefault();
        if(resRef.current.value == ""){
            resRef.current.focus();
            return 0;
        }
        if(resRef.current.value==doneQuest[savolNum].variant){
            setData(data+4);
            setBall(ball+4);
        }else{
            console.log(resRef.current.value);
            console.log(doneQuest[savolNum].variant);
        }
        nextQuist = savolNum + 1;
        if(nextQuist < doneQuest.length){
            setSavolNum(nextQuist);
        }else{
            setShowScore(true);
        }
    }
    return (
        <div className='container question'>
            {
                showScore?(
                    <div className='show_container'>
                        <div className='show_score border'>
                            {
                                (ball>doneQuest.length/2)? 

                                (
                                    <>
                                        <div className='score_text'>
                                            <h3 className='score_status'>Ajoyib</h3>
                                            <p className='score_ball'>Siz bu bosqichda {ball} to'pladingiz</p> 
                                        </div>
                                    </>
                                )
                                :(
                                    <>
                                        
                                        <div className='score_text'>
                                            <h3 className='score_status'>Siz bu bosqichda {ball} ball to'pladingiz</h3>
                                        </div>
                                    </>
                                )
                            }
                            <Link to="/mentality">
                                <button className='reset_btn' type='submit'>Keyingi bosqiga utish</button>
                            </Link>
                        </div>
                    </div>
                )
                :
                (
                    (doneQuest.length)?(
                        <>
                            <h1>Mantiqiy savollar</h1>

                            <div className='question_box' key={savolNum}>
                                <div className='question_num'>
                                    <span>{savolNum+1}/ </span>  <span>5</span>
                                </div>
                                <div className='question_text'>
                                <h3>{doneQuest[savolNum].savol}</h3>
                                <h5>{doneQuest[savolNum].variant}</h5>
                                </div>
                                <div className='answer'>
                                    <form onSubmit={Submit}>
                                        <input 
                                            ref={resRef}
                                            className='mantiqiy_in' 
                                            type="text"
                                            placeholder='javob'
                                            name="ism"
                                        />
                                        <button className='answer_button man-btn'>Yuborish</button>
                                    </form>
                                </div>
                            </div>
                        </>
                     ):(
                        <>Loading....</>
                    ) 
                )
            }
            <img className='tests_imeges' src={mentality}/>
        </div>
    );
    
};

export default Questions;