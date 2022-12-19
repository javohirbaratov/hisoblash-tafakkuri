import React from 'react';
import { Link } from 'react-router-dom';

const Exercises = () => {
    return (
        <div className='container'>
            <div className="table grid">
                <Link to="/information">Menuga qaytish</Link>
                <div className="title">
                    <h1>Mashg'ulotlar</h1>
                </div>
                <Link
                    to={"../view/taqdimotImg&" + "amaliy"}
                >
                    <div className="table-item">
                        <p>1 - mashg'ulot</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Exercises;