import {React, useContext, useState,useEffect} from 'react';
import { StateContext } from '../StateProvider';
import {Link} from "react-router-dom";
import questions from './img/questions.png';
import jsonData from "./Json/test.json";
import shuffle from '../utils/shuffle';

const Tests = () => {

    const [data,setData] = useContext(StateContext);
    const [savolNum,setSavolNum] = useState(0);
    const [ball,setBall] = useState(0);
    const [showScore,setShowScore] = useState(false);
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
                if(filQuest.length <10){
                    filQuest.push(item);
                }
            })
            setDoneQuest(filQuest);
            console.log(filQuest);
        }
    }, [quest]);

    const ansverResponse = (isCorrect) => {
        if(isCorrect){
            
            setData(data+3);
            setBall(ball+3);
        }
        nextQuist = savolNum + 1;
        if(nextQuist < doneQuest.length){
            setSavolNum(nextQuist);
        }else{
            setShowScore(true);
        }
    }

    return (
        <>
        <div className='container question'>
            {
                showScore?(
                    <div className='show_container '>
                        <div className='show_score border'>
                            {
                                (ball>quest.length/2)? 

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
                            <Link to="/questions">
                                <button className='reset_btn' type='submit'>Keyingi bosqiga utish</button>
                            </Link>
                        </div>
                    </div>
                )
                :
                (
                    (doneQuest.length)?(
                        <>
                            <h1>Test</h1>
                            <div className='question_box' key={savolNum}>
                                <div className='question_num'>
                                    <span>{savolNum+1}/ </span>  <span>10</span>
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
            <img className='tests_imeges' src={questions}/>
        </div>
        </>
    );

};

export default Tests;