import React from 'react';
import { Link } from 'react-router-dom';

const arr = [];
for (let i=1; i<=31; i++){
    arr[i] = i;
    
}
const Theme = () => {
    return (
        <div className='container'>
            <div className="table grid">
                <Link to="/information">Menuga qaytish</Link>
                <div className="title">
                    <h1>Mavzular</h1>
                </div>
                {arr.map((num)=> 
                    <Link
                        to={"../view/maruzaImg&" + num}
                        key={num}
                    >
                        <div className="table-item">
                            <p>{num} - maruza</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Theme;