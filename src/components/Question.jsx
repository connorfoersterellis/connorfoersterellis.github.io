import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { withStyles } from '@mui/styles'

import QuestionButton from './QuestionButton'
import questions from '../questions/questions'


const QuestionWithStyles = withStyles({
  root: {
    color: "#fabb5e",
    backgroundColor: "#141516",
  }
})(Typography)

const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(questions[0])
    const currentAnswers = currentQuestion.answers
    const navigate = useNavigate()

    const handleAnswerClick = (nextQuestion, calculatedCar) => {
        if (nextQuestion) {
            return setCurrentQuestion(questions[nextQuestion])
        }
        return navigate('/quiz-complete', {state: {carSuccess: calculatedCar}})
    }    

    return (
        <Box>
            <Box mb={5}>
                <QuestionWithStyles fontSize={38}>
                    {currentQuestion.questionText}
                </QuestionWithStyles>
            </Box>               
            {currentAnswers?.map((n, index) => (
                <QuestionButton 
                    text={currentAnswers[index].response}
                    calculatedCar={currentAnswers[index].calculatedCar}                                
                    onClick={() => handleAnswerClick(currentAnswers[index]?.nextQuestion, currentAnswers[index]?.calculatedCar)}
                />
            ))}
        </Box>
    )
}

export default Question