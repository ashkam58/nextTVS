
'use client'
import { Box, Fab, Tooltip } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'

export default function WhatsAppFloat() {
  return (
    <Box sx={{ position: 'fixed', right: 16, bottom: 16, display:'grid', gap:1, zIndex:1300 }}>
      <Tooltip title="WhatsApp Sales">
        <Fab variant="extended" className="whatsapp-pulse" color="success" href="https://wa.me/917319762328?text=Namaste%2C%20mujhe%20bike%20ke%20baare%20mein%20jankari%20chahiye." aria-label="whatsapp-sales">
          <PhoneIcon sx={{ mr: 1 }} />
          WhatsApp Sales
        </Fab>
      </Tooltip>
      <Tooltip title="WhatsApp Service">
        <Fab variant="extended" color="secondary" href="https://wa.me/917480012328?text=Namaste%2C%20mujhe%20service%20book%20karni%20hai." aria-label="whatsapp-service">
          <PhoneIcon sx={{ mr: 1 }} />
          WhatsApp Service
        </Fab>
      </Tooltip>
    </Box>
  )
}
