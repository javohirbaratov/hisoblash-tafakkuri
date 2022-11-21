import React from 'react';
import { Link } from 'react-router-dom';
const arr = [];
for (let i=1; i<=31; i++){
    if(i==22)
        continue;
    arr[i] = i;
    
}
const Exercises = () => {
    return (
        <div className='container'>
            <div className="table grid">
                <Link to="/information">Menuga qaytish</Link>
                <div className="title">
                    <h1>Mashg'ulotlar</h1>
                </div>
                <a href={require("../file/amaliy.pdf")} target="_blank">
                    <div className="table-item">
                        <p>1 - Mashg'ulot</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Exercises;