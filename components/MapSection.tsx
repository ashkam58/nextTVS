'use client'

import { Box, Typography, Card, CardContent } from '@mui/material'

export default function MapSection() {
  return (
    <Box sx={{py:4}}>
      <Typography variant="h6" sx={{mb:2}}>Find Us</Typography>
      <Card>
        <CardContent>
          <Box sx={{ width: '100%', height: 360 }}>
            <iframe
              title="Tahalka TVS Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.1234567890123!2d86.1222222!3d25.4166666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f33f1234567890%3A0xabcdef1234567890!2sNH-28%2C%20Teghra%20Chowk%2C%20Begusarai!5e0!3m2!1sen!2sin!4v1694870400000"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
