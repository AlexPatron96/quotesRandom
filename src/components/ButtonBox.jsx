import React, { Component } from 'react';
import { useState } from 'react';


const  ButtonBox = ({clickBox}) => {

    
    //setquoteArray(quoteArray)

    return (
        <div>
            <button onClick={clickBox}>Next</button>
        </div>
    );    
}

export default ButtonBox;