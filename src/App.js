import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Home from './pages/Home'
import Quiz from './pages/Quiz'
import QuizComplete from './pages/QuizComplete'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#7c9c99',
      },
      secondary: {
        main: '#f8bbd0',
        contrastText: '#000',
      },
    },
    typography: {
      fontSize: 30,
    },
  })




  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route path="/judgemental-car-quiz" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz-complete" element={<QuizComplete />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
