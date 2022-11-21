import React, { useContext } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './project/styles/swiper-bundle.min.css';
import './project/styles/style.css';

import Head from './project/Head';
import Swipper from './project/Swipper';
import Theme from './project/Theme';
import Questions from './project/Questions';
import Tests from './project/Tests';
import Information from './project/Information';
import Presentation from './project/Presentation';
import Exercises from './project/Exercises';
import SelectTests from './project/SelectTests';
import Mentality from './project/Mentality';
import Test from './project/Test';

import { StateContext } from './StateProvider';
function App() {
    
    // Bu index.js dan berilayotgan test o'zgaruvchi
    const [data,setData] = useContext(StateContext);
    

    return (
        <div className="App">
            
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Head />}>
                            <Route index element={<Swipper />} />
                            <Route path="/information" element={<Information />} />
                            <Route path="/theme" element={<Theme />} />
                            <Route path="/presentation" element={<Presentation />} />
                            <Route path="/exercises" element={<Exercises />} />
                            <Route path="/test" element={<Test />} />
                                
                            <Route path="/select" element={<SelectTests />} />
                            <Route path="/tests" element={<Tests />} />
                            <Route path="/questions" element={<Questions />} />
                            <Route path="/mentality" element={<Mentality />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>

        </div>
    );
}

export default App;