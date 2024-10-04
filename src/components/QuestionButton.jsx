import React from 'react'
import { Button, Typography } from '@mui/material'

const QuestionButton = ({text, onClick, }) => {
    return (
        <Button
            sx={{ 
                minWidth: '100%',
                minHeight: '100%'
            }}
            variant="text"
            onClick={onClick}
        >
            <Typography 
                fontSize={30}
            >
                {text}
            </Typography>
        </Button>
    )
}

export default QuestionButton