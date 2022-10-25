import React, { Component } from 'react';
import { useState } from 'react';


const  ButtonBox = ({clickBox,colorArray}) => {
    
    //setquoteArray(quoteArray)
    return (
        <div>
            <button style={{color:`${colorArray}`}} onClick={clickBox}>Next</button>
        </div>
    );    
}

export default ButtonBox;