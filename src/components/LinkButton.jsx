import React from 'react'
import { Button, Typography, Box } from '@mui/material'

const LinkButton = ({ to, text, textProps, buttonProps }) => {
  return (
    <Box m={1}>
      <Button 
        variant="contained" 
        onClick={() => window.location.href = to || '/judgemental-car-quiz'}
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