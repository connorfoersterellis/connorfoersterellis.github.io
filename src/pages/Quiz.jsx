import React from 'react'

import '../App.css'
import Question from '../components/Question'
import LinkButton from '../components/LinkButton'

const Quiz = () => {
    return (
        <div className="App">
            <header className="App-header">
                <LinkButton
                    to='/judgemental-car-quiz'
                    text='Home'
                    textProps={{
                        fontSize: 20
                    }}
                />
            </header>
            <div className="App-content">
                <Question/>
            </div>
        </div>
    )
}

export default Quiz