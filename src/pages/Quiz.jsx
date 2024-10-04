import React from 'react'

import '../App.css'
import Question from '../components/Question'
import HeaderButtons from '../components/HeaderButtons'

const Quiz = () => {
    return (
        <div className="App">
            <HeaderButtons/>
            <div className="App-content">
                <Question/>
            </div>
        </div>
    )
}

export default Quiz