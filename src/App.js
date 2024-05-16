import React from "react";
import "./app.css";
import { useState } from "react";

const App = ()=>{

    let quotes = [];


    async function loadQuotes(){
        const quoote = await fetch('https://type.fit/api/quotes');
        quotes = await quoote.json();
        // console.log(quotes);
    }

    let [state, setState] = useState({
        text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        author: "Sudhir Vishwakarma",
    });

    const newQuote = ()=>{
        const random = quotes[Math.floor(Math.random()*quotes.length)];
        setState(random);
    }

    loadQuotes();

    return (
        <>
            <div className="main-container">
                <div className="container">
                    <h1>Quote Of The Day</h1>
                    <div className="line"></div>
                    <p className="quote">" {state.text} "</p>
                    <p className="author">__ {state.author.split(',')[0]}</p>
                    <button onClick={()=>{newQuote()}}>New Quote</button>
                </div>
            </div>
        </>
    )
}

export default App;