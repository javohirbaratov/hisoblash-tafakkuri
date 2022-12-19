import React from 'react';
import { Link } from 'react-router-dom';

const arr = [];
for (let i=1; i<=31; i++){
    if(i==22)
        continue;
    arr[i] = i;
    
}
const Presentation = () => {
    return (
        <div className='container'>
            <div className="table grid">
                <Link to="/information">Menuga qaytish</Link>
                <div className="title">
                    <h1>Taqdimotlar</h1>
                </div>
                {arr.map((num)=> 
                    <Link
                        to={"../view/taqdimotImg&" + num}
                        key={num}
                    >
                        <div className="table-item">
                            <p>{num} - taqdimot</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Presentation;