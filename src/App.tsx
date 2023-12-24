import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Navbar from './components/Navbar';
import healthImageBig1 from '/header-illustration_1.png';

function App() {
    return (
        <>
            <Navbar />
            <div className="main-container-one">
                <div className="main-container-one-text">
                    <div className="main-container-one-text-inner">
                        <h1>Virtual healthcare for you</h1>
                        <p>
                            Our service provides progressive, and affordable
                            healthcare, accessible on mobile and online for
                            everyone
                        </p>
                        <button className="button-primary-active">
                            Consult today
                        </button>
                    </div>
                </div>
                <img src={healthImageBig1} />
            </div>
        </>
    );
}

export default App;
