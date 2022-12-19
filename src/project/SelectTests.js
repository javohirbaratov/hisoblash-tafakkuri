import { React, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { StateContext } from '../StateProvider';

const SelectTests = () => {
    const [data, setData] = useContext(StateContext);
    
    useEffect(() => {
        setData(0);

    }, [])

    return (
        <div className='container information'>
            <div className='information_select'>
                <h1>Savollar va testlar bo'yicha umumiy ma'lumotlar</h1>
                <div className='grid menu'>
                    <p><span>Test</span> bo'limida 10 ta savol bor jami 30 ball to'plashingiz mumkin</p>
                    <p><span>Mantiqiy Savollar</span> bo'limida 5 ta savol bor jami 20 ball to'plashingiz mumkin</p>
                    <p><span>Hisoblash tafakkuri</span> bo'limida 5 ta savol bor jami 50 ball to'plashingiz mumkin</p>
                    <Link to="/tests">
                        <button className='reset_btn' type='submit'>Davom etish</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SelectTests;