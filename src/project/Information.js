import React from 'react';

import { Link } from "react-router-dom";

const Information = () => {
    
    return (
        <div className='container information'>
            <div className='information_select'>
                <h1>Fan bo'yicha umumiy ma'lumotlar</h1>
                <div className='grid menu'>
                    <Link className='grid_item' to="/theme">
                        Mavzular
                    </Link>
                    <Link className='grid_item' to="/presentation">
                        Taqdimotlar
                    </Link>
                    <Link className='grid_item' to="/exercises">
                        Amaliy mashg'ulotlar
                    </Link>
                </div>
            </div>
        </div>
    );

};


export default Information;