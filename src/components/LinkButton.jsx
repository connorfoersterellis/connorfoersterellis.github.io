import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography, Box } from '@mui/material'

const LinkButton = ({ to, text, textProps, buttonProps }) => {
  const navigate = useNavigate();

  const handleButtonClick = (to) => {
    navigate(to || '/judgemental-car-quiz')
  }

  return (
    <Box m={1}>
      <Button 
        variant="contained" 
        onClick={() => handleButtonClick(to)}
        {...buttonProps}
      >
        <Typography {...textProps}>
          {text}
        </Typography>
      </Button>
    </Box>
  )
}

export default LinkButton