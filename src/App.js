import React, { useState } from 'react';
import './App.css';

function App() {
    const [mode, setMode] = useState('light');
    const [newsletter, setNewsletter] = useState(false);

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
            <section>
                <p>
                Choose your preferred mode
                </p>
                <p>
                    <button onClick={handleClickLight}> Light </button>
                    <button onClick={() => setMode('dark')}> Dark </button>
                </p>
            </section>

            <section>
                <p>
                    Vill du ha vårt nyhetsbrev?
                    <button className={newsletter ? 'selected' : ''}
                        onClick={() => setNewsletter(true)}>Ja</button>
                    <button className={!newsletter ? 'selected' : ''}
                        onClick={() => setNewsletter(false)}>Nej</button>
                </p>
            </section>
            </main>
        </div>
    );
}

export default App;
