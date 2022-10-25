import React, { Component } from 'react';
import { useState } from 'react';


const  ButtonBox = ({clickBox,colorArray}) => {
    
    //setquoteArray(quoteArray)
    return (
        <div>
            <button className='buttonBox' style={{background:`${colorArray}`}} onClick={clickBox}>
                Next 
                <i class='bx bx-right-arrow' ></i>
            </button>
        </div>
    );    
}

export default ButtonBox;