'use client'

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const faqs = [
  { q: 'Kaise book karun test ride?', a: 'WhatsApp par humare sales number pe message bhejiye: +91 7319762328. Hum aapko slot confirm kar denge.' },
  { q: 'Service booking kaise karein?', a: 'Service ke liye WhatsApp: +91 7480012328 ya Services page pe "Book Service" button use karein.' },
  { q: 'Kya genuine parts available hain?', a: 'Haan, genuine TVS parts available hain. Parts ke liye Parts section me dekhiye aur WhatsApp se confirm karein.' }
]

export default function FAQ() {
  return (
    <div>
      <Typography variant="h5" sx={{mb:2}}>Frequently Asked</Typography>
      {faqs.map((f, i) => (
        <Accordion key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{f.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{f.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
