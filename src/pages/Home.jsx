import React from 'react'

import { Typography } from '@mui/material'

import { allCars } from '../silhouttes/export-helper'


import '../App.css'
import LinkButton from '../components/LinkButton'

const Home = () => {
    return (
        <div className="App">
            <header className="App-content">
                <Typography>
                    Judgemental Car Quiz
                </Typography>
                <img 
                    class='allCars'
                    src={allCars} 
                    alt="car silhouttes" 
                    width={'30%'}
                />
                <Typography
                    fontSize={25}
                    mb={3}
                >
                    Answer honestly - or don't
                </Typography>
                <LinkButton to='/quiz' text='Begin' />
            </header>
        </div>
    )
}

export default Home