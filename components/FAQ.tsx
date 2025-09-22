'use client'

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export type FAQItem = { q: string; a: string }

type FAQProps = {
  items?: FAQItem[]
  title?: string
}

const defaultFaqs: FAQItem[] = [
  { q: 'Kaise book karun test ride?', a: 'WhatsApp par humare sales number pe message bhejiye: +91 7319762328. Hum aapko slot confirm kar denge.' },
  { q: 'Service booking kaise karein?', a: 'Service ke liye WhatsApp: +91 7480012328 ya Services page pe "Book Service" button use karein.' },
  { q: 'Kya genuine parts available hain?', a: 'Haan, genuine TVS parts available hain. Parts ke liye Parts section me dekhiye aur WhatsApp se confirm karein.' }
]

export default function FAQ({ items = defaultFaqs, title = 'Frequently Asked' }: FAQProps) {
  return (
    <div>
      <Typography variant='h5' sx={{ mb: 2, fontWeight: 700 }}>
        {title}
      </Typography>
      {items.map((f, i) => (
        <Accordion key={f.q} defaultExpanded={i === 0} sx={{ mb: 1.2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${i}-content`} id={`faq-${i}-header`}>
            <Typography sx={{ fontWeight: 600 }}>{f.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color='text.secondary'>{f.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
