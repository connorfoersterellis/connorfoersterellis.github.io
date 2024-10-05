import React from 'react'
import { useLocation } from 'react-router-dom'
import { Typography, Link } from '@mui/material'
import Confetti from 'react-confetti-boom'

import '../App.css'
import HeaderButtons from '../components/HeaderButtons'


const QuizComplete = () => {
    const calculatedCar = useLocation().state.carSuccess
    const carName = calculatedCar.Name
    const carLink = calculatedCar.Link
    const carPicture = calculatedCar.Picture
    const carDescription = calculatedCar.Description
    const carReason = calculatedCar.Reason

    return (
        <div className="App">
            <HeaderButtons/>
            <div className="App-content">
                <Confetti mode='fall' particleCount={50} />
                <img 
                    src={carPicture} 
                    alt={carName}
                    width='60%'
                />
                <Typography 
                    mt={3} 
                    fontSize='50px' 
                    color={'warning.light'}
                >
                    {carName}
                </Typography>
                <Typography 
                    m={3} 
                    fontSize='30px' 
                    color={'error.dark'}
                >
                    {carReason}
                </Typography>
                <Typography 
                    m={3} 
                    fontSize='25px'
                    color={'primary.dark'}
                >
                    {carDescription}
                </Typography>
                <Link 
                    href={carLink} 
                    target="_blank"
                    color={'primary.dark'}
                >
                    Car Wiki Page
                </Link>                
            </div>
        </div>
    )
}

export default QuizComplete