import React, { useState } from 'react';
import './App.css';

function App() {
    // Skapa state-variabler för allt som komponenten behöver "komma ihåg"
    const [mode, setMode] = useState('light');
    const [newsletter, setNewsletter] = useState(false);
    const [count, setCount] = useState(1337);

    // Skapa funktioner för att hantera events, eller använd arrow functions i JSX. Är det mycket som ska göras vid en händelse så blir det ofta mer lättläst att skapa en funktion.
    const handleClickLight = () => {
        setMode('light');
        console.log('handleClickLight körs');
    }


    // Returnera JSX - använd state-variabler för att bestämma vad som ska visas
    return (
        <div className={'App ' + mode}>
            {/* Kommentarer i JSX måste vara inuti en "mustasch" */}
            <header className="App-header">
                <h1>My first React app!</h1>
            </header>
            <main>
            <section>
                <p>
                Choose your preferred mode
                </p>
                <p>
                    {/* två sätt att göra samma sak på: förberedd funktion eller arrow function */}
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

            <section>
                <p>
                    Värdet är: {count}
                    <button onClick={() => setCount(count + 1)}> Öka </button>
                    <button onClick={() => setCount(count - 1)}> Minska </button>
                </p>
            </section>
            </main>
        </div>
    );
}

export default App;
