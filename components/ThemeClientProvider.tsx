'use client'

import React from 'react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: { main: '#0d47a1' },
    secondary: { main: '#d32f2f' }
  },
  shape: { borderRadius: 14 }
})

export default function ThemeClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
