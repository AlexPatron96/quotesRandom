import { useState } from 'react'
import reactLogo from './assets/react.svg'
import quotes from './quotes.json'
import './App.css'
import QuoteBox from './components/QuoteBox'


function App() {
	
	//console.log(quotes.length);
	//const colorRamdon = Math.floor(Math.random()* colorArray.length)
	//const quoteRamdon = Math.floor(Math.random()* quotes.length)
	//console.log(quoteRamdon);

	return (
    	<div className="App">
			<QuoteBox quotes={quotes}></QuoteBox>
    	</div>
	)
}

export default App
