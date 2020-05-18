import React, { useState } from 'react';
import './App.css';

function App() {
    const [mode, setMode] = useState('light');

    const handleClickLight = () => {
        setMode('light');
        console.log('handleClickLight körs');
    }

    console.log('App körs');
    return (
        <div className={'App ' + mode}>
            <header className="App-header">
                <h1>My first React app!</h1>
            </header>
            <main>
                <p>
                Choose your preferred mode
                </p>
                <p>
                    <button onClick={handleClickLight}> Light </button>
                    <button onClick={() => setMode('dark')}> Dark </button>
                </p>
            </main>
        </div>
    );
}

export default App;
