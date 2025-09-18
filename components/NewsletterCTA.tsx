'use client'

import { Box, TextField, Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  return (
    <Box sx={{py:4}}>
      <Typography variant="h6" sx={{mb:1}}>Get latest offers</Typography>
      <Typography variant="body2" color="text.secondary" sx={{mb:2}}>Sign up for offers and service deals. (We will WhatsApp you)</Typography>
      <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
        <TextField label="Your WhatsApp number" placeholder="+91 98xxxxxxxx" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Button variant="contained" href={`https://wa.me/917319762328?text=${encodeURIComponent('Please add me to offers list. My WhatsApp: '+email)}`}>
          Join via WhatsApp
        </Button>
      </Stack>
    </Box>
  )
}
