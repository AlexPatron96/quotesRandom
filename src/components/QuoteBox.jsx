import React, { Component } from 'react';
import ButtonBox from './ButtonBox';

const  QuoteBox = ({quotes}) => {
    
    const clickBox = () => {
    const quoteRamdon = Math.floor(Math.random() * quotes.length)
    }
    return (
        <div>
            <i class='bx bxs-quote-alt-left'></i>
            <h2>{quotes[0].quote}</h2>
			<h2>{quotes[0].author}</h2>
            <ButtonBox clickBox={clickBox}></ButtonBox>
        </div>
    );    
}

export default QuoteBox;